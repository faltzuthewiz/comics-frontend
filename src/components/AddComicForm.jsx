import { useState } from "react"

function AddComicForm({ change, addComic, comic, changeCheckbox }) {

    // onChange={changeCheckbox}

    return (
        <div>
            <h2>Lisää uusi sarjakuva</h2>

            <form onSubmit={addComic}>
                <label>Sarjakuvan nimi
                    <input type="text" name="name" value={comic.name} onChange={change} /> <br />
                </label>
                <label>Sarjakuvan piirtäjä
                    <input type="text" name="artist" value={comic.artist} onChange={change} /> <br />
                </label>
                <label>Onko teos käännös?
                    <input type="checkbox" name="translation" checked={comic.translation} onChange={change} /> <br />
                </label>
                <button type="submit">Tallenna</button>
            </form>
        </div>
    )
}

export default AddComicForm