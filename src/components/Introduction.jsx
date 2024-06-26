import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";

function Introduction() {
    return (
        <>
            <Box sx={{ paddingTop: "120px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "primary.main", color: "#FFF", minHeight: "100vh" }} maxWidth={"false"} >
                <Box sx={{ marginTop: "10px" }}>
                    <Typography variant="h1">Sonjan sarjiscorner</Typography>
                    <Typography sx={{ padding: "100px", textAlign: "center" }}>Tervetuloa Sonjan sarjiscorneriin! Tällä sivustolla esittelen lukemiani sarjakuvia.</Typography>
                </Box>
                <Box>
                    <Button variant="contained" color="secondary" sx={{ margin: "10px" }} component={Link} to='listaa'>Selaa sarjakuvia</Button>
                    <Button variant="contained" color="secondary" sx={{ margin: "10px" }} component={Link} to='info'>Lue tietoa sivustosta</Button>
                </Box>
                <ImageCarousel />
                <Footer />
            </Box >
        </>
    )
}

export default Introduction