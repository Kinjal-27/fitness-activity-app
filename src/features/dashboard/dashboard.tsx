import React, { useEffect, useState } from 'react';

import Overview from '../dashboard/components/overview';
import TodayActivity from './components/todaysActivity';
import Goals from './components/goals';
import '../dashboard/styles/dashboard.scss';
import Activities from './components/activities';
import ActivityChart from './components/activityChart';
import activityData from 'assets/JSONDATA/fitnessActivity.json';

const Dashboard = () => {
	const [fitnessActivityData, setFitnessActivityData] = useState(activityData);

	const { user, activities } = fitnessActivityData;
	const { fitness_goal, overview, todays_activity } = user;

	return (
		<div className='dashboard-wrapper'>
			<div className='fitness-detail--wrapper flex--column'>
				<div className='flex detail-wrapper'>
					<Overview userOverview={overview} />
					<TodayActivity todayActivityData={todays_activity} />
					<Goals fitnessGoalsData={fitness_goal} />
				</div>
				<div className='flex activity-dashboard-wrapper'>
					<Activities activityData={activities} />
					<ActivityChart activityChartData={activities} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
