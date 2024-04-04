import { Box, Button, FormControlLabel, Paper, Switch, TextField, Typography } from "@mui/material"

function AddComicForm({ change, changeCheck, addComic, comic }) {

    return (
        <Paper sx={{ maxWidth: 1200 }}>
            <Typography variant="h2">Lisää uusi sarjakuva</Typography>

            <Box component='form' autoComplete='off' sx={{ '& .MuiTextField-root': { marginBottom: 2 } }}>
                <TextField label='Sarjakuvan nimi' name="name" value={comic.name} onChange={change} fullWidth />
                <br />
                <TextField label='Teoksen lisänimi' name="additionalName" value={comic.additionalName} onChange={change} fullWidth />
                <br />
                <TextField label='Piirtäjä' name="artist" value={comic.artist} onChange={change} fullWidth />
                <br />
                <TextField label='Käsikirjoittaja' name="writer" value={comic.writer} onChange={change} fullWidth />
                <br />
                <FormControlLabel labelPlacement="start" label='Onko teos käännös?' control={<Switch color="primary" checked={comic.translation} onChange={changeCheck} name="translation" />} />
                <br />
                <TextField label='Alkuperäinen nimi' name="originalName" value={comic.originalName} onChange={change} fullWidth />
                <br />
                <TextField label='Kuvaus' name="details" value={comic.details} onChange={change} multiline rows='4' fullWidth />
                <br />

                <label>Sivumäärä
                    <input type="text" name="pages" value={comic.pages} onChange={change} /> <br />
                </label>
                <label>Julkaisuvuosi
                    <input type="text" name="publicationYear" value={comic.publicationYear} onChange={change} /> <br />
                </label>
                <label>ISBN
                    <input type="text" name="ISBN" value={comic.ISBN} onChange={change} /> <br />
                </label>
                <FormControlLabel labelPlacement="start" label='Onko teos omakustanne?' control={<Switch color="primary" checked={comic.selfPublished} onChange={changeCheck} name="selfPublished" />} />
                <br />

                <TextField label='Julkaisija' name="publisher" value={comic.publisher} onChange={change} fullWidth />
                <br />

                <label>Kieli
                    <select name="language" defaultValue={comic.language} onChange={change}>
                        <option value="Finnish">suomi</option>
                        <option value="English">englanti</option>
                        <option value="Swedish">ruotsi</option>
                        <option value="German">saksa</option>
                        <option value="Danish">tanska</option>
                        <option value="Other">muu</option>
                    </select>
                    <br />
                </label>
                <label>Luettu loppuun päivämäärällä
                    <input type="text" name="dateRead" value={comic.dateRead} onChange={change} /> <br />
                </label>
                <TextField label='Omat ajatukset' name="ownThoughts" value={comic.ownThoughts} onChange={change} multiline rows='4' fullWidth />
                <br />

                <label>Kansikuva
                    <input type="file" name="image" value={comic.image} onChange={change} id="fileInput" accept=".jpg, .jpeg, .png" /> <br />
                </label>
                <Button variant="contained" onClick={addComic}>Tallenna</Button>
            </Box>
        </Paper>
    )
}

export default AddComicForm