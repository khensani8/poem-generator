function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bf75a4bf0753o088f103t6d80c4ef603";
  let prompt = `Generate a poem using the ${instructionsInput.value}`;
  let context =
    "User instructions: You are a poetry master who loves to write short poems very emphatically. Yor mission is to generate a 4 line poem in basic HTML. Sign the poem as <strong> SheCodes AI at the end of the poem. Do NOT add a heading for the poem please. Ensure the poem is 4 lines please.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayPoem);

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a poem about ${instructionsInput.value}</div>`;
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
