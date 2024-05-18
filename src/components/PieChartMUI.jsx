import { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts';
import { Box, Grid, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

import { getComics } from "./comics";

import { yellow, deepPurple, teal, } from '@mui/material/colors'

const palette = [teal['A400'], deepPurple[900], yellow['A200']];

function PieChartMUI() {

    const [comics, setComics] = useState([])

    const getAllComics = async () => {
        try {
            const response = await getComics()
            setComics(response.data)
        } catch (error) {
            setComics([])
        }
    }

    useEffect(() => {
        getAllComics()
    }, [])

    const countMatches = (array, value) => {
        return array.filter(item => item.language === value).length
    }

    const countTheRest = (array, value1, value2) => {
        return array.filter(item => item.language !== value1 && item.language !== value2).length
    }

    let findFinnish = 0
    let findEnglish = 0
    let findOthers = 0

    if (comics !== undefined && comics.length > 0) {
        findFinnish = countMatches(comics, "Finnish")

        findEnglish = countMatches(comics, "English")

        findOthers = countTheRest(comics, "Finnish", "English")
    }



    return (
        <>
            <Typography variant="h3">Tilastoja</Typography>
            {comics !== undefined && comics.length > 0 ? (
                <>
                    <Typography variant="h4">Luettujen sarjakuvien kielet</Typography>
                    <Typography>Sarjakuvia on yhteensä {comics.length}</Typography>
                    <PieChart
                        colors={palette}
                        series={[
                            {
                                data: [
                                    { id: 0, value: findFinnish, label: 'suomi' },
                                    { id: 1, value: findEnglish, label: 'englanti' },
                                    { id: 2, value: findOthers, label: 'muut' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                    <Box sx={{ height: "380px" }}></Box>
                </>
            ) :
                <Grid container sx={{ gap: '20px', justifyContent: 'center', alignItems: 'center', py: '20px', height: '400px' }}>
                    <Box sx={{ color: "error.main", padding: 2, backgroundColor: "error.main", display: "flex", alignItems: "center" }}>
                        <ErrorIcon fontSize="large" sx={{ color: "error.contrastText", display: "inline" }} />
                        <Typography variant="h3" sx={{ color: "error.contrastText", display: "inline", marginLeft: 1 }}>Virhe! Ei tilastoja saatavilla.</Typography>
                    </Box>
                </Grid>
            }

        </>
    )
}

export default PieChartMUI