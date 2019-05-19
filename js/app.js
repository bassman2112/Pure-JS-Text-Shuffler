const userInput = document.querySelector("form");
const shuffledSection = document.querySelector(".shuffled");

const shuffle = input => {
    let shuffled = "";
    // Split that input up and trim the white space
    let letters = input.trim().split("");
    // Do the shuffling itself in a while loop
    while (letters.length > 0){
        shuffled += letters.splice(letters.length * Math.random() << 0, 1);
    }
    return shuffled 
};

// Take the input and apply shuffle() to it, then set innertext of 
// shuffledSection to the output!
userInput.addEventListener("input", e => {
    const shuffledText = shuffle(userInput.inputtext.value);
    shuffledSection.innerText = shuffledText;
});

// Just to keep the form from submitting when hitting return
userInput.addEventListener("submit", e => {
    e.preventDefault();
});
