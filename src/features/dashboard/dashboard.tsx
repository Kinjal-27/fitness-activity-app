import React, { useEffect, useState } from 'react';
import TopHeader from 'shared/components/topHeader/topHeader';

import activityData from 'assets/JSONDATA/fitnessActivity.json';
import FitnessWomen from 'assets/images/fitness-women.png';
import '../dashboard/styles/dashboard.scss';

const Dashboard = () => {
	const [fitnessActivityData, setFitnessActivityData] = useState(activityData);
	const [user, setUser] = useState('');

	useEffect(() => {
		setUser(fitnessActivityData.user.name);
	}, []);
	return (
		<div className='dashboard-wrapper'>
			<TopHeader user={user} />
			<div className='goals-wrapper'>
				<div className='motivational-card--wrapper'>
					<div className='description-wrapper'>
						<p className='description mb--10'>Set your goals</p>
						<p className='description'>And motivate yourself</p>
					</div>
					<img src={FitnessWomen} alt='fitness-women' className='exercising-women' />
				</div>
			</div>
			<div className='activity-list--wrapper'>
				<p className='overview-title font-size--22'>OVERVIEW</p>
			</div>
		</div>
	);
};

export default Dashboard;
