import { useState } from "react";

import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Switch, TextField, Typography } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import fi from 'date-fns/locale/fi';
import { Link } from "react-router-dom";

import { DesktopDatePicker } from "@mui/x-date-pickers";
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { addComic } from "./comics";
import Footer from "./Footer";

function AddComicForm() {

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

    const [showBox, setShowBox] = useState(false)
    const [errors, setErrors] = useState({})
    const [text, setText] = useState("")

    const change = (e) => {
        const { name, value, type, checked } = e.target
        const newValue = type === 'checkbox' ? checked : value

        setComic({
            ...comic,
            [name]: newValue,
        })

        setText("")
        setShowBox(false)
        setErrors({ ...errors, [name]: '' })
    }

    const changeCheck = (e) => {
        setComic({
            ...comic,
            [e.target.name]: e.target.checked,
        })

        setText("")
        setShowBox(false)
        setErrors({ ...errors, [e.target.name]: '' })
    }

    const changeDate = (e) => {
        setComic({
            ...comic,
            dateRead: e,
        })

        setText("")
        setShowBox(false)
        setErrors({ ...errors, dateRead: '' })
    }

    const changeLanguage = (e) => {
        setComic({
            ...comic,
            language: e.target.value,
        })

        setText("")
        setShowBox(false)
        setErrors({ ...errors, language: '' })
    }

    const changeImage = (e) => {
        setComic({
            ...comic,
            image: e.target.files[0],
        })

        setText("")
        setShowBox(false)
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
        tempErrors.ISBN = comic.ISBN.match(/^[0-9]*$/) ? "" : "ISBN-numero voi sisältää vain numeroita. Jätä väliviivat pois.";
        tempErrors.language = comic.language ? "" : "Kieli on pakollinen";
        tempErrors.ownThoughts = comic.ownThoughts ? "" : "Oman kommentin kirjoittaminen on pakollista";

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    }

    const addNewComic = async () => {
        if (validate()) {
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

            let date = comic.dateRead.getFullYear() + "-" + (comic.dateRead.getMonth() + 1) + "-" + comic.dateRead.getDate()
            formData.append('dateRead', date)
            formData.append('image', comic.image)
            formData.append('ownThoughts', comic.ownThoughts)

            try {
                const response = await addComic(formData)
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
                setText('Uusi sarjakuva lisätty!')
                setShowBox(true)
            } catch (error) {
                setText('Uuden sarjakuvan lisääminen ei onnistunut!')
                setShowBox(false)
            }
        } else {
            setText("Tarkista virheet!")
            setShowBox(false)
        }

    }

    const emptyChanges = () => {
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

        setErrors({})
        setText('')
        setShowBox(false)
    }

    return (
        <>
            <Paper sx={{ maxWidth: 1000, margin: "auto", marginTop: "120px", marginBottom: "40px", }}>
                <Typography variant="h2">Lisää uusi sarjakuva</Typography>

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
                        <Typography sx={{ display: "inline" }}>{imageName}</Typography>
                    </InputLabel>
                    <Button variant="contained" onClick={addNewComic}>Tallenna</Button>
                    <Button sx={{ margin: "10px" }} variant="contained" color="warning" onClick={emptyChanges}>Tyhjennä</Button>

                    <Typography>{text}</Typography>
                    {showBox && (
                        <Box sx={{ border: "solid 5px", padding: 1, borderColor: "secondary.main" }}>
                            <Typography>Lisää toinen sarjakuva täyttämällä ylläoleva lomake tai tarkastele sarjakuvalistaa <Link to="/listaa">klikkaamalla tästä</Link></Typography>
                        </Box>
                    )}
                </Box>
            </Paper>
            <Footer />
        </>
    )
}

export default AddComicForm