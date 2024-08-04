
import "./Dashboard.scss";
import CountComponent from "../CountComponent/CountComponent";
import ProfitComponent from "../ProfitComponent/ProfitComponent";
import GoalComponent from "../GoalComponent/GoalComponent";
import { HiShoppingBag } from "react-icons/hi2";
import { IoBagCheck } from "react-icons/io5";
import { BsFillBagXFill } from "react-icons/bs";
import { GiProfit } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { GiHamburger } from "react-icons/gi";
import { PiCallBellDuotone } from "react-icons/pi";
import Orders from "../Orders/Orders";
import Feedback from "../Feedback/Feedback";
import Activity from "../Activity/Activity";
const Dashboard = () => {
    const countObj = [
        {
            countIcon: <HiShoppingBag className="count-icon total" />,
            countText: "Total Orders",
            countNumber: "75"
        },
        {
            countIcon: <IoBagCheck className="count-icon delivered" />,
            countText: "Total Delivered",
            countNumber: "70"
        },
        {
            countIcon: <BsFillBagXFill className="count-icon cancelled" />,
            countText: "Total Cancelled",
            countNumber: "05"
        },
        {
            countIcon: <GiProfit className="count-icon revenue" />,
            countText: "Total Revenue",
            countNumber: "$12K"
        }
    ]

    const GoalCompData = [
        {
            icon: <GoGoal className="icon goal" />,
            text: "Goals"
        },
        {
            icon: <GiHamburger className="icon dish" />,
            text: "Popular Dishes"
        },
        {
            icon: <PiCallBellDuotone className="icon menu" />,
            text: "Menus"
        }
    ]
    return (
        <div className="dashboard-wrap">
            <h2>Dashboard</h2>
            <div className="dashboard-top">
                <div className="count-wrap">
                    {countObj?.map((data, i = 1) => {
                        return <CountComponent counter={data} index={i} />
                    })}
                </div>
                <div className="profit-comp-wrap">
                    <ProfitComponent />
                </div>
            </div>
            <div className="dashboard-middle">
                <div className="activity-comp-wrap">
                    <Activity />
                </div>
                <div className="goal-comp-wrap">
                    {GoalCompData?.map((data) => {
                        return <GoalComponent data={data} />
                    })}

                </div>
            </div>
            <div className="dashboard-bottom">
                <div className="order-comp-wrap">
                    <Orders />
                </div>
                <div className="feedback-comp-wrap">
                    <Feedback />
                </div>
            </div>

        </div>
    )
}
export default Dashboard;