import { Injectable } from '@angular/core';

import {
  Plugins, CameraResultType, Capacitor, FilesystemDirectory,
  CameraPhoto, CameraSource
} from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";

  constructor() { }

  public async addNewToGallery() {
    //take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);

    /* storing the photos */
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos.map(p => {
        // Don't save the base64 representation of the photo data, 
        // since it's already saved on the Filesystem
        const photoCopy = { ...p };
        delete photoCopy.base64;

        return photoCopy;
      }))
    });
  }

  public async loadSaved() {
    // Retrieve cached photo array data
    const photos = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photos.value) || [];

    // Display the photo by reading into base64 format
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });

      // Web platform only: Save the photo into the base64 field
      photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
    }

  }

  private async savePicture(cameraPhoto: CameraPhoto) {
    /* converting photo to base64 format */
    const base64Data = await this.readAsBase64(cameraPhoto);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });

    return {
      filepath: fileName, webviewPath: cameraPhoto.webPath
    }

  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {

    /* readng the fetched photo as blob and converting it to base 64 */
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}

interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}
