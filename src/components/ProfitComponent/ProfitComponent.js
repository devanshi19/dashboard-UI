import { MdArrowDropUp } from "react-icons/md";
import "./ProfitComponent.scss";
import CircularProgress from '@mui/joy/CircularProgress';
const ProfitComponent = () => {
    return (
        <div className="profit-wrap">
            <div className="profit-left">
                <h6>Net Profit</h6>
                <p>$ 6759.25</p>
                <div className="percentage-wrap ">
                    <MdArrowDropUp className="icon" />
                    <span>3%</span>
                </div>
            </div>
            <div className="profit-right">
                <CircularProgress determinate size="lg" thickness={12} value={70}
                    sx={{
                        '--CircularProgress-size': '100px',
                        '--CircularProgress-trackColor': '#272d56 !important', '--CircularProgress-progress': '#7393ff !important'
                    }}>
                    <div>
                        <span>70%</span>
                        <span>Goal Completed</span>
                    </div>
                </CircularProgress>
            </div>
        </div >
    )
}
export default ProfitComponent;