document.addEventListener("DOMContentLoaded", function() {
    let scrollImage = document.querySelector(".scroll-image");
  
    window.addEventListener("scroll", function() {
      let scrollPosition = window.scrollY + window.innerHeight;
      let triggerPosition = scrollImage.offsetTop + (scrollImage.offsetHeight / 2);
  
      if (scrollPosition > triggerPosition) {
        scrollImage.setAttribute("src", "your-image.jpg");
        scrollImage.style.opacity = 1;
        scrollImage.style.transform = "translateY(0)";
      }
    });
  });