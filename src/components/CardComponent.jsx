import '../css/CardComponent.css'
function CardComponent(props) {
    let card = {
        img: "",
        title: "",
        price: ""
    }
    console.log(props);
    return (
        <div className="card">
            <img src={props.image} alt={props.title + ' img'} />
            <div className="trip-info">
                <h2>{props.title}</h2>
                <p>{props.price}</p>
            </div>

            <button onClick={() => {
                alert(`Trip booked successfully:
${props.title}`)
            }}>Book Trip</button>
        </div>
    )
}

export default CardComponent;