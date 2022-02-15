const d = document;
const $video = d.querySelector("#id_camera");
const constraints = { video: true, audio: false };

export default function showCamera() {
  const device = async () => {
    let mediaStream = navigator.mediaDevices.getUserMedia(constraints);
    return mediaStream;
  };

  device().then(stream => {
    $video.srcObject = stream;
    $video.onloadedmetadata = function (e) {
      $video.play();
    };
  });
}
