import { TbShoppingBagPlus } from "react-icons/tb";
import { HiShoppingBag } from "react-icons/hi2";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import "./CountComponent.scss"
const CountComponent = ({ counter, index }) => {
    const { countIcon, countText, countNumber } = counter;
    const wrapClass = countIcon?.props?.className.split(" ")[1]
    return (
        <div className="count-component-wrap ">
            <div className="count-top">
                <div className={`count-icon-wrap ${wrapClass}`}>
                    {countIcon}
                </div>
                <span>{countText}</span>
            </div>
            <div className="count-bottom">
                <span className="number">{countNumber}</span>
                <div className={`percentage-wrap ${index % 2 === 0 ? "green" : "red"}`}>
                    {index % 2 === 0 ? (<MdArrowDropUp className="icon" />) : (<MdArrowDropDown className="icon" />)}
                    <span>3%</span>
                </div>

            </div>
        </div>
    )
}
export default CountComponent;