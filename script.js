let itemButton = Array.from(document.querySelectorAll(".itemButton"));

itemButton.forEach((button) => {
  button.addEventListener("click", () => {
    let actived = button.nextElementSibling.classList.contains("activeItem");

    itemButton.forEach((btn) => {
      btn.classList.remove("activeBtn");
      btn.nextElementSibling.classList.remove("activeItem");
    });

    if (!actived) {
      button.classList.add("activeBtn");
      button.nextElementSibling.classList.add("activeItem");
    }
  });
});
