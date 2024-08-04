import userImg from "../../assets/images/user.jpg";
import userImg2 from "../../assets/images/user2.jpg";
import userImg3 from "../../assets/images/user3.jpg";
import "./Orders.scss";
const Orders = () => {
    const tableData = [
        {
            icon: userImg,
            name: "Wade Warren",
            orderNo: 15478256,
            amount: "124.00",
            status: "Delivered"
        },
        {
            icon: userImg2,
            name: "Jane Cooper",
            orderNo: 48965786,
            amount: "365.02",
            status: "Delivered"
        },
        {
            icon: userImg3,
            name: "Guy Hawkins",
            orderNo: 78958215,
            amount: "45.02",
            status: "Cancelled"
        },
        {
            icon: userImg2,
            name: "Kristin Watson",
            orderNo: 20965741,
            amount: "65.00",
            status: "Pending"
        },
        {
            icon: userImg3,
            name: "Cody Fisher",
            orderNo: 98715620,
            amount: "545.00",
            status: "Delivered"
        },
        {
            icon: userImg,
            name: "Savannah Nguyen",
            orderNo: 7814,
            amount: "128.20",
            status: "Delivered"
        }
    ]
    console.log("ite,", tableData.userImg)
    return (
        <div className="orders-wrap">
            <h2 className="title">Recent Orders</h2>
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Order No.</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData?.map((item) => {
                            return (
                                <tr>
                                    <td>
                                        <div className="cutomer-name">
                                            <img src={item?.icon} alt="customer-img" />
                                            <span>{item?.name}</span>
                                        </div>
                                    </td>
                                    <td>{item?.orderNo}</td>
                                    <td>${item?.amount}</td>
                                    <td >
                                        <span className={`status-span ${item?.status}`}>
                                            {item?.status}
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Orders;