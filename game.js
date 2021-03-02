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
const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0){
        return startGame()
    }
    showTextNode(nextTextNodeId)
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
    },
    {
        id: 2,
        text: 'Po drodze masz czas na refleksje. Twoje zycie jest nudne i smutne, w domu nigdy sie nie przelewalo, ojciec bil matke, gdy tylko konczyla sie wodka, ale czare goryczy przelewa fakt, ze caly czas boli cie glowa... Ale czemu boli cie dupa...?',
        options: [
            {
                text: 'kontynuuj glebokie przemyslenia...',
                nextText: 4
            }
        ]
    },
    {
        id: 3,
        text: 'Umarles i obys nigdy nie powstal z martwych... kto jeszcze dabuje w 2021?',
        options: [
            {
                text: 'RESTART THE GAME',
                nextText: -1
            }
        ]
    },
    {
        id:4,
        text: 'Mieszkasz na wsi. Jest to o tyle dobre, ze masz blisko do kosciola... ale do burdelu musisz isc az do miasta. Zauwazasz, ze skonczyla ci sie gotowka... czy ostatniej nocy miales za co zaplacic?',
        options: [
            {
                //tu ma sie zaczac zabawa
                text: 'idz dalej sciezka',
                nextText: 5
            },
            {
                //a tu pieklo...
                text: 'idz skrotem przez las',
                nextText: 6
            }
        ]
    },
    {
        id: 5,
        text: ''
    }
]

startGame()