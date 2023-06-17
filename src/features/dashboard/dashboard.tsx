import React, { useEffect, useState } from 'react';
import TopHeader from 'shared/components/topHeader/topHeader';

import activityData from '../../assets/JSONDATA/fitnessActivity.json';
import Overview from '../dashboard/components/overview';
import TodayActivity from './components/todaysActivity';
import Goals from './components/goals';
import '../dashboard/styles/dashboard.scss';
import Activities from './components/activities';

const Dashboard = () => {
	const [fitnessActivityData, setFitnessActivityData] = useState(activityData);

	const { user, activities } = fitnessActivityData;
	const { fitness_goal, overview, name, todays_activity } = user;

	return (
		<div className='dashboard-wrapper'>
			<TopHeader user={name} />
			<div className='fitness-detail--wrapper flex--column'>
				<div className='flex'>
					<Overview userOverview={overview} />
					<TodayActivity todayActivityData={todays_activity} />
					<Goals fitnessGoalsData={fitness_goal} />
				</div>
				<div className='flex'>
					<Activities activityData={activities} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
