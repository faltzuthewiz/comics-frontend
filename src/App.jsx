import AddComicForm from "./components/AddComicForm"
import ListPage from "./components/ListPage"
import Introduction from "./components/Introduction"
import TabsMUI from "./muinavi/TabsMUI"
import { Box, CssBaseline } from "@mui/material"
import { createBrowserRouter, RouterProvider, useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import InfoPage from "./components/InfoPage"
import { ThemeProvider, createTheme } from "@mui/material"
import { deepPurple, teal, grey } from '@mui/material/colors'
import EditComicForm from "./components/EditComicForm"
import ErrorIcon from '@mui/icons-material/Error';

export function Error() {
  let error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <TabsMUI></TabsMUI>,
        <Box sx={{ marginTop: "120px", marginLeft: 3 }}>
          <ErrorIcon color="error" />
          {error.status} {error.data}
          <Link to='/'>Etusivulle</Link>
        </Box>
      </>
    )
  }
  return (
    <>
      <TabsMUI></TabsMUI>,
      <Box sx={{ marginTop: "120px", marginLeft: 3 }}>
        {error.message} <Link to='/'>Etusivulle</Link>
      </Box>
    </>
  )

}



const theme = createTheme({
  palette: {
    primary: { main: deepPurple[800], contrastText: '#FFFFFF' },
    secondary: { main: teal['A400'], contrastText: grey[900] },
  }, // Colors
  typography: {
    fontFamily: "Kanit, sans-serif",
    h1: {
      fontFamily: "'Permanent Marker', cursive",
    },
    h2: {
      fontFamily: "'Permanent Marker', cursive",
    },
    h3: {
      fontFamily: "'Permanent Marker', cursive",
    },
    h4: {
      fontFamily: "'Permanent Marker', cursive",
    },
    h5: {
      fontFamily: "'Permanent Marker', cursive",
    },
    h6: {
      fontFamily: "'Permanent Marker', cursive",
    },
  }, // Font
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
      },
    ]
  }
])

function App() {

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
