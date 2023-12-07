document.addEventListener("DOMContentLoaded", function () {

  class CarouselTag extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      shadow.innerHTML = `
    <style>
            .slider {
              display: flex;
              overflow: hidden;
              width: 100%;
              transition: transform 0.5s ease-in-out;
            }

            .carousel-container {
              max-width: 600px;
              margin: 20px auto;
            }
  
            .slide {
              flex: 0 0 100%;
              overflow: hidden;
              border: 1px black solid;
            }

          </style>
          <div class="slider"></div>
    `;

      const carouselContainer = shadow.querySelector(".slider");
      const imgUrls = [
        "images/image-1.jpeg",
        "images/image-2.jpeg",
        "images/image-3.jpeg",
        "images/image-4.jpeg",
        "images/image-5.jpeg",
      ];
      let currentIndex = 0;

      function updateCarousel() {
        const slide = document.createElement("div");
        slide.className = "slide";

        const image = new Image();
        image.src = imgUrls[currentIndex];

        image.style.width = "100%";
        image.style.height = "auto";

        slide.appendChild(image);
        carouselContainer.innerHTML = "";
        carouselContainer.appendChild(slide);

        currentIndex = (currentIndex += 1) % imgUrls.length;
        console.log(`❌ Current index is: ${currentIndex}`)
        console.log(`📸 Current imgURL is: ${image.src}`)
      }

      updateCarousel();

      setInterval(updateCarousel, 3000);
    }
  }

  customElements.define('carousel-tag', CarouselTag);
});