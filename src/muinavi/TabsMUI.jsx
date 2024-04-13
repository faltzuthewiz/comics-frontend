import { AppBar, Box, Container, Typography, Tabs, Tab, Toolbar } from "@mui/material";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';
import CreateIcon from '@mui/icons-material/Create';
import { Link, Outlet } from "react-router-dom";

function TabsMUI() {

    const [value, setValue] = useState(0)

    const handleChange = (e, val) => {
        setValue(val)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <AppBar position="fixed">
                <Container maxWidth={false} disableGutters={true} >
                    <Toolbar disableGutters={false}>
                        <Typography variant="h6" sx={{ flexGrow: 0.4 }}>Sonjan sarjiscorner</Typography>
                        <Tabs variant="fullWidth" value={value} textColor="inherit" onChange={handleChange}>
                            <Tab label="Etusivu" icon={<HomeIcon />} component={Link} to='/' />
                            <Tab label="Sarjakuvalista" icon={<ListIcon />} component={Link} to='listaa' />
                            <Tab label="Lisää uusi" icon={<CreateIcon />} component={Link} to='lisaa' />
                            <Tab label="Tietoa sivustosta" icon={<InfoIcon />} component={Link} to='info' />
                        </Tabs>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </Box>
    )
}

export default TabsMUI