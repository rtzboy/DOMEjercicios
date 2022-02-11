const d = document,
  w = window;

// const $gmapsChild = d.getElementById("gmaps"),
//   $youtubeChild = d.getElementById("gyoutube");

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakPoint = w.matchMedia(mq);
  //   console.log(breakPoint.matches);

  const change = evt => {
    if (breakPoint.matches) {
      // code if breakpoint is equal or greater than "x"px
      // desktopContent
      d.getElementById(id).innerHTML = desktopContent;
      console.log(evt);
    } else {
      // mobileContent
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakPoint.addEventListener("change", change);
  change(breakPoint);
}
