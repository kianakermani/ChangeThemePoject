function changetheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("bgcolor");
  } else {
    body.classList.remove("bgcolor");
    body.classList.add("dark");
  }
  let name = document.querySelector("footer");
  if (name.classList.contains("white")) {
    name.classList.remove("white");
    name.classList.add("black");
  } else {
    name.classList.remove("black");
    name.classList.add("white");
  }
  let aname = document.querySelector(".name");
  if (aname.classList.contains("white")) {
    aname.classList.remove("white");
  } else {
    aname.classList.add("white");
  }
  let logo = document.querySelector("#logo");
  if (logo.classList.contains("white")) {
    logo.classList.remove("white");
    logo.classList.add("black");
  } else {
    logo.classList.remove("black");
    logo.classList.add("white");
  }
}
let themebutton = document.querySelector(".darkTh");
themebutton.addEventListener("click", changetheme);
