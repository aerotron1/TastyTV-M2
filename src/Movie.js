import { useState, useEffect } from "react"
import Image from 'react-bootstrap/Image'

function Movie(props) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getData() {
            const response = await fetch(props.movie.url)
            const data = await response.json()
            setMovie(data)
        }
        getData()
    }, [props.movie])

    useEffect(() => {
        return () => {
            localStorage.removeItem("movie")
        }
    }, [])

    return (
        <div class="p-3 mb-2 bg-secondary text-white">
            <Image src={props.movie.bannerUrl} roundedCircle />
            <h2>Name: {props.movie.name}</h2>
            <h3>Release: {props.movie.releasedOn}</h3>
        </div>
    )
}


export default Movie