import { Box, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";
import { useEffect } from "react";
import { getComics } from "./comics";

import ErrorIcon from '@mui/icons-material/Error';

function groupIntoChunks(array, chunkSize) {
    const output = []
    let currentChunk = []

    array.forEach((item, index) => {
        if (item !== null && item !== "") {
            currentChunk.push(item)
        }

        if ((index + 1) % chunkSize === 0 || index === array.length - 1) {
            if (currentChunk.length > 0) {
                output.push(currentChunk)
                currentChunk = []
            }

        }
    });

    return output
}

function ImageCarousel() {

    const [comics, setComics] = useState([])

    const getAllComics = async () => {
        try {
            const response = await getComics()
            setComics(response.data)
        } catch (error) {
            setComics([])
        }
    }

    useEffect(() => {
        getAllComics()
    }, [])

    let images = []
    if (comics && comics.length > 0) {
        images = comics.map(({ image }) => image)
    }

    const chunkSize = 3

    return (
        <Box sx={{ width: "100%", margin: 'auto', mt: 5, backgroundColor: "secondary.main" }}>
            <Carousel animation="fade">
                {
                    images.length > 0 ? (
                        groupIntoChunks(images, chunkSize).map((group, groupIndex) => (
                            <Grid container key={groupIndex} sx={{ gap: '20px', justifyContent: 'center', alignItems: 'center', py: '20px', height: '400px' }}>
                                {group.map((image, i) => (
                                    <Grid item key={i} sx={{ objectFit: "contain", height: "300px" }} >
                                        <Box component="img" src={'http://localhost:8080/download/' + image} sx={{ width: "100%", height: "360px", objectFit: "contain" }} />
                                    </Grid>
                                ))}
                            </Grid>
                        ))
                    ) :
                        <Grid container sx={{ gap: '20px', justifyContent: 'center', alignItems: 'center', py: '20px', height: '400px' }}>
                            <Box sx={{ color: "error.main", padding: 2, backgroundColor: "error.main", display: "flex", alignItems: "center" }}>
                                <ErrorIcon fontSize="large" sx={{ color: "error.contrastText", display: "inline" }} />
                                <Typography variant="h3" sx={{ color: "error.contrastText", display: "inline", marginLeft: 1 }}>Virhe! Ei kuvia saatavilla.</Typography>
                            </Box>
                        </Grid>
                }
            </Carousel>
        </Box>
    )
}

export default ImageCarousel