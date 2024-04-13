import Image from "./Image"
import { Box, Button, Grid, Typography } from "@mui/material";

function ComicDetails({ comic }) {

    function formatDate(string) {
        return new Date(string).toLocaleDateString('fi-FI', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    return (
        <Box sx={{ marginLeft: "2%", marginRight: "2%" }}>
            <Typography variant="h2">Sarjakuvan "{comic[0].name}" tiedot</Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Image image={comic[0].image} />
                </Grid>
                <Grid item xs={8}>
                    {comic[0].additionalName !== "" && (
                        <Typography>Koko nimi: {comic[0].name} : {comic[0].additionalName}</Typography>)}
                    {comic[0].additionalName == "" &&
                        <Typography>Koko nimi: {comic[0].name}</Typography>}
                    {comic[0].translation === true && (
                        <Typography>Käännösteos: kyllä</Typography>
                    )}
                    {comic[0].translation === false && (
                        <Typography>Käännösteos: ei</Typography>
                    )}
                    {comic[0].originalName !== "" && (
                        <Typography>Alkuperäinen nimi: {comic[0].originalName}</Typography>)}
                    {comic[0].language == "Finnish" && (
                        <Typography>Sarjakuvan kieli:
                            suomi</Typography>
                    )}
                    {comic[0].language == "English" && (
                        <Typography>Sarjakuvan kieli:
                            englanti</Typography>
                    )}
                    {comic[0].language == "Swedish" && (
                        <Typography>Sarjakuvan kieli:
                            ruotsi</Typography>
                    )}
                    {comic[0].language == "German" && (
                        <Typography>Sarjakuvan kieli:
                            saksa</Typography>
                    )}
                    {comic[0].language == "Danish" && (
                        <Typography>Sarjakuvan kieli:
                            tanska</Typography>
                    )}
                    {comic[0].language == "Other" && (
                        <Typography>Sarjakuvan kieli:
                            muu</Typography>
                    )}
                    {comic[0].language == null || comic[0].language == "" && (
                        <Typography>Sarjakuvan kieli:
                            ei saatavilla</Typography>
                    )}
                    <Typography>Kirjoittaja: {comic[0].writer}</Typography>
                    <Typography>Piirtäjä: {comic[0].artist}</Typography>
                    {comic[0].selfPublished === true && (
                        <Typography>Omakustannejulkaisu: kyllä</Typography>
                    )}
                    {comic[0].selfPublished === false && (
                        <Typography>Omakustannejulkaisu: ei</Typography>
                    )}
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