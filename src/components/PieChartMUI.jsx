import { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts';
import { Typography } from '@mui/material';

import { getComics } from "./comics";

import { red, blue, green, yellow, lightBlue, deepPurple, teal, grey } from '@mui/material/colors'

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

    const findFinnish = countMatches(comics, "Finnish")

    const findEnglish = countMatches(comics, "English")

    const findOthers = countTheRest(comics, "Finnish", "English")

    return (
        <>
            <Typography variant="h3">Tilastoja</Typography>
            <Typography variant="h4">Luettujen sarjakuvien kielet</Typography>
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
            <Typography>Sarjakuvia on yhteensä {comics.length}</Typography>
        </>
    )
}

export default PieChartMUI