import { AppBar, Box, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';

function TabsMUI() {

    const [value, setValue] = useState(0)

    const handleChange = (e, val) => {
        setValue(val)
    }

    return (
        <Box>
            <AppBar position="fixed">
                <Tabs variant="fullWidth" value={value} textColor="inherit" onChange={handleChange}>
                    <Tab label="Etusivu" icon={<HomeIcon />} />
                    <Tab label="Sarjakuvalista" icon={<ListIcon />} />
                    <Tab label="Tietoa sivustosta" icon={<InfoIcon />} />
                </Tabs>
            </AppBar>
        </Box>
    )
}

export default TabsMUI