import { Component } from "@angular/core";

@Component({
    selector: 'app-error',
    template: `
    <h4>This is the error component</h4>
    <p class="bg-danger">Some error occurred</p>
    `,
    styles: [`
        h4{
            font-size: 24px;
            color: #4d4d4d;
            font-weight: 600;
        }
        p{
            padding: 10px 25px;
            font-size: 18px;
        }
    `]
})
export class ErrorComponent {

}