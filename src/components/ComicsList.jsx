import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material"

function ComicsList({ comics, showbtn }) {

    function formatDate(string) {
        return new Date(string).toLocaleDateString('fi-FI', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    return (
        <>
            <Typography variant="h2">Sarjakuvalista</Typography>
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
                                        <CardHeader title={`${comic.name} ${comic.additionalName}`} />
                                        <Typography>Kirjoittaja: {comic.writer}</Typography>
                                        <Typography>Piirtäjä: {comic.artist}</Typography>
                                        <Typography>Julkaisuvuosi: {comic.publicationYear}</Typography>
                                        <Typography>Luettu: {formatDate(comic.dateRead)}</Typography>
                                    </CardContent>
                                    <CardActions sx={{}}>
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