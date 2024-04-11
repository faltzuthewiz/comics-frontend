import { useState } from "react"
import AddComicForm from "./components/AddComicForm"
import Filter from "./components/Filter"
import ListPage from "./ListPage"
import Introduction from "./components/Introduction"
import Results from "./components/Results"
import TabsMUI from "./muinavi/TabsMUI"
import { Box } from "@mui/material"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const comicsList = [
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
    dateRead: "2.12.2024", // English formatting
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
    dateRead: "2.20.2024", // English formatting
    image: "",
    ownThoughts: "ye ye ye",
  },
  {
    id: 3,
    name: "Pandemia mielessäin",
    additionalName: "Karstein Vollen improvisoitu eristyspäiväkirja",
    translation: true,
    originalName: "Pandemic Mindmap",
    artist: "Karstein Volle",
    writer: "Karstein Volle",
    details: "Pandemia Mielessäin on Karstein Vollen improvisoitu koronapäiväkirja keväästä 2020, ensimmäisen sulkutilan ajasta. Miten selviytyä jokapäiväisestä arjesta eristyksissä? Kuinka selittää lapsille, että he eivät voi tavata kavereitaan? Miltä tuntuu, kun kotipalvelu vierailee naapuruston yksinäisten vanhusten luona täydessä suojavaatetuksessa... Teos kuvaa päiviä, jolloin ajatukset palaavat kaikkeen, mitä ihminen on kokenut elämässään. Pohdinnan aiheina ovat tehdyt elämänvalinnat, kuolleiden vanhempien ja menehtyneiden ystävien kaipuu - eikä vähäisimpänä kavala tauti, joka piileskelee joka nurkan takana.",
    pages: "96",
    publicationYear: 2021,
    ISBN: "9789527436035",
    selfPublished: false,
    publisher: "Täysi Käsi Oy",
    language: "Finnish",
    dateRead: "2.10.2024", // English formatting
    image: "pandemia-mielessain_VolleK.jpg",
    ownThoughts: "Sarjisvuosi 2024 on lähtenyt aika tahmeasti käyntiin. Tämäkin oli alun perin joululomalla lainattu teos, mutta luinkin sen vasta helmikuussa loppuun. Teos sivusi keski-ikäisen miehen mielenterveyttä, koronapandemian eristysaikaa ja käsitteli kuolemaa.",
  },
  {
    id: 4,
    name: "Sandman deluxe 4",
    additionalName: "Utujen vuodenaika",
    translation: true,
    originalName: "The Sandman: The Deluxe Edtion Boom Four",
    artist: "Kelley Jones, Mike Dringenberg, Malcolm Jones III, Matt Wagner, Dick Giordano, George Pratt, P. Craig Russell",
    writer: "Neil Gaiman",
    details: "Pää Hornan ennemmin kuin orja Taivaan. Rakastetut Coraline, Neverwhere, Tähtisumua ja Mirrormask olisivat ehkä riittäneet nostamaan Neil Gaimanin (s. 1960) yhdeksi vuosituhannen taitteen fantasian suurista äänistä. Merkitystä olisi korostanut, että aidon renessanssimiehen tavoin hän iskee tarinaa moneen mediaan painetusta sanasta kuunnelmien kautta elokuviin.Gaiman oli kuitenkin ehtinyt jo 1980-luvun lopulla elvyttää DC Comicsin Sandman-hahmon. Myytit ja arkkityypit omaleimaisille oivalluksilleen naittamalla hän lunasti paikan samassa jatkumossa Homeroksen, Tolkienin ja ystävänsä Alan Mooren kanssa. Sandman kulkee eri kulttuureissa eri nimillä kuten Morpheus ja Nukkumatti, mutta Gaimanin neronleimaus oli luoda kollektiivisen alitajunnan läpitunkema Unten Valtakunta ja mystisten, jumaliakin vanhempien Ikuisten suku. Tähän häilyvään maisemaan ja hahmogalleriaan kuljettaa alkuperäiset Sandman-lehdet 21-28 ja tekijöiden työprosessia avaavaa bonusainesta sisältävä Utujen vuodenaika. Muun muassa Miltonin Kadotetusta paratiisista inspiraatiota uuttavan tarinan huippukohdaksi nousee Sandmanin vierailu Helvetissä, jonka isännän tehtävistä Lucifer on juuri luopunut.",
    pages: "264",
    publicationYear: 2016,
    ISBN: "9788869712753",
    selfPublished: false,
    publisher: "RW Kustannus",
    language: "Finnish", // English formatting
    dateRead: "01.25.2024",
    image: "",
    ownThoughts: "Luin tämän sarjakuvan pikkuhiljaa parin viikon aikana. Olin lainannut tämän jo oikeastaan joululomalla vieraillessani vanhempieni luona, mutta en ehtinyt lukea sitä, toisin kuin avopuolisoni. Kun tulimme kotiin, kumppanini kävi lainaamassa tämän ja seuraavankin Sandmanin. Lainasimme toisillemme siis käytännössä saman sarjakuvan - hah haa! Inspiraationa Sandmanin Luciferin ulkonäköön on kerrottu olleen David Bowie, ja samaa näköä näyttää olevan, ainakin joissain ruuduissa. Toisaalta joissain ruuduissa Lucifer näyttääkin taas täysin erilaiselta...",
  },
]

