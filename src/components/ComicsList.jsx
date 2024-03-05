import Image from "./Image"

function ComicsList({ comics, showbtn }) {

    return (
        <>
            <h2>Sarjakuvalista</h2>
            <div>
                {
                    comics.map(comic => {
                        return (
                            <div key={comic.id}>
                                <Image image={comic.image} />
                                <h3>{comic.name} {comic.additionalName}</h3>
                                <p>Kirjoittaja: {comic.writer}, piirtäjä: {comic.artist}</p>
                                <p>Julkaisuvuosi: {comic.publicationYear}, luettu: {comic.dateRead}</p>
                                <button onClick={() => showbtn(comic.id)}>Näytä lisää tietoja</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ComicsList