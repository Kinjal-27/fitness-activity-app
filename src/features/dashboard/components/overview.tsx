import React, { FC } from 'react';

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
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const overview = ({ userOverview }: Record<string, any>) => {
	const { carbs_per, total_calories_burn_per, protein_per } = userOverview;

	const data = {
		datasets: [
			{
				label: 'My First Dataset',
				data: [total_calories_burn_per, protein_per, carbs_per],
				backgroundColor: ['#6f4bdb', '#fad578', '#87c285'],
				hoverOffset: 4,
				borderWitdh: 10,
				borderColor: 'transparent',
				weight: 1,
				spacing: 5,
				borderRadius: 50,
				cutout: '90%'
			}
		]
	};
	const config = {
		data: data
	};

	return (
		<div className='flex flex--column ml--20'>
			<div className='flex justify-content--between align-items--center'>
				<h5 className='overview-title mb--10'>Overview</h5>
				<p className='text--gray mr--10'>Monthly</p>
			</div>
			<div className='flex overview-wrapper align-items--center'>
				<div className='width--half'>
					<div className='doughnut-chart-wrapper pr--30'>
						<Doughnut data={data} options={config as Record<string, any>} />
					</div>
				</div>
				<ul className='width--half overview-list--wrapper'>
					<div className='flex flex--column mb--20'>
						<li className='flex list list1'>
							<div className='list-title'>Calories burn</div>
						</li>
						<div className='flex'>
							<p className='health-percentage ml--10'>{total_calories_burn_per} %</p>
						</div>
					</div>
					<div className='flex flex--column mb--20'>
						<li className='flex list list2'>
							<div className='list-title'>Protein</div>
						</li>
						<div className='flex'>
							<p className='health-percentage ml--10'>{protein_per} %</p>
						</div>
					</div>
					<div className='flex flex--column'>
						<li className='flex list list3'>
							<div className='list-title'>Crabs</div>
						</li>
						<div className='flex'>
							<p className='health-percentage ml--10'>{carbs_per} %</p>
						</div>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default overview;
