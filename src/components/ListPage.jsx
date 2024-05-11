import Filter from "./Filter";
import Results from "./Results";
import { useState } from "react";
import { useEffect } from "react";
import { deleteComic, getComics } from "./comics";
import ErrorIcon from '@mui/icons-material/Error';

import { Box, Grid, Typography } from "@mui/material"

function ListPage() {

    const [filterName, setFilterName] = useState('')

    const [comics, setComics] = useState([])
    const [comicsToShow, setComicsToShow] = useState(comics)

    const getAllComics = async () => {
        try {
            const response = await getComics()
            setComics(response.data)
            setComicsToShow(response.data)
        } catch (error) {
            setComics([])
        }
    }

    useEffect(() => {
        getAllComics()
    }, [])

    const handleFilter = (e) => {
        const keyword = e.target.value

        if (keyword !== '') {
            const results = comics.filter((comic) => {
                return comic.name.toLowerCase().includes(keyword.toLowerCase())
            })
            setComicsToShow(results)
        } else {
            setComicsToShow(comics)
        }
        setFilterName(keyword)
    }

    const handleShowButton = (id) => {
        const results = comics.filter((comic) => {
            return (comic.id === id)
        })

        setComicsToShow(results)
    }

    const handleDelete = (id) => {
        const comic = comics.find(n => n.id === id)
        deleteComic(id)
        setComics(comics.filter((comic) => comic.id !== id))
        setComicsToShow(comics.filter((comic) => comic.id !== id))
    }

    return (
        <Box sx={{ marginTop: "100px" }}>
            {
                comics !== undefined && comics.length > 0 ? (
                    <>
                        <Filter onChange={handleFilter} value={filterName} />
                        <Results comics={comicsToShow} showbtn={handleShowButton} onChange={handleFilter} handleDelete={handleDelete} value={filterName} />
                    </>
                ) :
                    <Grid container sx={{ gap: '20px', justifyContent: 'center', alignItems: 'center', py: '20px', height: '400px' }}>
                        <Box sx={{ color: "error.main", padding: 2, backgroundColor: "error.main", display: "flex", alignItems: "center" }}>
                            <ErrorIcon fontSize="large" sx={{ color: "error.contrastText", display: "inline" }} />
                            <Typography variant="h3" sx={{ color: "error.contrastText", display: "inline", marginLeft: 1 }}>Virhe! Ei sarjakuvia saatavilla.</Typography>
                        </Box>
                    </Grid>
            }
        </Box>
    )
}

export default ListPage