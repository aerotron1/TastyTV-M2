import { useState, useEffect } from "react"

const initialState = { id: "", name: "", released: "", watched: "" }

function Movie(props) {
    const [movie, setMovie] = useState(initialState)

    useEffect(() => {
        async function getData() {
            const response = await fetch(props.movie.url)
            const data = await response.json()
            setMovie(data)
        }
        getData()
    }, [props.movie])

    return (
        <div>
            <img alt="" src={ props.movie.bannerUrl}/>
            <h2>{props.movie.name}</h2>
            <h3>{props.movie.releasedOn}</h3>
        </div>
    )
}

export default Movie