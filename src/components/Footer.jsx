import { Box, Typography } from "@mui/material"
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    return (
        <Box sx={{ backgroundColor: "primary.main", color: "primary.contrastText", width: "100%", padding: "20px", textAlign: "center", display: "flex", justifyContent: "center", position: "relative", bottom: 0 }}>
            <CopyrightIcon sx={{ display: "inline" }} />
            <Typography sx={{ display: "inline", marginLeft: 1 }}>Sonja Fallström 2024</Typography>
        </Box>
    )
}

export default Footer