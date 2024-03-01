import { useState } from "react"
import ComicsList from "./components/ComicsList"
import AddComicForm from "./components/AddComicForm"
import Filter from "./components/Filter"
import Introduction from "./components/Introduction"
import Results from "./components/Results"

function App() {

  const [comicsList, setComicsList] = useState([
    {
      id: 1,
      name: "Test comic 1",
      additionalName: "",
      translation: false,
      originalName: "",
      artist: "Pii Rtäjä",
      writer: "Teppo Testaaja",
      details: "This is the test book",
      pages: "200",
      publicationYear: 2020,
      ISBN: "1234567891234",
      selfPublished: false,
      publisher: "Jalava",
      language: "English",
      dateRead: "12.2.2024",
      image: "",
      ownThoughts: "ye ye ye",
    },
    {
      id: 2,
      name: "Test comic 2",
      additionalName: "The revenge of the test comics",
      translation: false,
      originalName: "Testisarjakuva 2",
      artist: "Pii Rtäjä",
      writer: "Teppo Testaaja",
      details: "This is the test book number 2",
      pages: "300",
      publicationYear: 2006,
      ISBN: "1234567895555",
      selfPublished: true,
      publisher: "",
      language: "English",
      dateRead: "20.2.2024",
      image: "",
      ownThoughts: "ye ye ye",
    },
    {
      id: 3,
      name: "Pandemia mielessäin",
      additionalName: "",
      translation: true,
      originalName: "Pandemic Mindmap",
      artist: "Karstein Volle",
      writer: "Karstein Volle",
      details: "This is the test book number 3",
      pages: "300",
      publicationYear: 2021,
      ISBN: "1234567895522",
      selfPublished: false,
      publisher: "",
      language: "Finnish",
      dateRead: "21.2.2024",
      image: "pandemia-mielessain_VolleK.jpg",
      ownThoughts: "I read this comic.",
    },
    {
      id: 4,
      name: "Sandman deluxe 4",
      additionalName: "Utujen vuodenaika",
      translation: true,
      originalName: "The Sandman: The Deluxe Edtion Boom Four",
      artist: "Kelley Jones + useita",
      writer: "Neil Gaiman",
      details: "This is the test book number 4",
      pages: "264",
      publicationYear: 2021,
      ISBN: "1234567895522",
      selfPublished: false,
      publisher: "",
      language: "Finnish",
      dateRead: "21.2.2024",
      image: "",
      ownThoughts: "I read this comic.",
    },
  ])

  const [filterName, setFilterName] = useState('')

  const [comicsToShow, setComicsToShow] = useState(comicsList)

  const handleFilter = (e) => {
    const keyword = e.target.value

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

  const [comic, setComic] = useState({
    name: "",
    additionalName: "",
    translation: false,
    originalName: "",
    artist: "",
    writer: "",
    details: "",
    pages: "",
    publicationYear: 0,
    ISBN: "",
    selfPublished: false,
    publisher: "",
    language: "Finnish",
    dateRead: "",
    ownThoughts: "",
  })

  const change = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value

    setComic({
      ...comic,
      [name]: newValue,
      id: comicsList.length + 1,
    })

    console.log(comic)
  }

  const addComic = (e) => {
    e.preventDefault()

    setComic({
      name: "",
      additionalName: "",
      translation: false,
      originalName: "",
      artist: "",
      writer: "",
      details: "",
      pages: "",
      publicationYear: 0,
      ISBN: "",
      selfPublished: false,
      publisher: "",
      language: "Finnish",
      dateRead: "",
      ownThoughts: "",
    })

    setComicsList(comicsList.concat(comic))
    setComicsToShow(comicsList.concat(comic))
  }

  const handleShowButton = (id) => {
    const results = comicsList.filter((comic) => {
      return (comic.id === id)
    })

    setComicsToShow(results)
  }

  return (
    <>
      <Introduction />
      <Filter onChange={handleFilter} value={filterName} />
      <Results comics={comicsToShow} showbtn={handleShowButton} />
      <AddComicForm change={change} addComic={addComic} comic={comic} />
    </>
  )
}

export default App
