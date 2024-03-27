import Image from "./Image"
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material"

function ComicsList({ comics, showbtn }) {

    return (
        <>
            <Typography variant="h2">Sarjakuvalista</Typography>
            <Grid container spacing={2}>
                {
                    comics.map(comic => {
                        return (
                            <Grid item key={comic.id}>
                                <Card sx={{ width: 320 }}>
                                    <CardHeader title={`${comic.name} ${comic.additionalName}`} />
                                    {
                                        comic.image !== "" ?
                                            <CardMedia sx={{ height: 220 }} component="img" image={`src/images/${comic.image}`} alt="Sarjakuvan kansikuva" />
                                            : <CardContent sx={{ textAlign: "center", height: 120, backgroundColor: "grey.300" }}><Typography >Ei kuvaa</Typography></CardContent>
                                    }
                                    <CardContent>
                                        <Typography>Kirjoittaja: {comic.writer}</Typography>
                                        <Typography>Piirtäjä: {comic.artist}</Typography>
                                        <Typography>Julkaisuvuosi: {comic.publicationYear}</Typography>
                                        <Typography>Luettu: {comic.dateRead}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button color="primary" onClick={() => showbtn(comic.id)}>Näytä lisätietoja</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default ComicsList