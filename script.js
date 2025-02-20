// document.addEventListener("scroll", function () {
//     let nav = document.getElementById("site-header");

//     if (window.scrollY > 50) {
//         nav.classList.add("scrolled");
//     } else {
//         nav.classList.remove("scrolled");
//     }
// });
// Lắng nghe sự kiện khi bấm vào link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Ngừng hành động mặc định của link

      // Thực hiện cuộn đến phần tử có id tương ứng
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",  // Chuyển đến với hiệu ứng mượt mà
        block: "start"       // Đưa phần tử đến vị trí đầu của section
      });
    });
  });

