import { useState } from "react"
import AddComicForm from "./components/AddComicForm"
import ListPage from "./components/ListPage"
import Introduction from "./components/Introduction"
import TabsMUI from "./muinavi/TabsMUI"
import { Box, CssBaseline } from "@mui/material"
import { createBrowserRouter, RouterProvider, useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import InfoPage from "./components/InfoPage"
import { ThemeProvider, createTheme } from "@mui/material"
import { red, blue, green, yellow, lightBlue, deepPurple, teal, grey } from '@mui/material/colors'
import EditComicForm from "./components/EditComicForm"

export function Error() {
  let error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <TabsMUI></TabsMUI>,
        <Box sx={{ marginTop: "70px" }}>
          {error.status} {error.data}
          <Link to='/'>Etusivulle</Link>
        </Box>
      </>
    )
  }
  return (<Box>{error.message} <Link to='/'>Etusivulle</Link></Box>)

}



const theme = createTheme({
  palette: {
    primary: { main: deepPurple[800], contrastText: '#FFFFFF' },
    secondary: { main: teal['A400'], contrastText: grey[900] },
    //text: { primary: lightBlue[500], secondary: lightBlue[800] },
  }, // Värimaailma
  typography: {
    fontFamily: "Kanit, sans-serif",
  }, // Fontti
  indicator: {
    backgroundColor: 'white',
  }
})

const router = createBrowserRouter([
  {
    element: <TabsMUI></TabsMUI>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Introduction />,
      },
      {
        path: '/listaa',
        element: <ListPage />
      },
      {
        path: '/lisaa',
        element: <AddComicForm />
      },
      {
        path: '/info',
        element: <InfoPage />
      },
      {
        path: 'muokkaa/:id/',
        element: <EditComicForm />
      }

    ]
  }
])

function App() {

  /*

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
  */
  // console.log(comicsList)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <CssBaseline />
          <RouterProvider router={router} />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
