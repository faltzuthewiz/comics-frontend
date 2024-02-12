import { useState } from "react"
import ComicsList from "./components/ComicsList"

function App() {

  const [comicsList, setComicsList] = useState([])

  const comics = [
    {
      name: "Test comic 1",
      additionalName: "",
      translation: false,
      originalName: "",
      details: "This is the test book",
      pages: "200",
      publicationYear: "2000",
      ISBN: "1234567891234",
      selfPublished: false,
      publisher: "Jalava",
      language: "English",
      dateRead: new Date(),
      ownThoughts: "ye ye ye",
    },
  ]

  //setComicsList(comics)

  return (
    <>
      <h1>Sonjan sarjiscorner</h1>
      <div>
        Some information here...
      </div>
      <ComicsList comics={comics} />
    </>
  )
}

export default App
