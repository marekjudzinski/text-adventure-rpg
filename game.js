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
//funkcja, dzieki ktorej bedziemy widziec jakie opcje (w buttonach) mamy do wyboru
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
        id: 8,
        text: 'No... Troche przesadziles... Bestia spojrzala na ciebie z obrzydzeniem, splunela ci pod nogi i poszla w druga strone... Mam nadzieje ze jestes z siebie dumny.',
        options: [
            {
                text: 'RUSZAJ DALEJ',
                nextText: 9
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
      id: 10,
      text: 'Cholera! Z ciała bestii zaczal sie unosic zielony opar, ktory powoli zaczyna cie dusic...',
      options: [
          {
              text: 'GAME OVER',
              nextText: -1
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
        text: 'Udalo ci sie wykonac unik, ale potwor trafil cie w okolice biodra. Nie pozostajac dluznym szybko sieczesz go mieczem w brzuch. Wnetrznosci zaczynaja wyplywac na podloge... ale po chwili wracaja z powrotem do brzucha bestii. Wiesz juz zeby celowac w glowe...',
        options: [
            {
                text: 'WALCZ DALEJ',
                nextText: 15
            },
            {
                text: 'PRZEPROS...',
                nextText: 16
            }
        ]
    },
    {
        id: 14,
        text: 'Z moca tysiaca slonc, odrabales potworowi leb! Niczym furiat przygladales sie stygnacym zwlokom czegos, co moglo troche przypominac jakiegos kaplana... Ruszasz do drzwi na koncu sali.',
        options: [
            {
                text: 'RUSZAJ DALEJ',
                nextText: 17
            }
        ]
    },
    {
        id: 15,
        text: 'Bol w biodrze jest ciezki do zniesienia. Powoli opadasz z sil a bestia po raz ostatni wykonuje w twoim kierunku skok...',
        options: [
            {
                text: 'GAME OVER',
                nextText: -1
            }
        ]
    },
    {
        id: 16,
        text: 'To byl dobry ruch. Potwor okazal sie byc kaplanem i wybaczyl ci wszystkie twoje grzechy. Oprocz gadki o zbawieniu i zyciu wiecznym kaplan uleczyl twoje biodro i odprowadzil cie do drzwi prowadzacych w dalsza podroz.',
        options: [
            {
                text: 'RUSZAJ DALEJ',
                nextText: 17
            }
        ]
    },
    {
        id: 17,
        text: 'Idziesz przed siebie przez nieomal godzine. W koncu docierasz na... polane? Twoim oczom ukzal sie smok. Zdaje sie spac...',
        options: [
            {
                text: "WALCZ",
                nextText: 18
            },
            {
                text: "KRZYKNIJ COS ABY OBUDZIC SMOKA",
                nextText: 19
            }
        ]
    },
    {
        id: 18,
        text: 'Zginales... chyba nie myslales ze uda cie pokonac smoka...',
        options: [
            {
                text: 'GAME OVER',
                nextText: -1
            }
        ]
    },
    {
        id: 19,
        text: 'Smok nie spal. Otworzyl oko, lypnal nim na ciebie i zapytal: Po co przychodzisz?',
        options: [
            {
                text: 'Jestem najemnikiem. Mam pokonac wszystkie czychajace tu monstra i otrzymac nagrode.',
                nextText: 20
            },
            {
                text: 'Chyba sie zgubilem, kim jestes?',
                nextText: 21
            },
        ]
    },
    {
        id: 20,
        text: 'Smok odrzekl: Czy uwazasz, ze mozesz mnie pokonac? Jestem ostatnim z zyjacych smokow, a zwa mnie Vysyzvccrayekluyigh. Mozesz sprobowac ze mna walczyc, albo odpowiedziec na 3 zagadki. Pamietaj, jesli sie pomylisz, to cie zjem ;-) Wybieraj.',
        options: [
            {
                text: 'WALCZ',
                nextText: 18,
            },
            {
                text: 'WYSLUCHAM CIE',
                nextText: 22
            }
        ]
    },
    {
        id: 21,
        text: 'Smok odrzekl: Jestem ostatnim z zyjacych smokow, a zwa mnie Vysyzvccrayekluyigh. Mozesz sprobowac ze mna walczyc, albo odpowiedziec na 3 zagadki. Pamietaj, jesli sie pomylisz, to cie zjem ;-) Wybieraj.',
        options: [
            {
                text: 'WALCZ',
                nextText: 18
            },
            {
                text: 'WYSLUCHAM CIE',
                nextText: 22
            }
        ]
    },
    {
        id: 22,
        text: 'Smok opowiedzial pierwsza zagadke: Zawsze przyjdzie, ale nigdy nie przyjdzie dzisiaj. Co to takiego?',
        options: [
            {
                text:'NIDGY',
                nextText: 23,
            },
            {
                text:'DZISIAJ',
                nextText: 23,
            },
            {
                text:'WCZORAJ',
                nextText: 23,
            },
            {
                text:'JUTRO',
                nextText: 24
            }
        ]
    },
    {
        id: 23,
        text: 'Smok zaryczal: HAHAHA! Glupcze! Zla odpowiedz! Wyszczerzyl pysk w makabrycznym usmiechu i w mgnieniu oka cie zjadl...',
        options: [
            {
                text: 'GAME OVER',
                nextText: -1
            }
        ]
    },
    {
        id: 24,
        text: 'Z powaga godna powaznego smoka, smok odpowiedzial: Tak, to poprawna odpowiedz. Czas na druga zagadke: Czy gęś może nazwać się ptakiem?',
        options: [
            {
                text:'TAK',
                nextText: 25
            },
            {
                text: 'NIE',
                nextText: 26
            }
        ]
    },
    {
        id: 25,
        text: 'Smok zaryczał: HAHAHA! Glupcze! Gesi glosu nie maja, ale za to ja mam wielka ochote na twoje pyszne miesko...',
        options: [
            {
                text: 'GAME OVER',
                nextText: -1
            }
        ]
    },
    {
        id: 26,
        text: 'Smok ponownie ze stoickim spokojem przyznal ci racje. Czas na ostatnia zagadke. Jesli odpowiesz prawidlowo - wygrales. Otworze ci portal do sali krola, ktory pozwoli ci wybrac nagrode. Ale jesli sie pomylisz, zjem cie ;) Oto tresc zagadki: Klara, Kasia i Kamila nie są krewnymi. Klara i Kasia mają braci, a Kamila ma siostrę. Kasia i Kamila są najmłodsze w swoich rodzinach, a Klara jest najstarsza w swojej. Która z nich ma starszego brata?',
        options: [
            {
                text: 'KLARA',
                nextText: 23
            },
            {
                text: "KASIA",
                nextText: 28
            },
            {
                text: "KAMILA",
                nextText: 23
            }
        ]
    },
    {
        id: 28,
        text: 'Smok usmiechnal sie grzecznie. Brawo. Odpowiedziales na wszystkie moje zagadki. Oto portal, ktory prowadzi prosto do sali krola. Pamietaj, aby nagrode wybrac madrze...',
        options: [
            {
                text: 'WEJDZ DO PORTALU',
                nextText: 29
            }
        ]
    },
    {
        id: 29,
        text: 'Trafiles do sali krola, prosto przed jego oblicze. Skloniles sie by oddac mu czesc i przypomniales o obietnicy nagrody. Krol pogratulowal ci i przedstawil obiecane wczesniej nagrody:',
        options: [
            {
                text: 'Bilety na tropikalna wyspe',
                nextText: 30
            },
            {
                text: 'Ziemie na wschod od zamku',
                nextText: 31
            },
            {
                text: 'Reke ksiezniczki',
                nextText: 32
            },
            {
                text: 'Samochod hybrydowy',
                nextText: 33
            }
        ]
    },
    {
        id: 30,
        text: 'To jest to czego ci bylo trzeba. Po dlugich potyczkach, rozmowach z kaplanem i zagadkach smoka o imieniu tak fantastycznym, ze az zdumiewajacym, wakacje pozwola ci sie zregenerowac i wrocic do zawodu ze swieza glowa.',
        options: [
            {
                text: 'THE END',
                nextText: -1
            }
        ]
    },
    {
        id: 31,
        text: 'Dostales ziemie na Podlasiu. Nic tu nie rosnie. Nikt tu nie mieszka. Nic tu nie ma. W nagrode za narazanie zycia zostales wyslany do samego centrum czarnej dupy i do tego bez zadnych perspektyw... A smok ostrzegal, aby wybrac madrze...',
        options: [
            {
                text: 'THE END',
                nextText: -1
            }
        ]
    },
    {
        id: 32,
        text: 'To juz jest chore... Nie wiedziec skad, otrzymales reke ksiezniczki, ktora co najwyzej mozesz sobie zawiesic na szyi... A smok ostrzegal, aby wybrac madrze...',
        options: [
            {
                text: 'THE END',
                nextText: -1
            }
        ]
    },
    {
        id: 33,
        text: 'Wow! Felgi niczego sobie, silnik pracuje tak cichutko, ze ledwo go slychac a do tego nie zatruwasz srodowiska! No, problemem beda tylko zwirowe drogi, ale jakos dasz rade...',
        options: [
            {
                text: 'THE END',
                nextText: -1
            }
        ]
    }
]

startGame()