import ComicsList from "./ComicsList"
import ComicDetails from "./ComicDetails"
import { Typography } from "@mui/material"

function Results({ comics, showbtn, onChange, value }) {
    if (comics.length > 1) {
        return (
            <ComicsList comics={comics} showbtn={showbtn} />
        )
    } else if (comics.length === 1) {
        return (
            <ComicDetails comic={comics} onChange={onChange} value={value} />
        )
    } else if (comics.length === 0) {
        return (
            <Typography>Ei hakutuloksia. Kokeile toista hakusanaa.</Typography>
        )
    }

}

export default Results