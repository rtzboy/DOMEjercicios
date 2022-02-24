const d = document;

export default function smartVideo() {
  const $video = d.querySelector(".video_container");
  const $videoDiv = d.querySelector(".video_container .video_item");
  // const playVideo = $videoDiv.play();

  const opts = {
    threshold: 0.5,
  };

  function callbackVideo(entries, observer) {
    entries.forEach(entry => {
      //  console.log(entry);
      if (entry.isIntersecting) {
        $videoDiv.play();
      } else {
        $videoDiv.pause();
      }
      //  code
      try {
        d.addEventListener("visibilitychange", evt => {
          if (d.visibilityState === "visible" && entry.isIntersecting === true) {
            $videoDiv.play();
          } else {
            $videoDiv.pause();
          }
        });
      } catch (error) {
        console.log(error, "nada xd");
      }
    });
  }

  const observer = new IntersectionObserver(callbackVideo, opts);
  observer.observe($video);
}
