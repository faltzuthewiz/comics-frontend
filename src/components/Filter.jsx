import { Box, Button, TextField, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

function Filter({ onChange, value }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form action="">
                <Typography>Suodata sarjakuvia teoksen nimen perusteella</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SearchIcon sx={{}} />
                    <TextField id="search-bar" onChange={onChange} label="Suodata sarjakuvia" value={value} />
                    <Button startIcon={<FilterAltOffIcon />} onClick={onChange} value="" >Tyhjennä filtteri</Button>
                </Box>
            </form>
        </Box>
    )
}

export default Filter