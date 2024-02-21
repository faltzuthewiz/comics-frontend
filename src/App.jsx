import { useState } from "react"
import ComicsList from "./components/ComicsList"
import AddComicForm from "./components/AddComicForm"
import Filter from "./components/Filter"
import Introduction from "./components/Introduction"

function App() {

  const [comicsList, setComicsList] = useState([
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
    {
      id: 3,
      name: "Pandemia mielessäin",
      additionalName: "",
      translation: true,
      originalName: "Pandemic Mindmap",
      details: "This is the test book number 3",
      pages: "300",
      publicationYear: 2021,
      ISBN: "1234567895522",
      selfPublished: false,
      publisher: "",
      language: "Finnish",
      dateRead: "21.2.2024",
      ownThoughts: "I read this comic.",
    },
  ])

  const [filterName, setFilterName] = useState('')

  const [comicsToShow, setComicsToShow] = useState(comicsList)

  const handleFilter = (e) => {
    const keyword = e.target.value
    console.log(keyword)

    if (keyword !== '') {
      const results = comicsList.filter((comic) => {
        return comic.name.toLowerCase().includes(keyword.toLowerCase())
      })
      setComicsToShow(results)
    } else {
      setComicsToShow(comicsList)
    }
    setFilterName(keyword)
  }

  return (
    <>
      <Introduction />
      <Filter onChange={handleFilter} value={filterName} />
      <ComicsList comics={comicsToShow} />
      <AddComicForm />
    </>
  )
}

export default App
