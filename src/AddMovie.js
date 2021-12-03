function AddMovie(props) {
    return (
        <div>
            <h2 style={{color: props.add.watched ? "green" : "red"}}>{props.add.name + " " + props.add.release}</h2>
            <button onClick={() => props.watchedMovie(props.add.name)}>Watched</button>
            <button onClick={() => props.removeMovie(props.add)}>Remove</button>
        </div>
    )
}

export default AddMovie