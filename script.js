const panels = document.querySelectorAll(".panel");
console.log(panels); //panels is a nodelist (array) of all elements

panels.forEach(panel => {
  console.log(panel); //panel is a list (HTMLcollection but not an array) of all elements 
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });

});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}
