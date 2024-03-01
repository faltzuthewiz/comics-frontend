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
                                <p>{comic.name} {comic.additionalName}</p>
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