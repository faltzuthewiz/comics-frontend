import { useState } from "react"

function AddComicForm() {
    const [comic, setComic] = useState({
        name: "",

    })

    const change = (e) => {
        setComic({
            ...comic,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div>
            <h2>Lisää uusi sarjakuva</h2>
            New comic here...
            <form action="">
                <label>Sarjakuvan nimi
                    <input type="text" name="name" value={comic.name} onChange={(e) => change(e)} /> <br />
                </label>
            </form>
        </div>
    )
}

export default AddComicForm