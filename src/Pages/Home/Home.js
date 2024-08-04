import "./Home.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Header/Sidebar/Sidebar";
import Dashboard from "../../components/Dashboard/Dashboard";
const Home = () => {
    return (
        <div className="home-wrap">
            <Header />
            <div className="home-content">
                <Sidebar />
                <Dashboard />
            </div>
        </div>

    )
}
export default Home;