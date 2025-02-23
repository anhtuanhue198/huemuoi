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


