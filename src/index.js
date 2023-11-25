function generateFact(event) {
  event.preventDefault();

  new Typewriter("#fact", {
    strings: "here is your random fact",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let randomFactFormElement = document.querySelector("#fact-generator-form");
randomFactFormElement.addEventListener("submit", generateFact);
