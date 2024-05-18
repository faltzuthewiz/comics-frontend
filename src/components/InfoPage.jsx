import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import PieChartMUI from "./PieChartMUI"
import Footer from "./Footer"

function InfoPage() {
    return (
        <>
            <Box sx={{ margin: "auto", marginTop: "120px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxWidth: "1000px", height: "100%" }}>
                <Typography variant="h2">Tietoa sivustosta</Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>Tämä sivusto esittelee lukemiani sarjakuvia. Sivustoa ylläpitää Sonja Fallström. Sarjakuvat ovat pitkäaikainen intohimoni, ja olenkin lukenut (ja piirtänyt) niitä jo päälle parin vuosikymmenen ajan.</Typography>
                    <Typography>"Sonjan sarjiscorner" -sivusto on toteutettu alun perin Haaga-Helia ammattikorkeakoulun "Front end -ohjelmointi" -kurssin lopputyönä keväällä 2024. Sivusto on toteutettu ReactJS -ohjelmistokirjastolla sekä ulkoasuun on käytetty Material UI -kirjastoa. Sivuston lähdekoodi löytyy <Link to="https://github.com/faltzuthewiz/comics-frontend">GitHubista</Link>.</Typography>
                </Box>
                <PieChartMUI />
            </Box>
            <Footer />
        </>
    )
}

export default InfoPage