import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import "./Activity.scss"

const Activity = () => {
    ChartJS.register(BarElement, CategoryScale, LinearScale);

    const data = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
        datasets: [
            {
                label: 'Revenue',
                data: [[20, 50,], [0, 80], [10, 70], [30, 100], [10, 70], [20, 80], [10, 60], [30, 50], [10, 100], [0, 90], [40, 100], [25, 50], [10, 70], [20, 80], [30, 90]],
                backgroundColor: '#7294ff',
                // borderColor: '#7294ff',
                borderWidth: 2,
                borderRadius: 50,
                // barThickness: 30,
                barPercentage: 0.5,
                borderSkipped: 0,

            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },

    };

    return (
        <div className='activity-wrap'>
            <div className='activity-top'>
                <h2>Activity</h2>
                <div className='select'>
                    <select>
                        <option>Weekly</option>
                        <option>Monthly</option>
                    </select>
                </div>
            </div>
            <div className='activity-bottom'>
                <Bar data={data} options={options} />;
            </div>
        </div>
    )

}
export default Activity;