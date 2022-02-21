const d = document;

export default function scrollMark() {
  console.log("ok!!");
  const $main = d.querySelectorAll("section[data-scroll-spy]");

  const opts = {
    root: null,
    //     rootMargin: "-250px",
    threshold: [0.5, 0.75],
  };

  const callFntn = (entries, observer) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      // console.log(id);
      try {
        if (entry.isIntersecting) {
          const $lia = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);
          $lia.classList.add("active");
        } else {
          const $lia = d.querySelector(`a[data-scroll-spy][href="#${id}"]`);
          $lia.classList.remove("active");
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const observer = new IntersectionObserver(callFntn, opts);
  //   console.log(observer);

  //   observer.observe($main);
  $main.forEach(elm => observer.observe(elm));
}
