import Filter from "./Filter"
import Results from "./Results"
import { useState } from "react"

import { Box } from "@mui/material"

function ListPage({ comicsList }) {

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

    const handleShowButton = (id) => {
        const results = comicsList.filter((comic) => {
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