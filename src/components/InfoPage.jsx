import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import PieChartMUI from "./PieChartMUI"

function InfoPage() {
    return (
        <Box sx={{ marginTop: "120px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxWidth: "1200px", marginLeft: "10%", marginRight: "10%" }}>
            <Typography variant="h2">Tietoa sivustosta</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>Tämä sivusto esittelee lukemiani sarjakuvia. Sivustoa ylläpitää Sonja Fallström. Sarjakuvat ovat pitkäaikainen intohimoni, ja olenkin lukenut (ja piirtänyt) niitä jo päälle parin vuosikymmenen ajan.</Typography>
                <Typography>"Sonjan sarjiscorner" -sivusto on toteutettu alun perin Haaga-Helia ammattikorkeakoulun "Front end -ohjelmointi" -kurssin lopputyönä keväällä 2024. Sivuston front end on toteutettu ReactJS:lla sekä Material UI:lla. Sivuston lähdekoodi löytyy <Link to="https://github.com/faltzuthewiz/comics-frontend">GitHubista</Link>.</Typography>
            </Box>
            <PieChartMUI />
        </Box>
    )
}

export default InfoPage