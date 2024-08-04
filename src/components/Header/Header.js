import { FaFan } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./Header.scss";
import userImg from "../../assets/images/user.jpg"
const Header = () => {
    return (
        <div className="header-wrap">
            <div className="header-left logo-wrap">
                <FaFan className="icon" />
            </div>
            <div className="header-content">
                <div className="search-wrap">
                    <RiSearchLine className="search-icon" />
                    <input type="text" placeholder={"Search"}></input>
                </div>
                <div className="header-right">
                    <ul>
                        <li>
                            <MdOutlineLocalPostOffice className="icon" />
                        </li>
                        <li>
                            <IoSettingsOutline className="icon" />
                        </li>
                        <li>
                            <IoIosNotificationsOutline className="icon" />
                        </li>
                    </ul>
                    <div className="user-icon">
                        <img src={userImg} />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header;