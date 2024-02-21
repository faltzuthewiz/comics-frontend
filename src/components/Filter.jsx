function Filter({ onChange, value }) {
    return (
        <div>
            <form action="">
                <label>Suodata sarjakuvia <br />
                    <input type="search" value={value} onChange={onChange} />
                </label>
            </form>
        </div>
    )
}

export default Filter