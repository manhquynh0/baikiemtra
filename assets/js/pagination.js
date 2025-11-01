document.addEventListener("DOMContentLoaded", function () {
  const movies = document.querySelectorAll(".item"); // tất cả phim
  const itemsPerPage = 8; // mỗi trang 8 phim
  const pagination = document.querySelector(".pagination");
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  let currentPage = 1;

  // --- Hàm hiển thị phim theo trang ---
  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    movies.forEach((movie, index) => {
      movie.parentElement.style.display =
        index >= start && index < end ? "block" : "none";
    });

    // Cập nhật trạng thái active cho pagination
    document.querySelectorAll(".page-item").forEach((item) => {
      item.classList.remove("active");
    });
    const activeBtn = pagination.querySelector(
      `.page-item:nth-child(${page + 1})`
    ); // +1 vì có nút "Previous"
    if (activeBtn) activeBtn.classList.add("active");
  }

  // --- Gán sự kiện click cho pagination ---
  pagination.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.closest(".page-link");
    if (!target) return;

    const text = target.textContent.trim();

    if (text === "Previous" && currentPage > 1) {
      currentPage--;
    } else if (text === "Next" && currentPage < totalPages) {
      currentPage++;
    } else if (!isNaN(text)) {
      currentPage = parseInt(text);
    }

    showPage(currentPage);
    updateButtons();
  });

  // --- Cập nhật nút Previous / Next ---
  function updateButtons() {
    const prev = pagination.querySelector(".page-item:first-child");
    const next = pagination.querySelector(".page-item:last-child");

    if (currentPage === 1) prev.classList.add("disabled");
    else prev.classList.remove("disabled");

    if (currentPage === totalPages) next.classList.add("disabled");
    else next.classList.remove("disabled");
  }

  // --- Khởi tạo ---
  showPage(currentPage);
  updateButtons();
});
