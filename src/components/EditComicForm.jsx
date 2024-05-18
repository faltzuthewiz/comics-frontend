import { useEffect, useState } from "react";

import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Switch, TextField, Typography } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import fi from 'date-fns/locale/fi';

import { DesktopDatePicker } from "@mui/x-date-pickers";
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { editComic, getOneComic } from "./comics";

import { useParams } from "react-router";

function EditComicForm() {

    const { id } = useParams()

    const [comic, setComic] = useState({
        id: id,
        name: "",
        additionalName: "",
        translation: false,
        originalName: "",
        artist: "",
        writer: "",
        details: "",
        pages: "",
        publicationYear: 0,
        ISBN: "",
        selfPublished: false,
        publisher: "",
        language: "Finnish",
        dateRead: new Date(),
        image: "",
        ownThoughts: "",
    })

    const [text, setText] = useState("")

    useEffect(() => {
        getOneComic(id)
            .then(res => setComic({
                ...comic,
                name: res.data.name,
                additionalName: res.data.additionalName,
                translation: res.data.translation === 1 ? true : false,
                originalName: res.data.originalName,
                artist: res.data.artist,
                writer: res.data.writer,
                details: res.data.details,
                pages: res.data.pages,
                publicationYear: res.data.publicationYear,
                ISBN: res.data.ISBN,
                selfPublished: res.data.selfPublished === 1 ? true : false,
                publisher: res.data.publisher,
                language: res.data.language,
                dateRead: res.data.dateRead,
                image: [], // image will be not updated!
                ownThoughts: res.data.ownThoughts,
            }
            ))
            .catch(err => console.log(err))
    }, [])

    const change = (e) => {
        const { name, value, type, checked } = e.target
        const newValue = type === 'checkbox' ? checked : value

        setComic({
            ...comic,
            [name]: newValue,
        })

        setText("")
    }

    const changeCheck = (e) => {
        setComic({
            ...comic,
            [e.target.name]: e.target.checked,
        })

        setText("")
    }

    const changeDate = (e) => {
        setComic({
            ...comic,
            dateRead: e,
        })

        console.log(comic)

        setText("")
    }

    const changeLanguage = (e) => {
        setComic({
            ...comic,
            language: e.target.value,
        })

        setText("")
    }

    const changeImage = (e) => {
        setComic({
            ...comic,
            image: e.target.files[0],
        })

        setText("")
    }

    let imageName = ''
    if (comic.image !== null) {
        imageName = comic.image.name
    }

    const submitEditedComic = async () => {
        const comicId = comic.id

        const formData = new FormData()
        formData.append('name', comic.name)
        formData.append('additionalName', comic.additionalName)
        formData.append('translation', comic.translation)
        formData.append('originalName', comic.originalName)
        formData.append('artist', comic.artist)
        formData.append('writer', comic.writer)
        formData.append('details', comic.details)
        formData.append('pages', comic.pages)
        formData.append('publicationYear', comic.publicationYear)
        formData.append('ISBN', comic.ISBN)
        formData.append('selfPublished', comic.selfPublished)
        formData.append('publisher', comic.publisher)
        formData.append('language', comic.language)
        formData.append('dateRead', comic.dateRead)
        formData.append('image', comic.image)
        formData.append('ownThoughts', comic.ownThoughts)

        try {
            const response = await editComic(comicId, formData)
            setText('Sarjakuvaa muokattu!')
        } catch (error) {
            setText('Virhe! Sarjakuvan muokkaaminen ei onnistunut.')
        }
    }


    return (
        <Paper sx={{ maxWidth: 1200, marginTop: "120px", marginLeft: "10%", marginBottom: "40px" }}>
            <Typography variant="h2">Muokkaa sarjakuvaa</Typography>

            <Box component='form' autoComplete='off' sx={{ '& .MuiTextField-root': { marginBottom: 2 } }}>
                <TextField label='Sarjakuvan nimi' name="name" value={comic.name} onChange={change} fullWidth autoFocus required />
                <br />
                <TextField label='Teoksen lisänimi' name="additionalName" value={comic.additionalName} onChange={change} fullWidth />
                <br />
                <TextField label='Piirtäjä' name="artist" value={comic.artist} onChange={change} fullWidth required />
                <br />
                <TextField label='Käsikirjoittaja' name="writer" value={comic.writer} onChange={change} fullWidth required />
                <br />
                <FormControlLabel labelPlacement="start" label='Onko teos käännös?' control={<><Typography>Kyllä</Typography><Switch color="primary" checked={comic.translation} onChange={changeCheck} name="translation" /><Typography sx={{ marginLeft: "10px" }}>Ei</Typography></>} />
                <br />
                {comic.translation == true && (
                    <>
                        <TextField label='Alkuperäinen nimi' name="originalName" value={comic.originalName} onChange={change} fullWidth />
                        <br />
                    </>
                )}
                <TextField label='Kuvaus' name="details" value={comic.details} onChange={change} multiline rows='4' fullWidth required />
                <br />
                <TextField label='Sivumäärä' name="pages" value={comic.pages} onChange={change} fullWidth required />
                <br />
                <TextField label='Julkaisuvuosi' name="publicationYear" value={comic.publicationYear} onChange={change} fullWidth required />
                <br />
                <TextField label='ISBN' name="ISBN" value={comic.ISBN} onChange={change} fullWidth />
                <br />
                <FormControlLabel labelPlacement="start" label='Onko teos omakustanne?' control={<><Typography>Kyllä</Typography><Switch color="primary" checked={comic.selfPublished} onChange={changeCheck} name="selfPublished" /><Typography sx={{ marginLeft: "10px" }}>Ei</Typography></>} />
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
                <TextField label='Omat ajatukset' name="ownThoughts" value={comic.ownThoughts} onChange={change} multiline rows='4' fullWidth required />
                <br />
                <input accept="image/*" name="image" id="image" type="file" onChange={changeImage} hidden />
                <InputLabel htmlFor="image">
                    <Typography sx={{ display: "inline" }}>Kansikuva</Typography>
                    <Button component="span">
                        <FileUploadIcon />
                    </Button>
                    <Typography sx={{ display: "inline" }}>Huom! Kuvaa ei talleteta!</Typography>
                    <Typography sx={{ display: "inline" }}>{imageName}</Typography>
                </InputLabel>
                <Button variant="contained" onClick={submitEditedComic}>Tallenna muutokset</Button>

                <Typography>{text}</Typography>
            </Box>
        </Paper>
    )
}

export default EditComicForm