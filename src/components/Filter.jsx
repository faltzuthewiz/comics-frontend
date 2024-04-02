import { Box, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

function Filter({ onChange, value }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form action="">
                <Typography>Suodata sarjakuvia teoksen nimen perusteella</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SearchIcon sx={{}} />
                    <TextField id="search-bar" onChange={onChange} label="Suodata sarjakuvia" value={value} />
                </Box>
            </form>
        </Box>
    )
}

export default Filter