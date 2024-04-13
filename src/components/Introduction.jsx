import { Box, Typography } from "@mui/material"

function Introduction() {
    return (
        <>
            <Box sx={{ marginTop: "120px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography variant="h1">Sonjan sarjiscorner</Typography>
                <Typography sx={{ margin: "100px" }}>Tervetuloa Sonjan sarjiscorneriin! Tällä sivustolla esittelen lukemiani sarjakuvia.</Typography>
            </Box >
        </>
    )
}

export default Introduction