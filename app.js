function changeTheme() {
  let bodyBackground = document.querySelector("body");

  if (bodyBackground.classList.contains("dark-theme")) {
    bodyBackground.classList.remove("dark-theme");
  } else {
    bodyBackground.classList.add("dark-theme");
  }
}

let changeThemeButton = document.querySelector(".change-theme");
changeThemeButton.addEventListener("click", changeTheme);
