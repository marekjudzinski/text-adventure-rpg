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
// //funckja, dzieki ktorej bedziemy widziec jakie opcje (w buttonach) mamy do wyboru
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
        text: 'Jestes najemnikiem. Twoim zadaniem jest zejsc do podziemi zamku i stoczyc pojednki z czekajacymi tam na ciebie przeciwnikami. Nagrod bedzie kilka, lecz bedziesz mogl wybrac tylko jedna...',
        options:[
            {
                text: 'ZEJDZ DO PODZIEMI',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Zszedles na sam dol. Jest zbyt ciemno dla ludzkiego oka. Masz cztery opcje',
        options: [
            {
                text: 'WYPIJ MIKSTURE POPRAWIAJACA WZROK',
                nextText: 3
            },
            {
                text: 'WYPIJ MIKSTURE POPRAWIAJACA SLUCH',
                nextText: 4
            },
            {
                text: 'ZAPAL POCHODNIE',
                nextText: 5
            },
            {
                text: 'IDZ NA OSLEP',
                nextText: 6
            }
        ]
    },
    {
        id: 3,
        text: 'Dzieki miksturze udalo ci sie uniknac ataku z zaskoczenia. Potwor czail sie w ciemnosci, ale udalo ci sie go dostrzec.',
        options: [
            {
                text: 'WALCZ',
                nextText: 7
            },
            {
                text: 'OBRAZ JEGO MATKE',
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: 'Twoj przeciwnik byl sprytny i zwinny, walka trwala dluzsza chwile. Koniec koncow bez wiekszych obrazen pokonujesz bestie.',
        options: [
            {
                text: 'RUSZAJ DALEJ',
                nextText: 9
            },
            {
                text: 'WYPATROSZ BESTIE',
                nextText: 10
            }
        ]
    },
    {
        id: 9,
        text: 'Efekty mikstury zaczynaja slabnac i odczuwasz efekty uboczne. Przystanales na chwile aby zlapac oddech. Wilgoc sciany troche cie ocucila, masz sile by ruszyc dalej. Po chwili docierasz do drzwi.',
        options: [
            {
                text: 'WYPIJ PONOWNIE MIKSTURE POPRAWIAJACA WZROK',
                nextText: 11
            },
            {
                text: 'OTWORZ DRZWI',
                nextText: 12
            }
        ]
    },
    {
        id: 11,
        text: 'Trafiles do sali pelnej skrzacych sie witrazy, zapalonych swiec i zyrandoli... Przez miksture jestes doslownie oslepiony. Zauwazyles zaledwie kontury zblizajacego sie do ciebie stwora...',
        options: [
            {
                text: 'GAME OVER',
                nextText: -1
            }
        ]
    },
    {
        id: 12,
        text: 'Trafiles do sali pelnej skrzacych sie witrazy, zapalonych swiec i zyrandoli... Zauwazasz siedzaca przy oltarzu oblesna, gruba postac. Ta rowniez cie zauwaza i mimo swoich gabarytow wykonuje w twoim kierunku skok... Masz wrazenie, ze uslyszales komentarz na temat swojej matki...',
        options: [
            {
                text: 'WALCZ',
                nextText: 13
            },
            {
                text: 'COS TY POWIEDZIAL O MOJEJ MATCE?!',
                nextText: 14
            }
        ]
    },
    {
        id: 13,
        text: 'Udalo ci sie wykonac unik, ale potwor trafil cie w okolice biodra. Nie pozostajac dluznym szybko sieczesz go mieczem w brzuch. Wnetrznosci zaczynaja wyplywac na podloge... ale po chwili wracaja z powrotem do brzucha bestii. Wiesz juz zeby celowac w gg '
    }
]

startGame()