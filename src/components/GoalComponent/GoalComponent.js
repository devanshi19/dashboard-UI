import { MdKeyboardArrowRight } from "react-icons/md";

import "./GoalComponent.scss"
const GoalComponent = ({ data }) => {
    const { icon, text } = data;
    const wrapClass = icon?.props?.className.split(" ")[1]
    return (
        <div className="goal-wrap">
            <div className="goal-left">
                <div className={`icon-wrap ${wrapClass}`}>
                    {icon}
                </div>

            </div>
            <div className="goal-right">
                <p>{text}</p>
                <span>
                    <MdKeyboardArrowRight className="icon" />
                </span>
            </div>
        </div>
    )
}
export default GoalComponent;