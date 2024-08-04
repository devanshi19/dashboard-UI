import { AiFillHome } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import "./Sidebar.scss"
const Sidebar = () => {
    return (
        <>
            <div className="sidebar-wrap">
                <ul>
                    <li className="active">
                        <AiFillHome className="icon" />
                    </li>
                    <li>
                        <IoStatsChart className="icon" />
                    </li>
                    <li>
                        <BiTask className="icon" />
                    </li>
                    <li>
                        <IoBagCheckOutline className="icon" />
                    </li>
                </ul>
                <div className="export-icon">
                    <BiExport className="icon" />
                </div>

            </div>
            <div className="mobile-sidebar">
                <ul>
                    <li className="active">
                        <AiFillHome className="icon" />
                    </li>
                    <li>
                        <IoStatsChart className="icon" />
                    </li>
                    <li>
                        <BiTask className="icon" />
                    </li>
                    <li>
                        <IoBagCheckOutline className="icon" />
                    </li>
                    <li>
                        <BiExport className="icon" />
                    </li>
                </ul>
            </div>
        </>

    )
}
export default Sidebar;