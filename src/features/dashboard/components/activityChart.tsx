import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	BarElement
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement);

const ActivityChart = ({ activityChartData }: any) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const options = { month: 'long', day: 'numeric' };
		return date.toLocaleDateString('en-US', options as any);
	};

	const caloriesBurnedArray = activityChartData.map((activity: Record<string, any>) => activity.calories_burned);
	const heartRateArray = activityChartData.map((activity: Record<string, any>) => activity.heart_rate.average);

	const date = activityChartData.map((activity: Record<string, any>) => formatDate(activity.date));

	const data = {
		labels: date,
		backgroundColor: 'rgba(255, 99, 132, 0.2)',
		borderColor: '#fff',
		datasets: [
			{
				label: 'Calories Burn',
				data: caloriesBurnedArray,
				borderColor: '#6f4bdb',
				backgroundColor: '#6f4bdb',
				color: 'white'
			},
			{
				label: 'Heart Rate',
				data: heartRateArray,
				borderColor: '#688D95',
				backgroundColor: '#688D95',
				color: 'white'
			}
		]
	};
	const config = {
		data: data
	};

	return (
		<div className='ml--20'>
			<h5 className='overview-title mb--20'>Activity</h5>
			<div className='activity-chart--wrapper'>
				<Line data={data} options={config as Record<string, any>} width={'500'} height={'300'} />
			</div>
		</div>
	);
};

export default ActivityChart;
