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
            <div className="image-container">
                <img src={props.image} alt={props.title + ' img'} />
            </div>
            <div className="trip-info">
                <h2>{props.title}</h2>
                <p>{props.price}</p>
            </div>

            <button onClick={() => {
                alert(`Trip booked successfully:
${props.title}
Price is: ${props.price}`.trim())
            }}>Book Trip</button>
        </div>
    )
}

export default CardComponent;