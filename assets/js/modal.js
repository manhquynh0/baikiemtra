document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.querySelector(".subscribe");
  const userModal = document.querySelector(".modal");
  const closeBtn = userModal.querySelector(".close");

  userIcon.addEventListener("click", () => {
    userModal.classList.add("show");
  });

 
  closeBtn.addEventListener("click", () => {
    userModal.classList.remove("show");
  });

});
