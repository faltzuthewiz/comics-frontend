import { Box, Button, Typography } from "@mui/material"
import { Link, Outlet } from "react-router-dom";

function Introduction() {
    return (
        <>
            <Box sx={{ paddingTop: "120px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "primary.main", color: "#FFF", height: "100vh" }} maxWidth={"false"} >
                <Typography variant="h1">Sonjan sarjiscorner</Typography>
                <Typography sx={{ margin: "100px" }}>Tervetuloa Sonjan sarjiscorneriin! Tällä sivustolla esittelen lukemiani sarjakuvia.</Typography>
                <Box>
                    <Button variant="contained" color="secondary" sx={{ margin: "10px" }} component={Link} to='listaa'>Selaa sarjakuvia</Button>
                    <Button variant="contained" color="secondary" sx={{ margin: "10px" }} component={Link} to='info'>Lue tietoa sivustosta</Button>
                </Box>
            </Box >
        </>
    )
}

export default Introduction