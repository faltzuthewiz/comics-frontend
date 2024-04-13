import { Box, Typography } from "@mui/material"

function InfoPage() {
    return (
        <Box sx={{ marginTop: "120px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography variant="h2">Tietoa sivustosta</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>Esittely...</Typography>
            </Box>
        </Box>
    )
}

export default InfoPage