function createDOM(){
    let body = document.querySelector('body');
    body.innerHTML = '<h1>Hangman</h1><p>Find the hidden word - Press a letter</p>' + body.innerHTML;

    //Game container holds the compnenets of the game like svg wrong-letters and the word
    let gameContainer = document.querySelector('.game-container');

    let wrongLetterContainer = document.createElement('div');
    wrongLetterContainer.className = 'wrong-letters-container';
    wrongLetterContainer.innerHTML =`<div id="wrong-letters">
                                        <p>Wrong Letter</p>
                                    </div>`;
    gameContainer.appendChild(wrongLetterContainer);


    //word container holds word
    let word = document.createElement('div');
    gameContainer.appendChild(word);
    word.className = 'word';
    word.setAttribute('id', 'word');

    //popup for or win or lose notifictaion
    let popup = document.createElement('div');
    popup.className = 'popup-container';
    popup.style.display = 'flex';
    popup.setAttribute('id', 'popup-container');
    popup.innerHTML = `<div class="popup">
                            <h2 id="final-message">Start New Game</h2>
                            <button id="play-button">Start</button>
                        </div>`;
    body.append(gameContainer, popup);

    //notification for already selected wrong letters
    body.innerHTML+=`<div class="notification-container" id="notification-container">
                        <p>You have already entered this letter</p>
                    </div>`
}
createDOM();