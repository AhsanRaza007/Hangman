const wordElement = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const finalMessage = document.getElementById('final-message');
const playButton = document.getElementById('play-button');
const popupContainer = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const figureParts = document.querySelectorAll('.figure-part');






playButton.addEventListener('click', ()=>{
    figureParts.forEach((part)=>{
        part.style.display = 'none';
    })
    popupContainer.style.display = 'none';
    startGame();
});


function startGame(){
    wrongLetters.innerHTML = '';
    const words = ['programming', 'inheritence', 'callback', 'promise', 'hello'];
    //select a random word for each time the game loads
    let selectedWord = words[Math.floor(Math.random() * words.length)];

    let correctLetters = [];
    let wrongletter = [];

    //keydown letter press
    window.addEventListener('keydown', keydownhandler);


    function keydownhandler(e){
        
        if((e.keyCode>=65 && e.keyCode<=90) || (e.keyCode>=97 && e.keyCode<=122)){
            let letter = e.key.toLowerCase();
            if(selectedWord.includes(letter)){
                if(!correctLetters.includes(letter)){
                    correctLetters.push(letter);
                    displayWord();
                }else{
                    showNotification();
                }
            }else{
                if(!wrongletter.includes(letter)){
                    wrongletter.push(letter);
                    updateWrongLettersElement();
                }else{
                    showNotification();
                }
            }
        }
    }


    displayWord();

    //update wrong letters div
    function updateWrongLettersElement(){

        //display wrong letters
        wrongLetters.innerHTML = `
            <p>Wrong Letter</p>
            ${wrongletter.map((letter)=>{
                return `<span>${letter}</span>`
            }).join(' ')}
        `;
        //display figure parts
        figureParts.forEach((part, index)=>{
            let errors = wrongletter.length;
            if(index < errors){
                part.style.display = 'block';
            }else{
                part.style.display = 'none';
            }
        });

        //check if lost game
        if(figureParts.length === wrongletter.length){
            correctLetters = [];
            wrongletter = [];
            window.removeEventListener('keydown', keydownhandler);
            finalMessage.innerHTML = 'Oops!! you lost!! 😞'
            playButton.innerHTML = 'Play Again';
            popupContainer.style.display = 'flex';
        }

    }
    function showNotification(){
        notification.classList.add('show');
        setTimeout(()=>{
            notification.classList.remove('show');
        }, 1000)
    }

    function displayWord(){
        wordElement.innerHTML = `${
            selectedWord.split('').map(letter=>`
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ' '}
                </span>`).join('')
        }
        `;
        const innerWord = wordElement.innerText.replace(/\n/g, '');

        if(innerWord === selectedWord){
            correctLetters = [];
            wrongletter = [];
            window.removeEventListener('keydown', keydownhandler);
            finalMessage.innerHTML = 'Congratualations! You won! 😄';
            playButton.innerHTML = 'Play Again';
            popupContainer.style.display = 'flex';
        }
    }
}



