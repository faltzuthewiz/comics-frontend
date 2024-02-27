function AddComicForm({ change, addComic, comic }) {

    return (
        <div>
            <h2>Lisää uusi sarjakuva</h2>

            <form onSubmit={addComic}>
                <label>Sarjakuvan nimi
                    <input type="text" name="name" value={comic.name} onChange={change} /> <br />
                </label>
                <label>Teoksen lisänimi
                    <input type="text" name="additionalName" value={comic.additionalName} onChange={change} /> <br />
                </label>
                <label>Piirtäjä
                    <input type="text" name="artist" value={comic.artist} onChange={change} /> <br />
                </label>
                <label>Käsikirjoittaja
                    <input type="text" name="writer" value={comic.writer} onChange={change} /> <br />
                </label>
                <label>Onko teos käännös?
                    <input type="checkbox" name="translation" checked={comic.translation} onChange={change} /> <br />
                </label>
                <label>Alkuperäinen nimi
                    <input type="text" name="originalName" value={comic.originalName} onChange={change} /> <br />
                </label>
                <label>Kuvaus
                    <textarea name="details" value={comic.details} onChange={change} /> <br />
                </label>
                <label>Sivumäärä
                    <input type="text" name="pages" value={comic.pages} onChange={change} /> <br />
                </label>
                <label>Julkaisuvuosi
                    <input type="text" name="publicationYear" value={comic.publicationYear} onChange={change} /> <br />
                </label>
                <label>ISBN
                    <input type="text" name="ISBN" value={comic.ISBN} onChange={change} /> <br />
                </label>
                <label>Onko teos omakustanne?
                    <input type="checkbox" name="selfPublished" checked={comic.selfPublished} onChange={change} /> <br />
                </label>
                <label>Julkaisija
                    <input type="text" name="publisher" value={comic.publisher} onChange={change} /> <br />
                </label>
                <label>Kieli
                    <select name="language" defaultValue={comic.language} onChange={change}>
                        <option value="Finnish">suomi</option>
                        <option value="English">englanti</option>
                        <option value="Swedish">ruotsi</option>
                        <option value="German">saksa</option>
                        <option value="Danish">tanska</option>
                        <option value="Other">muu</option>
                    </select>
                    <br />
                </label>
                <label>Luettu loppuun päivämäärällä
                    <input type="text" name="dateRead" value={comic.dateRead} onChange={change} /> <br />
                </label>
                <label>Omat ajatukset
                    <textarea name="ownThoughts" value={comic.ownThoughts} onChange={change} /> <br />
                </label>
                <button type="submit">Tallenna</button>
            </form>
        </div>
    )
}

export default AddComicForm