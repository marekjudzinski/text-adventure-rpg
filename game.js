const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


//silnik gry.
function startGame() {
    showTextNode(1)
}

//funkcja, dzieki ktorej bedziemy widziec aktualny czesc naszej przygody wyswietlanej w formie sciany tekstu
//argumentem jest index, czyli etam naszej podrozy
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode =>
        textNode.id === textNodeIndex)
        textElement.innerText = textNode.text
        while (optionButtonsElement.firstChild){
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}
//funckja, dzieki ktorej bedziemy widziec jakie opcje (w buttonach) mamy do wyboru
function showOption(option) {
    return true
}

function selectOption(option) {

}

//ELEMENTY NASZEJ PRZYGODY
const textNodes = [
    {
        id: 1,
        text: 'Wlasnie sie obudziles. Po wczorajszej wizycie w burdelu oprocz bolu glowy, kurewsko boli cie dupa... Cos ewidentnie poszlo nie tak...',
        options:[
            {
                text: 'Wroc do domu uciech cielesnych',
                nextText: 2
            },
            {
                text: 'DAB!',
                nextText: 3
            }
        ]
    }
]

startGame()