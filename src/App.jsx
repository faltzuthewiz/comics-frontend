import { useState } from "react"
import ComicsList from "./components/ComicsList"
import AddComicForm from "./components/AddComicForm"

function App() {

  const [comicsList, setComicsList] = useState([])

  const comics = [
    {
      id: 1,
      name: "Test comic 1",
      additionalName: "",
      translation: false,
      originalName: "",
      details: "This is the test book",
      pages: "200",
      publicationYear: 2020,
      ISBN: "1234567891234",
      selfPublished: false,
      publisher: "Jalava",
      language: "English",
      dateRead: "12.2.2024",
      ownThoughts: "ye ye ye",
    },
    {
      id: 2,
      name: "Test comic 2",
      additionalName: "",
      translation: false,
      originalName: "Testisarjakuva 2",
      details: "This is the test book number 2",
      pages: "300",
      publicationYear: 2006,
      ISBN: "1234567895555",
      selfPublished: true,
      publisher: "",
      language: "English",
      dateRead: "20.2.2024",
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
      <AddComicForm />
    </>
  )
}

export default App
