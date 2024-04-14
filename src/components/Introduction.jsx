import { Box, Typography } from "@mui/material"

function Introduction() {
    return (
        <>
            <Box sx={{ paddingTop: "120px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "primary.main", color: "#FFF", height: "100vh" }} maxWidth={"false"} >
                <Typography variant="h1">Sonjan sarjiscorner</Typography>
                <Typography sx={{ margin: "100px" }}>Tervetuloa Sonjan sarjiscorneriin! Tällä sivustolla esittelen lukemiani sarjakuvia.</Typography>
            </Box >
        </>
    )
}

export default Introduction