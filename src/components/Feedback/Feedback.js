import userImg from "../../assets/images/user.jpg";
import userImg2 from "../../assets/images/user2.jpg";
import userImg3 from "../../assets/images/user3.jpg";
import { PiStarFill, PiStarBold, PiStarHalfFill } from "react-icons/pi";
import "./Feedback.scss";
const Feedback = () => {
    const feedbackData = [
        {
            icon: userImg,
            name: "Jenny Wilson",
            star: "4",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        },
        {
            icon: userImg2,
            name: "Dianne Russell",
            star: "5",
            text: "We enjoyed the egg benedict served on homemade focaccia bread and hot coffee.Perfect Service."
        },
        {
            icon: userImg3,
            name: "Devon Lane",
            star: "4",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        },
        {
            icon: userImg2,
            name: "Devon Russell",
            star: "5",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }
    ]
    return (
        <div className="feedback-wrap">
            <h2>Customer's Feedback</h2>
            {feedbackData?.map((item) => {
                return (
                    <div className="feedback">
                        <div className="feedback-top">
                            <div className="icon">
                                <img src={item.icon} />
                            </div>
                            <span className="name">{item.name}</span>
                        </div>
                        <div className="star-wrap">
                            {item.star === "4" ? (
                                <>
                                    <PiStarFill />
                                    <PiStarFill />
                                    <PiStarFill />
                                    <PiStarFill />
                                    <PiStarFill className="empty" />
                                </>
                            ) : (
                                <>
                                    <PiStarFill />
                                    <PiStarFill />
                                    <PiStarFill />
                                    <PiStarFill />
                                    <PiStarFill />
                                </>
                            )}
                        </div>
                        <div className="feedback-bottom">
                            <p>{item?.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Feedback;