const router = createBrowserRouter([
  {
    element: <TabsMUI></TabsMUI>,
    children: [
      {
        path: '/',
        element: <Introduction />,
      },
      {
        path: '/listaa',
        element: <ListPage comicsList={comicsList} />
      },
      {
        path: '/lisaa',
        element: <AddComicForm comicsList={comicsList} />
      },
    ]
  }
])

function App() {

  /*
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
      dateRead: "2.12.2024", // English formatting
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
      dateRead: "2.20.2024", // English formatting
      image: "",
      ownThoughts: "ye ye ye",
    },
    {
      id: 3,
      name: "Pandemia mielessäin",
      additionalName: "Karstein Vollen improvisoitu eristyspäiväkirja",
      translation: true,
      originalName: "Pandemic Mindmap",
      artist: "Karstein Volle",
      writer: "Karstein Volle",
      details: "Pandemia Mielessäin on Karstein Vollen improvisoitu koronapäiväkirja keväästä 2020, ensimmäisen sulkutilan ajasta. Miten selviytyä jokapäiväisestä arjesta eristyksissä? Kuinka selittää lapsille, että he eivät voi tavata kavereitaan? Miltä tuntuu, kun kotipalvelu vierailee naapuruston yksinäisten vanhusten luona täydessä suojavaatetuksessa... Teos kuvaa päiviä, jolloin ajatukset palaavat kaikkeen, mitä ihminen on kokenut elämässään. Pohdinnan aiheina ovat tehdyt elämänvalinnat, kuolleiden vanhempien ja menehtyneiden ystävien kaipuu - eikä vähäisimpänä kavala tauti, joka piileskelee joka nurkan takana.",
      pages: "96",
      publicationYear: 2021,
      ISBN: "9789527436035",
      selfPublished: false,
      publisher: "Täysi Käsi Oy",
      language: "Finnish",
      dateRead: "2.10.2024", // English formatting
      image: "pandemia-mielessain_VolleK.jpg",
      ownThoughts: "Sarjisvuosi 2024 on lähtenyt aika tahmeasti käyntiin. Tämäkin oli alun perin joululomalla lainattu teos, mutta luinkin sen vasta helmikuussa loppuun. Teos sivusi keski-ikäisen miehen mielenterveyttä, koronapandemian eristysaikaa ja käsitteli kuolemaa.",
    },
    {
      id: 4,
      name: "Sandman deluxe 4",
      additionalName: "Utujen vuodenaika",
      translation: true,
      originalName: "The Sandman: The Deluxe Edtion Boom Four",
      artist: "Kelley Jones, Mike Dringenberg, Malcolm Jones III, Matt Wagner, Dick Giordano, George Pratt, P. Craig Russell",
      writer: "Neil Gaiman",
      details: "Pää Hornan ennemmin kuin orja Taivaan. Rakastetut Coraline, Neverwhere, Tähtisumua ja Mirrormask olisivat ehkä riittäneet nostamaan Neil Gaimanin (s. 1960) yhdeksi vuosituhannen taitteen fantasian suurista äänistä. Merkitystä olisi korostanut, että aidon renessanssimiehen tavoin hän iskee tarinaa moneen mediaan painetusta sanasta kuunnelmien kautta elokuviin.Gaiman oli kuitenkin ehtinyt jo 1980-luvun lopulla elvyttää DC Comicsin Sandman-hahmon. Myytit ja arkkityypit omaleimaisille oivalluksilleen naittamalla hän lunasti paikan samassa jatkumossa Homeroksen, Tolkienin ja ystävänsä Alan Mooren kanssa. Sandman kulkee eri kulttuureissa eri nimillä kuten Morpheus ja Nukkumatti, mutta Gaimanin neronleimaus oli luoda kollektiivisen alitajunnan läpitunkema Unten Valtakunta ja mystisten, jumaliakin vanhempien Ikuisten suku. Tähän häilyvään maisemaan ja hahmogalleriaan kuljettaa alkuperäiset Sandman-lehdet 21-28 ja tekijöiden työprosessia avaavaa bonusainesta sisältävä Utujen vuodenaika. Muun muassa Miltonin Kadotetusta paratiisista inspiraatiota uuttavan tarinan huippukohdaksi nousee Sandmanin vierailu Helvetissä, jonka isännän tehtävistä Lucifer on juuri luopunut.",
      pages: "264",
      publicationYear: 2016,
      ISBN: "9788869712753",
      selfPublished: false,
      publisher: "RW Kustannus",
      language: "Finnish", // English formatting
      dateRead: "01.25.2024",
      image: "",
      ownThoughts: "Luin tämän sarjakuvan pikkuhiljaa parin viikon aikana. Olin lainannut tämän jo oikeastaan joululomalla vieraillessani vanhempieni luona, mutta en ehtinyt lukea sitä, toisin kuin avopuolisoni. Kun tulimme kotiin, kumppanini kävi lainaamassa tämän ja seuraavankin Sandmanin. Lainasimme toisillemme siis käytännössä saman sarjakuvan - hah haa! Inspiraationa Sandmanin Luciferin ulkonäköön on kerrottu olleen David Bowie, ja samaa näköä näyttää olevan, ainakin joissain ruuduissa. Toisaalta joissain ruuduissa Lucifer näyttääkin taas täysin erilaiselta...",
    },
  ]) */

  /*
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
  } */

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
    dateRead: new Date(),
    image: "",
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

  const changeCheck = (e) => {
    setComic({
      ...comic,
      [e.target.name]: e.target.checked,
      id: comicsList.length + 1,
    })
  }

  const changeDate = (e) => {

    setComic({
      ...comic,
      dateRead: e,
      id: comicsList.length + 1,
    })
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
      dateRead: new Date(),
      image: "",
      ownThoughts: "",
    })

    setComicsList(comicsList.concat(comic))
    setComicsToShow(comicsList.concat(comic))
  }
  /*
    const handleShowButton = (id) => {
      const results = comicsList.filter((comic) => {
        return (comic.id === id)
      })
  
      setComicsToShow(results)
    }
  */
  console.log(comicsList)

  return (
    <>
      <RouterProvider router={router} />
      <Box>
        {/*    <Filter onChange={handleFilter} value={filterName} />
        <Results comics={comicsToShow} showbtn={handleShowButton} />
  <AddComicForm change={change} changeCheck={changeCheck} changeDate={changeDate} addComic={addComic} comic={comic} /> */}
      </Box>
    </>
  )
}

export default App
