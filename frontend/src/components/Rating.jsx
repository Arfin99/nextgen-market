import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const Rating = ({ value, text }) => {
    let startRatingArr = [];
    let startIndex = 1;
    while (startIndex <= 5) {
        startRatingArr.push(<span> {value >= startIndex ? <FaStar /> : value >= (startIndex - 0.5) ? <FaStarHalfAlt /> : <FaRegStar />} </span>);
        startIndex++;
    }
    return (
        <div className="rating">
            <span>{startRatingArr}</span>
            <span className="rating-text">{text && text}</span>
        </div>
    );
}
export default Rating;