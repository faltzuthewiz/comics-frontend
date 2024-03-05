import Image from "./Image"

function ComicDetails({ comic }) {

    return (
        <div>
            <h2>Sarjakuvan {comic[0].name} tiedot</h2>
            <Image image={comic[0].image} />
            <p>{comic[0].name} {comic[0].additionalName}</p>
            <p>Käännösteos: {String(comic[0].translation)}</p>
            <p>Alkuperäinen nimi: {comic[0].originalName}</p>
            <p>Sarjakuvan kieli: {comic[0].language}</p>
            <p>Kirjoittaja: {comic[0].writer}, piirtäjä: {comic[0].artist}</p>
            <p>Omakustannejulkaisu: {String(comic[0].selfPublished)}</p>
            <p>Julkaisija: {comic[0].publisher}</p>
            <p>ISBN: {comic[0].ISBN}</p>
            <p>Sivumäärä: {comic[0].pages}</p>
            <p>Julkaisuvuosi: {comic[0].publicationYear}, luettu: {comic[0].dateRead}</p>
            <h3>Kuvaus</h3>
            <p>{comic[0].details}</p>
            <h3>Omat kommentit sarjakuvasta</h3>
            <p>{comic[0].ownThoughts}</p>
        </div>
    )
}

export default ComicDetails