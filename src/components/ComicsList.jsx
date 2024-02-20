function ComicsList({ comics }) {
    console.log(comics)
    return (
        <>
            <h2>Sarjakuvalista</h2>
            <div>
                {
                    comics.map(comic => {
                        return (
                            <div key={comic.id}>
                                <div style={{ height: "150px", width: "120px", backgroundColor: "pink" }}>Image placeholder</div>
                                <p>{comic.name}</p>
                                <p>Piirtäjä: Test Artist, kirjoittaja: Test Writer</p>
                                <p>Julkaistu: {comic.publicationYear}, luettu: {comic.dateRead}</p>
                                <button>Näytä lisää tietoja</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ComicsList