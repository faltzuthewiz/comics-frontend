import { useState } from "react";

import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Switch, TextField, Typography } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import fi from 'date-fns/locale/fi';

import { DesktopDatePicker } from "@mui/x-date-pickers";
import FileUploadIcon from '@mui/icons-material/FileUpload';


function AddComicForm({ comicsList }) {

    const [comic, setComic] = useState({
        name: "",
        additionalName: "",
        translation: false,
        originalName: "",
        artist: "",
        writer: "",
        details: "",
        pages: "",
        publicationYear: 1900,
        ISBN: "",
        selfPublished: false,
        publisher: "",
        language: "Finnish",
        dateRead: new Date(),
        image: [],
        ownThoughts: "",
    })

    const [text, setText] = useState("")

    const change = (e) => {
        const { name, value, type, checked } = e.target
        const newValue = type === 'checkbox' ? checked : value

        setComic({
            ...comic,
            [name]: newValue,
            id: comicsList.length + 1,
        })

        setText("")
    }

    const changeCheck = (e) => {
        setComic({
            ...comic,
            [e.target.name]: e.target.checked,
            id: comicsList.length + 1,
        })

        setText("")
    }

    const changeDate = (e) => {
        setComic({
            ...comic,
            dateRead: e,
            id: comicsList.length + 1,
        })

        setText("")
    }

    const changeLanguage = (e) => {
        setComic({
            ...comic,
            language: e.target.value,
            id: comicsList.length + 1,
        })

        setText("")
    }

    const changeImage = (e) => {
        setComic({
            ...comic,
            image: e.target.files[0],
            id: comicsList.length + 1,
        })

        setText("")
    }

    let imageName = ''
    if (comic.image !== null) {
        imageName = comic.image.name
    }

    const addComic = (e) => {
        e.preventDefault()

        comicsList.concat(comic)

        setComic({
            name: "",
            additionalName: "",
            translation: false,
            originalName: "",
            artist: "",
            writer: "",
            details: "",
            pages: "",
            publicationYear: 1900,
            ISBN: "",
            selfPublished: false,
            publisher: "",
            language: "Finnish",
            dateRead: new Date(),
            image: "",
            ownThoughts: "",
        })

        setText("Uusi sarjakuva lisätty!")
        //setComicsList(comicsList.concat(comic))
        //setComicsToShow(comicsList.concat(comic))
    }

    return (
        <Paper sx={{ maxWidth: 1200, marginTop: "120px", marginLeft: "10%", marginBottom: "40px" }}>
            <Typography variant="h2">Lisää uusi sarjakuva</Typography>

            <Box component='form' autoComplete='off' sx={{ '& .MuiTextField-root': { marginBottom: 2 } }}>
                <TextField label='Sarjakuvan nimi' name="name" value={comic.name} onChange={change} fullWidth autoFocus />
                <br />
                <TextField label='Teoksen lisänimi' name="additionalName" value={comic.additionalName} onChange={change} fullWidth />
                <br />
                <TextField label='Piirtäjä' name="artist" value={comic.artist} onChange={change} fullWidth />
                <br />
                <TextField label='Käsikirjoittaja' name="writer" value={comic.writer} onChange={change} fullWidth />
                <br />
                <FormControlLabel labelPlacement="start" label='Onko teos käännös?' control={<Switch color="primary" checked={comic.translation} onChange={changeCheck} name="translation" />} />
                <br />
                {comic.translation == true && (
                    <>
                        <TextField label='Alkuperäinen nimi' name="originalName" value={comic.originalName} onChange={change} fullWidth />
                        <br />
                    </>
                )}
                <TextField label='Kuvaus' name="details" value={comic.details} onChange={change} multiline rows='4' fullWidth />
                <br />
                <TextField label='Sivumäärä' name="pages" value={comic.pages} onChange={change} fullWidth />
                <br />
                <TextField label='Julkaisuvuosi' name="publicationYear" value={comic.publicationYear} onChange={change} fullWidth />
                <br />
                <TextField label='ISBN' name="ISBN" value={comic.ISBN} onChange={change} fullWidth />
                <br />
                <FormControlLabel labelPlacement="start" label='Onko teos omakustanne?' control={<Switch color="primary" checked={comic.selfPublished} onChange={changeCheck} name="selfPublished" />} />
                <br />
                {comic.selfPublished == false && (
                    <>
                        <TextField label='Julkaisija' name="publisher" value={comic.publisher} onChange={change} fullWidth />
                        <br />
                    </>
                )}
                <FormControl fullWidth>
                    <InputLabel id="language-label">Kieli</InputLabel>
                    <Select
                        labelId="language-label"
                        value={comic.language}
                        label="Kieli"
                        onChange={changeLanguage}
                    >
                        <MenuItem value="Finnish">suomi</MenuItem>
                        <MenuItem value="English">englanti</MenuItem>
                        <MenuItem value="Swedish">ruotsi</MenuItem>
                        <MenuItem value="German">saksa</MenuItem>
                        <MenuItem value="Danish">tanska</MenuItem>
                        <MenuItem value="Other">muu</MenuItem>
                    </Select>
                </FormControl>
                <Typography>Luettu loppuun päivämäärällä</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
                    <DesktopDatePicker sx={{ width: '100%' }} onChange={changeDate} name="dateRead" value={comic.dateRead} />
                </LocalizationProvider>
                <TextField label='Omat ajatukset' name="ownThoughts" value={comic.ownThoughts} onChange={change} multiline rows='4' fullWidth />
                <br />
                <input accept="image/*" name="image" id="image" type="file" onChange={changeImage} hidden />
                <InputLabel htmlFor="image">
                    <Typography sx={{ display: "inline" }}>Kansikuva</Typography>
                    <Button component="span">
                        <FileUploadIcon />
                    </Button>
                    <Typography sx={{ display: "inline" }}>{imageName}</Typography>
                </InputLabel>
                <Button variant="contained" onClick={addComic}>Tallenna</Button>

                <Typography>{text}</Typography>
            </Box>
        </Paper>
    )
}

export default AddComicForm