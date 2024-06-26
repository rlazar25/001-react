import '../css/CardComponent.css'
function CardComponent(props) {
    let card = {
        img: "",
        title: "Rtanj",
    }
    console.log(props);
    return (
        <div className="card">
            <img src={props.image} alt={props.title + ' img'} />
            <h2>{props.title}</h2>
            <button onClick={() => {
                alert(`Trip booked successfully:
${props.title}`)
            }}>Book Trip</button>
        </div>
    )
}

export default CardComponent;