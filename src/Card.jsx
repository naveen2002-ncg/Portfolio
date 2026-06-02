import pic from "./assets/image.png";
function Card(props) {
    return (
        <div className="card">
            <img src={pic} alt="OG" />
            <h2>They Call Him OG</h2>
            <p>Crime-Thriller movie</p>
        </div>
    );
}
export default Card;