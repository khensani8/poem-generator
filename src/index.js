function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "When I woke, the waves had gone black",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
