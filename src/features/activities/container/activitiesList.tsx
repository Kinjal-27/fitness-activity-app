import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import activityData from 'assets/JSONDATA/fitnessActivity.json';

import { formatDate } from 'shared/util/utility';
import Running from 'assets/images/running.png';
import Swimming from 'assets/images/swimming.png';
import Cycling from 'assets/images/cycling.png';
import Strength from 'assets/images/strength.png';
import CaloryBurn from 'assets/images/calories.png';
import HeartRate from 'assets/images/heart-rate.png';
import FootPrints from 'assets/images/footprints.png';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

import '../styles/activityList.scss';
import { BackArrowIcon } from 'shared/components/icons/icons';

const ActivitiesList = () => {
	const [fitnessActivityData, setFitnessActivityData] = useState(activityData);
	const [chartData, setChartData] = useState<any>();
	const navigate = useNavigate();

	const location = useLocation();
	const activityId = location.pathname.split('/')[2];

	interface IActvityMapper {
		[key: string]: string;
	}

	const activityColorMapper: IActvityMapper = {
		Running: '#87c285',
		Swimming: '#fad578',
		Cycling: '#688D95',
		Strength: '#6f4bdb'
	};

	const activityImgMapper: IActvityMapper = {
		Running: Running,
		Swimming: Swimming,
		Cycling: Cycling,
		Strength: Strength
	};

	const handleChartData = () => {
		const data = fitnessActivityData.activities.filter((item) => item.id === activityId);

		setChartData(data.length > 0 ? data[0] : null);
	};

	const caloriesBurnedArray =
		chartData?.weekly_data &&
		chartData?.weekly_data.map((activity: Record<string, any>) => activity.calories_burned);
	const heartRateArray =
		chartData?.weekly_data && chartData?.weekly_data.map((activity: Record<string, any>) => activity.heart_rate);
	const steps =
		chartData?.weekly_data && chartData?.weekly_data.map((activity: Record<string, any>) => activity.steps);
	const distance =
		chartData?.weekly_data && chartData?.weekly_data.map((activity: Record<string, any>) => activity.distance);
	const date =
		chartData?.weekly_data &&
		chartData?.weekly_data.map((activity: Record<string, any>) => formatDate(activity.date));

	useEffect(() => {
		handleChartData();
	}, []);

	// const { date, distance, heart_rate, calories_burned, steps } = chartData?.weekly_data;

	const data = {
		labels: date,
		backgroundColor: 'rgba(255, 99, 132, 0.2)',
		borderColor: '#fff',
		datasets: [
			{
				label: 'Calories Burn',
				data: caloriesBurnedArray,
				borderColor: '#87c285',
				backgroundColor: '#87c285',
				color: 'white'
			},
			{
				label: 'Heart Rate',
				data: heartRateArray,
				borderColor: '#6f4bdb',
				backgroundColor: '#6f4bdb',
				color: 'white'
			}
		]
	};
	const config = {
		data: data
	};

	const lineChartData = {
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
			},
			{
				label: 'Steps',
				data: steps,
				borderColor: '#fad578',
				backgroundColor: '#fad578',
				color: 'white'
			}
		]
	};
	const lineConfig = {
		data: lineChartData
	};

	return (
		<div className='activitiy-container'>
			<div className='inner-wrapper'>
				{fitnessActivityData.activities.map((items: any, index: number) => {
					const { name, calories_burned, steps, heart_rate } = items;
					return (
						<>
							{items.id === activityId && (
								<div key={index} className='activity-detail--wrapper'>
									<div className='activity-header'>
										<div className='back-arrow' onClick={() => navigate(-1)}>
											<BackArrowIcon className='back-arrow-svg' />
										</div>
										<div>
											<div
												className='img-wrapper'
												style={{
													backgroundColor: activityColorMapper[name]
												}}
											>
												<img
													src={activityImgMapper[name]}
													alt='symbol'
													className='activity-img'
												/>
											</div>
											<p className='font-size--30'>{name}</p>
										</div>
									</div>
									<div className='detail-wrapper'>
										<div className='card-wrapper mt--40'>
											<div className='card-img--wrapper calory-img'>
												<img src={CaloryBurn} alt='health' className='card-img' />
											</div>
											<div className='flex justify-content--between'>
												<p className='text--gray font-size--lg'>Calories Burned</p>
												<p className='value calories'>{calories_burned} kcal</p>
											</div>
										</div>
										<div className='card-wrapper mt--40'>
											<div className='card-img--wrapper heart-rate-img'>
												<img src={FootPrints} alt='health' className='card-img' />
											</div>
											<div className='flex justify-content--between'>
												<p className='text--gray font-size--lg'>Steps</p>
												<p className='value steps'>{steps} count</p>
											</div>
										</div>
										<div className='card-wrapper mt--40'>
											<div className='card-img--wrapper steps-img'>
												<img src={HeartRate} alt='health' className='card-img steps-img' />
											</div>
											<div className='flex justify-content--between'>
												<p className='text--gray font-size--lg'>Heart Rate</p>
												<p className='value heart-rate'>{heart_rate.average} bpm</p>
											</div>
										</div>
									</div>
									<div className='weekly-detail--wrapper'>
										<h5 className='weekly-title mb--10'>Weekly Details</h5>
										<div className='flex weekly-charts'>
											<div className='chart-wrapper pr--30'>
												<Bar data={data} options={config as Record<string, any>} />
											</div>
											<div className='chart-wrapper pr--30'>
												<Line
													data={lineChartData}
													options={lineConfig as Record<string, any>}
												/>
											</div>
										</div>
									</div>
								</div>
							)}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default ActivitiesList;
