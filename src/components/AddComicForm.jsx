import { useState } from "react"

function AddComicForm({ change, addComic, comic, changeCheckbox }) {



    return (
        <div>
            <h2>Lisää uusi sarjakuva</h2>

            <form onSubmit={addComic}>
                <label>Sarjakuvan nimi
                    <input type="text" name="name" value={comic.name} onChange={change} /> <br />
                </label>
                <label>Onko teos käännös?
                    <input type="checkbox" name="translation" checked={comic.translation} onChange={changeCheckbox} /> <br />
                </label>
                <button type="submit">Tallenna</button>
            </form>
        </div>
    )
}

export default AddComicForm