const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");

let currentWord;

const getRandomWord = () => {
    // selecting a random word and hint from wordList
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

const initGame = (button, clickedLetter) => {
    // checking if clickedLetter exists in the currentWord
    if(currentWord.includes(clickedLetter)) {
        console.log(clickedLetter, " exists in the word");
    } else {
        console.log(clickedLetter, " does not exist in the word")
    }
}

// creating keyboard buttons and adding event listeners
for(let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();