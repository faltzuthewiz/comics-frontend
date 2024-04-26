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
        "pages TEXT NOT NULL, " +
        "publicationYear INTEGER NOT NULL, " +
        "ISBN text NOT NULL, " +
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
        details: "Raha puhuu - ja paljastaa meille salansa!",
        pages: "304",
        publicationYear: 2017,
        ISBN: "9789527192030",
        selfPublished: false,
        publisher: "Kampus Kustannus",
        language: "Finnish",
        dateRead: "2020-05-18",
        image: "Economix_GoodwinM.jpg",
        ownThoughts: "L",
    },
    {
        id: 2,
        name: "Super Mario Adventures",
        additionalName: "",
        translation: true,
        originalName: "Super Mario Adventures Mario no daiboken",
        artist: "Charlie Nozawa",
        writer: "Kentaro Takekuma",
        details: "'Super Mario Adventures'",
        pages: "112",
        publicationYear: 2016,
        ISBN: "9781421588643",
        selfPublished: false,
        publisher: "VIZ Media, LLC",
        language: "English",
        dateRead: "2022-01-01",
        image: "super-mario-adventures_TakekumaK.jpg",
        ownThoughts: "Vähän",
    },
    {
        id: 3,
        name: "Pandemia mielessäin",
        additionalName: "Karstein Vollen improvisoitu eristyspäiväkirja",
        translation: true,
        originalName: "Pandemic Mindmap",
        artist: "Karstein Volle",
        writer: "Karstein Volle",
        details: "Pandemia Mielessäin on Karstein Vollen improvisoitu koronapäiväkirja keväästä 2020, ensimmäisen sulkutilan ajasta.",
        pages: "96",
        publicationYear: 2021,
        ISBN: "9789527436035",
        selfPublished: false,
        publisher: "Täysi Käsi Oy",
        language: "Finnish",
        dateRead: "2025-02-10",
        image: "pandemia-mielessain_VolleK.jpg",
        ownThoughts: "",
    },
    {
        id: 4,
        name: "Sandman deluxe 4",
        additionalName: "Utujen vuodenaika",
        translation: true,
        originalName: "The Sandman: The Deluxe Edtion Boom Four",
        artist: "Kelley Jones, Mike Dringenberg, Malcolm Jones III, Matt Wagner, Dick Giordano, George Pratt, P. Craig Russell",
        writer: "Neil Gaiman",
        details: "Pää Hornan",
        pages: "264",
        publicationYear: 2016,
        ISBN: "9788869712753",
        selfPublished: false,
        publisher: "RW Kustannus",
        language: "Finnish",
        dateRead: "2024-01-25",
        image: "",
        ownThoughts: ".",
    },
    {
        id: 5,
        name: "B. Virtanen 1",
        additionalName: "Arkipäivän sankari",
        translation: false,
        originalName: "",
        artist: "Ilkka Heilä",
        writer: "Ilkka Heilä",
        details: "",
        pages: "192",
        publicationYear: 2008,
        ISBN: "9789525602883",
        selfPublished: false,
        publisher: "Arktinen Banaani",
        language: "Finnish",
        dateRead: "2022-05-09",
        image: "b-virtanen1_HeilaI.jpg",
        ownThoughts: "sus",
    },
    {
        id: 6,
        name: "Rakas Riksu",
        additionalName: "Sarjakuvatarinoita Riihimäeltä",
        translation: false,
        originalName: "",
        artist: "Ville Pynnönen",
        writer: "Ville Pynnönen",
        details: "Riihimäki merkitsee useimmille vain pakollista seisoskelua rautatieasemalla, kun odotetaan jatkoyhteyttä jonnekin muualle.",
        pages: "52",
        publicationYear: 2019,
        ISBN: "9789527160329",
        selfPublished: false,
        publisher: "Suuri Kurpitsa",
        language: "Finnish",
        dateRead: "2024-04-05",
        image: "rakas-riksu_PynnonenV.jpg",
        ownThoughts: "",
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

