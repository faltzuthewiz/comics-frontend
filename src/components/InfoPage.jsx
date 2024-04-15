import { Box, Typography } from "@mui/material"

function InfoPage() {
    return (
        <Box sx={{ marginTop: "120px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxWidth: "1200px", marginLeft: "10%", marginRight: "10%" }}>
            <Typography variant="h2">Tietoa sivustosta</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>Tämä sivusto esittelee lukemiani sarjakuvia. Sivustoa ylläpitää Sonja Fallström. Sarjakuvat ovat pitkäaikainen intohimoni, ja olenkin lukenut (ja piirtänyt) niitä jo päälle parin vuosikymmenen ajan.</Typography>
                <Typography>"Sonjan sarjiscorner" -sivusto on toteutettu alun perin Haaga-Helia ammattikorkeakoulun "Front end -ohjelmointi" -kurssin lopputyönä keväällä 2024.</Typography>
            </Box>
        </Box>
    )
}

export default InfoPage