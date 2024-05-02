import { Box, Grid, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";
import { useEffect } from "react";
import { getComics } from "./comics";

/*
const images = [
    "https://cdn.pixabay.com/photo/2023/10/02/14/51/flowers-8289321_640.png",
    "https://cdn.pixabay.com/photo/2023/09/10/15/15/flowers-8245210_640.png",
    "https://cdn.pixabay.com/photo/2023/09/04/17/04/saturn-8233220_640.png"
];

*/

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

    const images = comics.map(({ image }) => image)

    const chunkSize = 3

    return (
        <Box sx={{ width: "100%", margin: 'auto', mt: 5, backgroundColor: "secondary.main" }}>
            <Carousel animation="fade">
                {
                    groupIntoChunks(images, chunkSize).map((group, groupIndex) => (
                        <Grid container key={groupIndex} sx={{ gap: '20px', justifyContent: 'center', alignItems: 'center', py: '20px', height: '400px' }}>
                            {group.map((image, i) => (
                                <Grid item key={i} sx={{ objectFit: "contain", height: "300px" }} >
                                    <Box component="img" src={'http://localhost:8080/download/' + image} sx={{ width: "100%", height: "360px", objectFit: "contain" }} />
                                </Grid>
                            ))}
                        </Grid>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default ImageCarousel