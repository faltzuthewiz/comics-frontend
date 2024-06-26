// verbose for debugging
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('comics.db');

db.serialize(() => {
    let sql = "CREATE TABLE comics (" +
        "id INTEGER PRIMARY KEY NOT NULL, " +
        "name TEXT NOT NULL, " +
        "additionalName TEXT, " +
        "translation BOOLEAN NOT NULL, " +
        "originalName TEXT, " +
        "artist TEXT NOT NULL, " +
        "writer TEXT NOT NULL, " +
        "details TEXT NOT NULL, " +
        "pages INTEGER NOT NULL, " +
        "publicationYear INTEGER NOT NULL, " +
        "ISBN INTEGER NOT NULL, " +
        "selfPublished BOOLEAN NOT NULL, " +
        "publisher TEXT NOT NULL, " +
        "language TEXT NOT NULL, " +
        "dateRead DATE NOT NULL, " +
        "image TEXT, " +
        "ownThoughts TEXT NOT NULL)";

    db.run(sql, (error) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('Table created');
    }); // run
}); // serialize

let stmt = db.prepare(`INSERT INTO comics (
    id, name, additionalName, translation, originalName, artist, writer,
    details, pages, publicationYear, ISBN, selfPublished, publisher, language,
    dateRead, image, ownThoughts
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

const comicsList = [
    {
        id: 1,
        name: "Economix",
        additionalName: "Kuinka talous toimii (ja ei toimi)",
        translation: true,
        originalName: "Economix : how and why our economy works (and doesn't work)",
        artist: "Dan E. Burr",
        writer: "Michael Goodwin",
        details: "Raha puhuu - ja paljastaa meille salansa! Talouspuhetta tulee joka tuutista, mutta kuinka voimme arvioida sen laatua? Kuinka me kansalaiset voimme hahmottaa, mitä finanssiammattilaiset tai päättäjät tietävät - tai väittävät tietävänsä?",
        pages: 304,
        publicationYear: 2017,
        ISBN: 9789527192030,
        selfPublished: false,
        publisher: "Kampus Kustannus",
        language: "Finnish",
        dateRead: "2020-05-18",
        image: "Economix_GoodwinM.jpg",
        ownThoughts: "Luin sarjakuvan peräti neljä vuotta sitten, joten en muista siitä paljoakaan. Muistan kuitenkin, että tämä talousaiheinen sarjakuva oli mielenkiintoinen ja silmiä avaava kokemus. Aloinkin Economixin lukemisen jälkeen ottamaan sijoittamisesta enemmän selvää ja hankin ensimmäiset rahasto-osuuteni.",
    },
    {
        id: 2,
        name: "Super Mario Adventures",
        additionalName: "",
        translation: true,
        originalName: "Super Mario Adventures Mario no daiboken",
        artist: "Charlie Nozawa",
        writer: "Kentaro Takekuma",
        details: "'Super Mario Adventures', inspired by the best-selling Super Mario video game franchise, is a collection of comics that originally ran in 'Nintendo Power Magazine'. The peril-plagued Princess Toadstool is kidnapped by the diabolical deadbeat Bowser, but super plumbers Mario and Luigi hatch a plan with their friend Yoshi to rescue her. Are the Super Mario Bros' plans a pipe dream? Can they stop the Koopa King before he forces the Princess to be his bride?",
        pages: 112,
        publicationYear: 2016,
        ISBN: 9781421588643,
        selfPublished: false,
        publisher: "VIZ Media, LLC",
        language: "English",
        dateRead: "2022-01-01",
        image: "super-mario-adventures_TakekumaK.jpg",
        ownThoughts: "Vähän erikoisempi tapaus oman kodin sarjakuvahyllyssä eli englanninkielinen Super Mario -sarjakuva. Teos on kokoelma jatkotarina-sarjakuvia, jotka ovat julkaistu alun perin Nintendo Power Magazinessa vuosina 92-93. Uudelleen selatessa kiinnitin huomiota sarjakuvan runsaaseen huumoriin ja koomisen ilmeikkäisiin hahmoihin.",
    },
    {
        id: 3,
        name: "Pandemia mielessäin",
        additionalName: "Karstein Vollen improvisoitu eristyspäiväkirja",
        translation: true,
        originalName: "Pandemic Mindmap",
        artist: "Karstein Volle",
        writer: "Karstein Volle",
        details: "Pandemia Mielessäin on Karstein Vollen improvisoitu koronapäiväkirja keväästä 2020, ensimmäisen sulkutilan ajasta. Miten selviytyä jokapäiväisestä arjesta eristyksissä? Kuinka selittää lapsille, että he eivät voi tavata kavereitaan? Miltä tuntuu, kun kotipalvelu vierailee naapuruston yksinäisten vanhusten luona täydessä suojavaatetuksessa... Teos kuvaa päiviä, jolloin ajatukset palaavat kaikkeen, mitä ihminen on kokenut elämässään. Pohdinnan aiheina ovat tehdyt elämänvalinnat, kuolleiden vanhempien ja menehtyneiden ystävien kaipuu - eikä vähäisimpänä kavala tauti, joka piileskelee joka nurkan takana.",
        pages: 96,
        publicationYear: 2021,
        ISBN: 9789527436035,
        selfPublished: false,
        publisher: "Täysi Käsi Oy",
        language: "Finnish",
        dateRead: "2024-02-10",
        image: "pandemia-mielessain_VolleK.jpg",
        ownThoughts: "Sarjisvuosi 2024 on lähtenyt aika tahmeasti käyntiin. Tämäkin oli alun perin joululomalla lainattu teos, mutta luinkin sen vasta helmikuussa loppuun. Teos sivusi keski-ikäisen miehen mielenterveyttä, koronapandemian eristysaikaa ja käsitteli kuolemaa.",
    },
    {
        id: 4,
        name: "Sandman deluxe 4",
        additionalName: "Utujen vuodenaika",
        translation: true,
        originalName: "The Sandman: The Deluxe Edtion Boom Four",
        artist: "Kelley Jones, Mike Dringenberg, Malcolm Jones III, Matt Wagner, Dick Giordano, George Pratt, P. Craig Russell",
        writer: "Neil Gaiman",
        details: "Pää Hornan ennemmin kuin orja Taivaan. Rakastetut Coraline, Neverwhere, Tähtisumua ja Mirrormask olisivat ehkä riittäneet nostamaan Neil Gaimanin (s. 1960) yhdeksi vuosituhannen taitteen fantasian suurista äänistä. Merkitystä olisi korostanut, että aidon renessanssimiehen tavoin hän iskee tarinaa moneen mediaan painetusta sanasta kuunnelmien kautta elokuviin.Gaiman oli kuitenkin ehtinyt jo 1980-luvun lopulla elvyttää DC Comicsin Sandman-hahmon. Myytit ja arkkityypit omaleimaisille oivalluksilleen naittamalla hän lunasti paikan samassa jatkumossa Homeroksen, Tolkienin ja ystävänsä Alan Mooren kanssa. Sandman kulkee eri kulttuureissa eri nimillä kuten Morpheus ja Nukkumatti, mutta Gaimanin neronleimaus oli luoda kollektiivisen alitajunnan läpitunkema Unten Valtakunta ja mystisten, jumaliakin vanhempien Ikuisten suku. Tähän häilyvään maisemaan ja hahmogalleriaan kuljettaa alkuperäiset Sandman-lehdet 21-28 ja tekijöiden työprosessia avaavaa bonusainesta sisältävä Utujen vuodenaika. Muun muassa Miltonin Kadotetusta paratiisista inspiraatiota uuttavan tarinan huippukohdaksi nousee Sandmanin vierailu Helvetissä, jonka isännän tehtävistä Lucifer on juuri luopunut.",
        pages: 264,
        publicationYear: 2016,
        ISBN: 9788869712753,
        selfPublished: false,
        publisher: "RW Kustannus",
        language: "Finnish",
        dateRead: "2024-01-25",
        image: "",
        ownThoughts: "Luin tämän sarjakuvan pikkuhiljaa parin viikon aikana. Olin lainannut tämän jo oikeastaan joululomalla vieraillessani vanhempieni luona, mutta en ehtinyt lukea sitä, toisin kuin avopuolisoni. Kun tulimme kotiin, kumppanini kävi lainaamassa tämän ja seuraavankin Sandmanin. Lainasimme toisillemme siis käytännössä saman sarjakuvan - hah haa! Inspiraationa Sandmanin Luciferin ulkonäköön on kerrottu olleen David Bowie, ja samaa näköä näyttää olevan, ainakin joissain ruuduissa. Toisaalta joissain ruuduissa Lucifer näyttääkin taas täysin erilaiselta...",
    },
    {
        id: 5,
        name: "B. Virtanen 1",
        additionalName: "Arkipäivän sankari",
        translation: false,
        originalName: "",
        artist: "Ilkka Heilä",
        writer: "Ilkka Heilä",
        details: "Pieni ja päähänpotkittu B. Virtanen sinnittelee kotona ja konttorissa kaikkien palkkaorjien riemuksi ja lohduksi. Ensimmäinen B. Virtanen -sarjakuva-albumi Arkipäivän sankari myi painoksensa loppuun yhdessä yössä ilmestyttyään vuonna 1997. Sittemmin konttoritekniikka on muuttunut, mutta onko mikään muu? Johtaja Hynälän konttori on täystyöllistänyt myös piirtäjänsä Ilkka Heilän.",
        pages: 192,
        publicationYear: 2008,
        ISBN: 9789525602883,
        selfPublished: false,
        publisher: "Arktinen Banaani",
        language: "Finnish",
        dateRead: "2022-05-09",
        image: "b-virtanen1_HeilaI.jpg",
        ownThoughts: "Tutustuin B. Virtaseen joskus lukioaikoina ja tykästyin jo silloin B. Virtasen konttorin värikkäisiin hahmoihin. Tunsin suurta myötätuntoa B. Virtasta kohtaan, jota kohdeltiin niin kotona kuin konttorissa kuin kynnysmattoa. Myöhemmin siirryttyäni työelämään tajusin, että tosielämänkin toimistoista löytyy kaikenlaista sarjakuvahahmoa... Kevyt pokkari on nopealukuinen ja kulkee kätevästi mukana reissussakin.",
    },
    {
        id: 6,
        name: "Rakas Riksu",
        additionalName: "Sarjakuvatarinoita Riihimäeltä",
        translation: false,
        originalName: "",
        artist: "Ville Pynnönen",
        writer: "Ville Pynnönen",
        details: "Riihimäki merkitsee useimmille vain pakollista seisoskelua rautatieasemalla, kun odotetaan jatkoyhteyttä jonnekin muualle. Mutta toki Riksu on muutakin kuin risteysasema. Käsipallokaupungin teatteri- ja museo-osaaminen on huomattu valtakunnallisesti. Kirjaston maine on legendaarinen. Tässäkin teoksessa mainittuun Vihreään taloon tullaan kuuntelemaan musiikkia Helsingistä asti. Siinä muutama syy, joiden vuoksi Rakkaan Riksun tekijä Ville Pynnönen (s. 1974) uskoo, että Riihimäki on hänen lopullinen kotikaupunkinsa. Lisäksi Riihimäki on täynnä tarinoita. Rakas Riksu sisältää yhdeksän Pynnösen sarjakuvanovelleiksi dramatisoimaa paikalliskertomusta. Kahdeksan niistä perustuu tositapahtumiin ja se viimeinenkin olisi aivan hyvin voinut tapahtua. Suuri Kurpitsa julkaisi kirjan yhteistyössä Riihimäen kaupungin kanssa.",
        pages: 52,
        publicationYear: 2019,
        ISBN: 9789527160329,
        selfPublished: false,
        publisher: "Suuri Kurpitsa",
        language: "Finnish",
        dateRead: "2024-04-05",
        image: "rakas-riksu_PynnonenV.jpg",
        ownThoughts: "Ystäväni muutti Riihimäelle (eli Riksuun) tässä jokin aika sitten, ja tiesin heti, mitä hankin tuparilahjaksi – tämän sarjakuvan. Olin pyöritellyt teosta viime kesänä Riihimäen Lasimuseon museokaupassa, mutta tuolloin sarjakuva jäi hyllyyn (ehkäpä tuo kansikuvan hurjannäköinen lokki vaikutti ostopäätökseen). Nyt kun sitä todella tarvitsin, teos sattui löytymään kevään Tampere Kuplii -sarjakuvafestareilta Suuren Kurpitsan myyntipöydästä. Hurraa! 'Rakas Riksu' on melko kompakti, 50-sivuinen sarjakuva, jossa vaihtelevat sarjakuvanovellit sekä yhden koko sivun kokoiset piirrokset. Erityisesti mieleeni jäi Granitin aukiolla harvalukuiselle yleisölle esiintyvä muusikko, joka sai minut ajattelemaan: 'Jep, tämän Riksun minä tiedän!'",
    },
]

comicsList.forEach(comic => {
    stmt.run(
        comic.id,
        comic.name,
        comic.additionalName,
        comic.translation,
        comic.originalName,
        comic.artist,
        comic.writer,
        comic.details,
        comic.pages,
        comic.publicationYear,
        comic.ISBN,
        comic.selfPublished,
        comic.publisher,
        comic.language,
        comic.dateRead,
        comic.image,
        comic.ownThoughts
    );
});

stmt.finalize();

db.each(`SELECT * FROM comics`, (error, row) => {
    if (error) {
        console.log(error.message);
    }
    console.log(row.id + ", " + row.name);
})

db.close()

