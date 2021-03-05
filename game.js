const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const bodyBackground = document.getElementById('body');
let currentId = 1;

//silnik gry.
function startGame() {
    showTextNode(currentId);
}

//funkcja, dzieki ktorej bedziemy widziec aktualny czesc naszej przygody wyswietlanej w formie sciany tekstu
//argumentem jest index, czyli etam naszej podrozy
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

// function setBackgroundImage(image){
//
// }

//funkcja, dzieki ktorej bedziemy widziec jakie opcje (w buttonach) mamy do wyboru
function showOption(option) {
    return true
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    showTextNode(nextTextNodeId);
    if((textNodes.find(textNode => textNode.id === currentId) !== undefined)) {
        bodyBackground.style.backgroundImage = `url(${textNodes.find(textNode => textNode.id === currentId).backgroundImage})`;
    }
}

//ELEMENTY NASZEJ PRZYGODY
const textNodes = [
    {
        id: 1,
        backgroundImage: "./images/barn.jpg",
        text: 'Jestes najemnikiem. Twoim zadaniem jest zejsc do podziemi zamku i stoczyc pojednki z czekajacymi tam na ciebie przeciwnikami. Krol obiecal jedna z kilku nagrod...',
        options: [
            {
                text: 'ZEJDZ DO PODZIEMI',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        backgroundImage: "./images/barn2.jpg",
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
        backgroundImage: ""
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
        id: 5,
        text: 'Trzymajac pochodnie w jednej rece zauwazasz potwora. Wyciagasz miecz ale ciezko jest ci walczyc z pochodnia w rece',
        options: [
            {
                text: 'WALCZ Z POCHODNIA W RECE',
                nextText: 34
            },
            {
                text: 'WYRZUC POCHODNIE',
                nextText: 35
            }
        ]
    },
    {
        id: 6,
        text: 'Coz... Idziesz trzymajac sie reka sciany a potwor z latwoscia dopadl cie juz po kilku krokach.',
        options: [
            {
                text: 'GAME OVER',
                nextText: -1
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
                text: 'NIDGY',
                nextText: 23,
            },
            {
                text: 'DZISIAJ',
                nextText: 23,
            },
            {
                text: 'WCZORAJ',
                nextText: 23,
            },
            {
                text: 'JUTRO',
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
                text: 'TAK',
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
    },
    {
        id: 34,
        text: 'Masz problemy z utrzymaniem rownowagi, ale przez chwile dotrzymujesz tempa potworowi... Przez chwile...',
        options: [
            {
                text: 'GAME OVER',
                nextText: -1
            },
        ]
    },
    {
        id: 35,
        text: 'Nie wiem czego sie spodziwales. W chwili gdy wyrzucasz pochodnie potwor wycofuje sie w ciemnosc. Stoisz przy pochodni z mieczem w rece i nerwowo obracasz sie w kazda strone. Nie mija chwila i czujesz jak szpony wbijaja ci sie w plecy...',
        options: [
            {
                text: 'GAME OVER',
                nextText: -1
            }
        ]
    },
    {
        id: 4,
        text: 'Mimo glebokich ciemnosci udaje ci sie uslyszec potwora. Wykonales akrobatyczny unik i namierzyles przeciwnika. Slyszysz jak rozjuszona bestia ponawia atak. Ponownie odskoczyles i kontratakowales wroga istote. Uslyszales gluche stekniecie i dzwiek opadajacego na podloge ciala. Dzieki miksturze udalo ci sie uslszec cos jeszcze... Podchodzisz do miejsca, z ktorego zaatakowala bestia, kucasz i ponownie slyszysz skrzypniecie luznych desek...',
        options: [
            {
                text: 'ZOSTAW DESKI W SPOKOJU',
                nextText: 36
            },
            {
                text: 'SPROBUJ PODNIESC DESKI',
                nextText: 37
            }
        ]
    },
    {
        id: 36,
        text: 'Dzialanie mikstury powoli slabnie - ty tez zaczynasz slabnac. Nie dosc, ze nic nie widzisz to powoli tez przestajesz slyszec... W koncu docierasz do drzwi. Moze czas aby uzyc mikstury poprawiajacej widzenie w ciemnosci?',
        options: [
            {
                text: 'WYPIJ MIKSTURE POPRAWIAJACA WZROK',
                nextText: 11
            },
            {
                text: 'OTWORZ DRZWI',
                nextText: 12
            }
        ]
    },
    {
        id: 37,
        text: 'Ciekawe... Znalazles ukryte schody. Prowadza jeszcze glebiej w dol podziemi. Tym razem nadszedl czas na miksture poprawiajaca wzrok. Widzisz, ze schody zdaja sie nie miec konca, jakby prowadzily do samego piekla... Po dlugiej podrozy w dol docierasz do wielkiego pomieszczenia. Widzisz... Ogromne probowki? W srodku znajduja sie ciala... Dzieki dzialaniu mikstury slysysz odlegle szepty. Ktos idzie w twoim kierunku.',
        options: [
            {
                text: 'SZYBKO, UKRYJ SIE',
                nextText: 38
            },
            {
                text: 'STAW CZOLA ZBLIZAJACYM SIE POSTACIOM',
                nextText: 39
            }
        ]
    },
    {
        id: 39,
        text: 'Trafiles na samego krola i jakiegos jegomoscia, ktorego wczesniej nie widziales na oczy. Twoja osoba wprawia dwojke w oslupienie. Podejrzany jegomosc pierwszy otrzasnal sie, pstryknal palcami i po chwili poczules ciezkie uderzenie w potylice. Tracisz przytomnosc...',
        options: [
            {
                text: 'GAME OVER',
                nextText: -1
            }
        ]
    },
    {
        id: 38,
        text: 'Bedac dobrze ukrytym, slyszysz rozmowe... krola z naukowcem? Wnioski plynace z rozmowy wprawiaja cie w oslupienie. Wszystkie ciala, ktore widzisz w probowkach naleza do mieszkancow krolestwa. Porwani sa poddawani licznym mutacjom i to oni stanowia zagrozenie czychajace w podziemiach...',
        options: [
            {
                text: 'POCZEKAJ AZ DWOJKA PRZEJDZIE OBOK CIEBIE',
                nextText: 40
            },
            {
                text: 'WYJDZ NAPRZECIW DWOJCE',
                nextText: 41
            }
        ]
    },
    {
        id: 40,
        text: 'Gdy jest juz bezpiecznie, udaje ci sie zlapac oddech... Kreci ci sie w glowie ale w koncu dochodzisz do siebie. Czas zrobic rozpierdol... Podchodzisz do kazdej probowki pokolei i rozwalasz je. Wiekszosc cial jest martwa, ale pare z nich zaczyna rozumiec co sie stalo. Sa wolni. I glodni zemnsty. Odsuwasz sie i pozwalasz mutantom pobiec za krolem i naukowcem.',
        options: [
            {
                text: 'WROC NA GORE',
                nextText: 42
            }
        ]
    },
    {
        id: 42,
        text: 'Nie uszedles daleko gdy zobaczyles cialo krola i naukowca... w nienajlepszym stanie. Mutanci zebrali sie nad nimi lecz gdy zdali sobie sprawe z twojej obecnosci, odwrocili sie i zdaje sie, czekali na twoje rozkazy. To byl twoj czas. Zdjales ubranie z krola, zalozyles je i w eskorcie mutantow oglosiles sie nowym, sprawiedliwym wladca!',
        options: [
            {
                text: 'THE END',
                nextText: -1
            }
        ]
    },
    {
        id: 41,
        text: 'Twoja osoba wprawia dwojke w oslupienie. Podejrzany jegomosc pierwszy otrzasnal sie, pstryknal palcami i po chwili poczules ciezkie uderzenie w potylice. Tracisz przytomnosc...',
        options: [
            {
                text: 'THE END',
                nextText: -1
            }
        ]
    }
]


startGame()