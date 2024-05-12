import { Box, Typography } from "@mui/material";

function Image({ image }) {

    if (image === undefined || image === "" || image === null) {
        return (
            <Box sx={{ height: "400px", width: "320px", marginTop: "10px", backgroundColor: "grey.300", display: "flex", alignItems: "center", justifyContent: "center" }}><Typography >Ei saatavilla olevaa kuvaa</Typography></Box>
        )
    } else {
        return (
            <Box component="img" src={"http://localhost:8080/download/" + image} alt="sarjakuvan kansikuva" sx={{ maxWidth: "320px", marginTop: "10px", }} />
        )
    }
}

export default Image