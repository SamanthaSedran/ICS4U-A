const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.key-container');
const messageDisplay = document.querySelector('.message-container');

const wordle = 'SUPER';

//Keyboard Array
const keys=['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<']

//Tiles Array
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']

]

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

//Setting up each row
guessRows.forEach((guessRow,guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })

    tileDisplay.append(rowElement)


})

//Make each key
keys.forEach(key => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', () => handleClick(key))
    keyboard.append(buttonElement)
})

//tracks clicking
const handleClick = (key) => {
    console.log('clicked', key)
    if(key== '<<'){
        deleteLetter()
        return
    }
    if(key === 'ENTER'){
        checkRow()
        return
    }
    addLetter(key)
}

const addLetter = (key) => {
    if(currentTile<5 && currentRow<6){
    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = key;
    guessRows[currentRow][currentTile] = key
    tile.setAttribute('data', key)
    currentTile++;
    console.log('guessRows', guessRows)
    }
}

const deleteLetter = () =>{
    if(currentTile>0){
    currentTile--;
    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = ''
    guessRows[currentRow][currentTile] = ''
    tile.setAttribute('data', '')
    }
}

const checkRow = () =>{
    const guess = guessRows[currentRow].join('')
    flipTile()
    if(currentTile > 4){
        console.log('guess is '+ guess, 'wordle is ' + wordle)
        if(wordle == guess){
            showMessage('Magnificent!')
            isGameOver = true
            return
        }else{
            if(currentRow >= 5){
                isGameOver = false;
                showMessage('Game Over')
                return
            }
            if(currentRow < 5){
                currentRow++
                currentTile = 0
            }
        }

    }

}

const showMessage = (message) =>{
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000)
}

const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    rowTiles.forEach((tile, index) => {
        const dataLetter = tile.getAttribute('data')
        if(dataLetter == wordle[index]){
            tile.classList.add('green-overlay')
        }else if(wordle.includes(dataLetter)){
            tile.classList.add('yellow-overlay')
        }else{
            tile.classList.add('grey-overlay')

        }

    })
}


