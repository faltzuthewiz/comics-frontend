import Filter from "./Filter";
import Results from "./Results";
import { useState } from "react";
import { useEffect } from "react";
import { deleteComic, editComic, getComics } from "./comics";

import { Box } from "@mui/material"
import EditComicForm from "./EditComicForm";

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

    const handleEdit = (id) => {
        const comic = comics.find(n => n.id === id)
        console.log(comic)
        return comic

    }

    //console.log(comics)

    return (
        <Box sx={{ marginTop: "100px" }}>
            <Filter onChange={handleFilter} value={filterName} />
            <Results comics={comicsToShow} showbtn={handleShowButton} onChange={handleFilter} handleDelete={handleDelete} value={filterName} handleEdit={handleEdit} />
        </Box>
    )
}

export default ListPage