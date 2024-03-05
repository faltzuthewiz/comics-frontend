function Image({ image }) {

    if (image === undefined || image === "") {
        return (
            <div style={{ height: "150px", width: "120px", backgroundColor: "lightblue" }}>Ei saatavilla olevaa kuvaa</div>
        )
    } else {
        return (
            <img src={"/src/images/" + image} alt="sarjakuvan kansikuva" style={{ width: "120px" }} />
        )
    }
}

export default Image