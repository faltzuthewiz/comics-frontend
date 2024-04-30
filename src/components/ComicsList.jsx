import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { getComics } from "./comics";

function ComicsList({ comics, showbtn }) {
    //function ComicsList({ showbtn }) {



    function formatDate(string) {
        return new Date(string).toLocaleDateString('fi-FI', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    return (
        <>
            <Box sx={{ marginTop: "40px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography variant="h2">Sarjakuvalista</Typography>
                <Typography>Tuloksia yhteensä {comics.length}</Typography>
                <Box sx={{ marginLeft: "10%", marginBottom: "90px" }}>
                    <Grid container spacing={2} >
                        {
                            comics.map(comic => {
                                return (
                                    <Grid item key={comic.id} xs={10} >
                                        <Card sx={{ display: "flex" }}>
                                            {
                                                comic.image !== "" ?
                                                    <CardMedia sx={{ height: 220, width: 230, }} component="img" image={`src/images/${comic.image}`} alt="Sarjakuvan kansikuva" />
                                                    : <CardContent sx={{ textAlign: "center", height: 220, width: 200, backgroundColor: "grey.300" }}><Typography >Ei kuvaa</Typography></CardContent>
                                            }
                                            <CardContent sx={{ flexGrow: 8 }}>
                                                {
                                                    comic.additionalName !== "" ?
                                                        <CardHeader title={`${comic.name} : ${comic.additionalName}`} />
                                                        : <CardHeader title={`${comic.name}`} />
                                                }
                                                <Typography>Kirjoittaja: {comic.writer}</Typography>
                                                <Typography>Piirtäjä: {comic.artist}</Typography>
                                                <Typography>Julkaisuvuosi: {comic.publicationYear}</Typography>
                                                <Typography>Luettu: {formatDate(comic.dateRead)}</Typography>
                                            </CardContent>
                                            <CardActions sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                                <Button variant="contained" color="primary" onClick={() => showbtn(comic.id)} sx={{ width: "100%", height: "100%" }} >Näytä lisätietoja</Button>
                                                <Button variant="contained" color="secondary" sx={{ width: "100%", height: "100%" }} ><EditIcon />Muokkaa</Button>
                                                <Button variant="contained" color="error" sx={{ width: "100%", height: "100%" }}><DeleteIcon />Poista</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Typography>Hakutulokset päättyivät.</Typography>
                </Box>
            </Box >
        </>
    )
}

export default ComicsList