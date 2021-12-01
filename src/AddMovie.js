function AddMovie(props) {
    return (
        <div>
            <h2 style={{color: props.add.watched ? "green" : "red"}}>{props.add.name /* + " " + props.add.rel */}</h2>
            <button onClick={() => props.watchedMovie(props.add.name)}>Watched</button>
        </div>
    )
}

export default AddMovie