// youtube video links
const YT_LINKS = {
  2022: "https://www.youtube.com/embed/VrgLB4SgrO4",
};

// helper: animate opacity
function animateOpacity(el, targetOpacity, duration, callback) {
  el.style.transition = `opacity ${duration}ms`;
  el.style.opacity = targetOpacity;
  if (callback) {
    setTimeout(callback, duration);
  }
}

// gallery years
document.querySelectorAll(".sb-picture-year-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const year = this.textContent.trim();

    const ytembed = document.getElementById("ytembed");
    const gpfull = document.getElementById("gpfull");
    const gpthumb = document.getElementById("gpthumb");

    if (YT_LINKS.hasOwnProperty(year)) {
      animateOpacity(gpfull, 0, 200, () => {
        gpfull.style.display = "none";
        ytembed.style.display = "block";
        animateOpacity(ytembed, 1, 200);
      });
    } else {
      animateOpacity(ytembed, 0, 200, () => {
        ytembed.style.display = "none";
        gpfull.style.display = "block";
        animateOpacity(gpfull, 1, 200);
      });
    }

    document
      .querySelectorAll(".sb-picture-year-link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    animateOpacity(ytembed, 0, 200, () => {
      ytembed.setAttribute("src", YT_LINKS[year]);
      animateOpacity(ytembed, 1, 200);
    });

    animateOpacity(gpfull, 0, 200, () => {
      gpfull.setAttribute("href", `assets/images/${year}/group.jpg`);
      gpthumb.setAttribute("src", `assets/images/${year}/group.thumb.jpg`);
      animateOpacity(gpfull, 1, 200);
    });

    document.querySelectorAll(".sb-picture-item").forEach((pic, i) => {
      const image = pic.querySelector(".sb-pic-link");
      const thumb = pic.querySelector(".sb-picture-img");
      const picnr = String(i + 1).padStart(2, "0");

      animateOpacity(image, 0, 200, () => {
        image.setAttribute("href", `assets/images/${year}/${picnr}.jpg`);
        thumb.setAttribute("src", `assets/images/${year}/${picnr}.thumb.jpg`);
        animateOpacity(image, 1, 200);
      });
    });

    e.preventDefault();
  });
});

// gallery lightbox option
if (typeof lightbox !== "undefined") {
  lightbox.option({
    albumLabel: "Bild %1 von %2",
  });
}

// youtube
function resizeYtFrame() {
  const wrapper = document.getElementById("yt-wrapper");
  const ytembed = document.getElementById("ytembed");
  const width = wrapper.offsetWidth * 0.99;
  ytembed.style.width = `${width}px`;
  ytembed.style.height = `${width * 0.5625}px`;
}
window.addEventListener("resize", resizeYtFrame);
resizeYtFrame();

// copyright year
const date = document.getElementById("year");
date.innerText = new Date().getFullYear();
