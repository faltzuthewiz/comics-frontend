import Image from "./Image"
import { Box, Button, Grid, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Switch, TextField, Typography } from "@mui/material";

function ComicDetails({ comic }) {

    function formatDate(string) {
        return new Date(string).toLocaleDateString('fi-FI', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    return (
        <Box>
            <Typography variant="h2">Sarjakuvan {comic[0].name} tiedot</Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Image image={comic[0].image} />
                </Grid>
                <Grid item xs={8}>
                    <Typography>{comic[0].name} {comic[0].additionalName}</Typography>
                    <Typography>Käännösteos: {String(comic[0].translation)}</Typography>
                    <Typography>Alkuperäinen nimi: {comic[0].originalName}</Typography>
                    <Typography>Sarjakuvan kieli: {comic[0].language}</Typography>
                    <Typography>Kirjoittaja: {comic[0].writer}, piirtäjä: {comic[0].artist}</Typography>
                    <Typography>Omakustannejulkaisu: {String(comic[0].selfPublished)}</Typography>
                    <Typography>Julkaisija: {comic[0].publisher}</Typography>
                    <Typography>ISBN: {comic[0].ISBN}</Typography>
                    <Typography>Sivumäärä: {comic[0].pages}</Typography>
                    <Typography>Julkaisuvuosi: {comic[0].publicationYear}</Typography>
                    <Typography>Luettu: {formatDate(comic[0].dateRead)}</Typography>
                    <Typography variant="h3">Kuvaus</Typography>
                    <Typography>{comic[0].details}</Typography>
                    <Typography variant="h3">Omat kommentit sarjakuvasta</Typography>
                    <Typography>{comic[0].ownThoughts}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ComicDetails