function displayFact(response) {
  console.log("Fact generated");
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0ob8f6fd5f71ctf4bb659c63840b18fa";
  let prompt = `User instructions: Generate a random fact about ${instructionsInput.value}`;
  let context =
    "You are random fact expert and love to share your knowledge with everyone. Your mission is to generate a short random fact in basic HTML. Make sure to follow the user instructions. Do not include a title to the Fact. Sign the fact with 'SheCodes AI' inside a <strong> element at the end of the fact and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factElement = document.querySelector("#fact");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class="generating">Generating a fact for you about ${instructionsInput.value} ⏳</div>`;

  axios.get(apiUrl).then(displayFact);
}

let randomFactFormElement = document.querySelector("#fact-generator-form");
randomFactFormElement.addEventListener("submit", generateFact);
