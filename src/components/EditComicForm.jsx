import { useEffect, useState } from "react";

import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Switch, TextField, Typography } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import fi from 'date-fns/locale/fi';

import { DesktopDatePicker } from "@mui/x-date-pickers";
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { editComic, getOneComic } from "./comics";
import Footer from "./Footer";

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
    const [errors, setErrors] = useState({})

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
        setErrors({ ...errors, [name]: '' })
    }

    const changeCheck = (e) => {
        setComic({
            ...comic,
            [e.target.name]: e.target.checked,
        })

        setText("")
        setErrors({ ...errors, [e.target.name]: '' })
    }

    const changeDate = (e) => {
        setComic({
            ...comic,
            dateRead: e,
        })

        console.log(comic)

        setText("")
        setErrors({ ...errors, dateRead: '' })
    }

    const changeLanguage = (e) => {
        setComic({
            ...comic,
            language: e.target.value,
        })

        setText("")
        setErrors({ ...errors, language: '' })
    }

    const changeImage = (e) => {
        setComic({
            ...comic,
            image: e.target.files[0],
        })

        setText("")
        setErrors({ ...errors, image: '' })
    }

    let imageName = ''
    if (comic.image !== null) {
        imageName = comic.image.name
    }

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = comic.name ? "" : "Sarjakuvan nimi on pakollinen";
        tempErrors.artist = comic.artist ? "" : "Piirtäjä on pakollinen";
        tempErrors.writer = comic.writer ? "" : "Käsikirjoittaja on pakollinen";
        tempErrors.details = comic.details ? "" : "Kuvaus on pakollinen";
        tempErrors.pages = comic.pages && !isNaN(comic.pages) ? "" : "Sivumäärä on pakollinen ja sen pitää olla numero";
        tempErrors.publicationYear = comic.publicationYear && !isNaN(comic.publicationYear) ? "" : "Julkaisuvuosi on pakollinen ja sen pitää olla numero";
        tempErrors.ISBN = comic.ISBN && comic.ISBN.toString().match(/^[0-9]*$/) ? "" : "ISBN-numero voi sisältää vain numeroita. Jätä väliviivat pois.";
        tempErrors.language = comic.language ? "" : "Kieli on pakollinen";
        tempErrors.ownThoughts = comic.ownThoughts ? "" : "Oman kommentin kirjoittaminen on pakollista";

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    }

    const submitEditedComic = async () => {

        if (validate()) {
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
        } else {
            setText("Tarkista virheet!")
        }

    }


    return (
        <>
            <Paper sx={{ maxWidth: 1000, margin: "auto", marginTop: "120px", marginBottom: "40px" }}>
                <Typography variant="h2">Muokkaa sarjakuvaa</Typography>

                <Box component='form' autoComplete='off' sx={{ '& .MuiTextField-root': { marginBottom: 2 } }}>
                    <TextField label='Sarjakuvan nimi' name="name" value={comic.name} onChange={change} fullWidth autoFocus required helperText={errors.name ? errors.name : "Kirjoita teoksen päänimi"}
                        error={Boolean(errors.name)} />
                    <br />
                    <TextField label='Teoksen lisänimi' name="additionalName" value={comic.additionalName} onChange={change} fullWidth helperText="Kirjoita teoksen mahdollinen lisänimi" />
                    <br />
                    <TextField label='Piirtäjä' name="artist" value={comic.artist} onChange={change} fullWidth required helperText={errors.artist ? errors.artist : ""}
                        error={Boolean(errors.artist)} />
                    <br />
                    <TextField label='Käsikirjoittaja' name="writer" value={comic.writer} onChange={change} fullWidth required helperText={errors.writer ? errors.writer : ""}
                        error={Boolean(errors.writer)} />
                    <br />
                    <FormControlLabel labelPlacement="start" label='Onko teos käännös toisesta kielestä?' control={<><Typography>Kyllä</Typography><Switch color="primary" checked={comic.translation} onChange={changeCheck} name="translation" /><Typography sx={{ marginLeft: "10px" }}>Ei</Typography></>} />
                    <br />
                    {comic.translation == true && (
                        <>
                            <TextField label='Alkuperäinen nimi' name="originalName" value={comic.originalName} onChange={change} fullWidth />
                            <br />
                        </>
                    )}
                    <TextField label='Kuvaus' name="details" value={comic.details} onChange={change} multiline rows='4' fullWidth required helperText={errors.details ? errors.details : ""}
                        error={Boolean(errors.details)} />
                    <br />
                    <TextField label='Sivumäärä' name="pages" value={comic.pages} onChange={change} fullWidth required helperText={errors.pages ? errors.pages : "Kirjoita sivumäärä numeroina, esim. 54"}
                        error={Boolean(errors.pages)} />
                    <br />
                    <TextField label='Julkaisuvuosi' name="publicationYear" value={comic.publicationYear} onChange={change} fullWidth required helperText={errors.publicationYear ? errors.publicationYear : "Kirjoita julkaisuvuosi numeroina, esim. 2024"}
                        error={Boolean(errors.publicationYear)} />
                    <br />
                    <TextField label='ISBN' name="ISBN" value={comic.ISBN} onChange={change} fullWidth helperText={errors.ISBN ? errors.ISBN : "Kirjoita ISBN-numero yhteen, ilman väliviivoja"}
                        error={Boolean(errors.ISBN)} />
                    <br />
                    <FormControlLabel labelPlacement="start" label='Onko teos omakustanne (Esim. tekijän itsensä myymät pienlehdet, zinet)?' control={<><Typography>Kyllä</Typography><Switch color="primary" checked={comic.selfPublished} onChange={changeCheck} name="selfPublished" /><Typography sx={{ marginLeft: "10px" }}>Ei</Typography></>} />
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
                    <TextField label='Omat ajatukset' name="ownThoughts" value={comic.ownThoughts} onChange={change} multiline rows='4' fullWidth required helperText={errors.ownThoughts ? errors.ownThoughts : ""}
                        error={Boolean(errors.ownThoughts)} />
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
            <Footer />
        </>
    )
}

export default EditComicForm