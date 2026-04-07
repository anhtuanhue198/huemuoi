window.addEventListener("scroll", function () {
  var header = document.getElementById("site-header");
  if (window.scrollY > 50) { // Khi kéo xuống 50px
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});
 // Hàm di chuyển đến vị trí của section và lùi lại 90px
 function scrollToElement(elementId) {
  const element = document.querySelector(elementId);  // Lấy phần tử cần scroll đến
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100,  // Lùi lại 90px
      behavior: 'smooth'  // Thêm hiệu ứng cuộn mượt mà
    });
  }
}

// Lắng nghe sự kiện click của các link
document.querySelectorAll('.hero-buttons a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();  // Ngăn chặn hành động mặc định của link (di chuyển ngay lập tức)
    const target = this.getAttribute('href');  // Lấy href của link
    scrollToElement(target);  // Gọi hàm cuộn đến vị trí
  });
});

let currentIndex = 0;
        const slider = document.getElementById("heroSlider");
        const totalSlides = document.querySelectorAll(".hero-image").length;

        function slideImages() {
            currentIndex = (currentIndex + 1) % totalSlides;
            const translateValue = -currentIndex * 100 + "%";
            slider.style.transform = `translateX(${translateValue})`;
        }

        setInterval(slideImages, 2000); // Chuyển ảnh mỗi 5 giây
let currentIndex2 = 0;
        const slider2 = document.getElementById("heroSlider2");
        const totalSlides2 = document.querySelectorAll(".hero-image2").length;

        function slideImages2() {
            currentIndex2 = (currentIndex2 + 1) % totalSlides2;
            const translateValue2 = -currentIndex2 * 100 + "%";
            slider2.style.transform = `translateX(${translateValue2})`;
        }

        setInterval(slideImages2, 2000);
let currentIndex3 = 0;
        const slider3 = document.getElementById("heroSlider3");
        const totalSlides3 = document.querySelectorAll(".hero-image3").length;

        function slideImages3() {
            currentIndex3 = (currentIndex3 + 1) % totalSlides3;
            const translateValue3 = -currentIndex3 * 100 + "%";
            slider3.style.transform = `translateX(${translateValue3})`;
        }

        setInterval(slideImages3, 2000);
let currentIndex4 = 0;
        const slider4 = document.getElementById("heroSlider4");
        const totalSlides4 = document.querySelectorAll(".hero-image4").length;

        function slideImages4() {
            currentIndex4 = (currentIndex4 + 1) % totalSlides4;
            const translateValue4 = -currentIndex4 * 100 + "%";
            slider4.style.transform = `translateX(${translateValue4})`;
        }

        setInterval(slideImages4, 2000);      
let currentIndex5 = 0;
        const slider5 = document.getElementById("heroSlider5");
        const totalSlides5 = document.querySelectorAll(".hero-image5").length;

        function slideImages5() {
            currentIndex5 = (currentIndex5 + 1) % totalSlides5;
            const translateValue5 = -currentIndex5 * 100 + "%";
            slider5.style.transform = `translateX(${translateValue5})`;
        }

        setInterval(slideImages5, 2000);