/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log(data);

  postMessage('data validation called');
});
