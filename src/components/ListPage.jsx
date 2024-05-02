import Filter from "./Filter";
import Results from "./Results";
import { useState } from "react";
import { useEffect } from "react";
import { getComics } from "./comics";

import { Box } from "@mui/material"

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

    return (
        <Box sx={{ marginTop: "100px" }}>
            <Filter onChange={handleFilter} value={filterName} />
            <Results comics={comicsToShow} showbtn={handleShowButton} onChange={handleFilter} value={filterName} />
        </Box>
    )
}

export default ListPage