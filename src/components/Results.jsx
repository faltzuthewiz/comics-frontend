import ComicsList from "./ComicsList"
import ComicDetails from "./ComicDetails"

function Results({ comics, showbtn }) {
    if (comics.length > 1) {
        return (
            <ComicsList comics={comics} showbtn={showbtn} />
        )
    } else if (comics.length === 1) {
        return (
            <ComicDetails comic={comics} />
        )
    } else if (comics.length === 0) {
        return (
            <div>Ei hakutuloksia. Kokeile toista hakusanaa.</div>
        )
    }

}

export default Results