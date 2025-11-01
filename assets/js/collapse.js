
    const filterBtn = document.getElementById("filterToggle");
    const collapse = document.getElementById("collapseExample");
    const closeBtn = document.getElementById("btnclose");
    filterBtn.addEventListener("click", () => {
      collapse.classList.toggle("show");
      filterBtn.classList.toggle("rotate");
    });
    document.querySelectorAll(".filter-option").forEach(option => {
      option.addEventListener("click", () => {
        option.parentElement.querySelectorAll(".filter-option")
          .forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
      });
    });
    closeBtn.addEventListener("click", () => {
      collapse.classList.remove("show");
      toggle.classList.remove("rotate");
    });
 