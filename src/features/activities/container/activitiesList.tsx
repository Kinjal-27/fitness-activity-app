import React, { useState } from 'react';
import activityData from 'assets/JSONDATA/fitnessActivity.json';
import { useLocation } from 'react-router';

import Running from 'assets/images/running.png';
import Swimming from 'assets/images/swimming.png';
import Cycling from 'assets/images/cycling.png';
import Strength from 'assets/images/strength.png';
import CaloryBurn from 'assets/images/calories.png';

import '../styles/activityList.scss';

const ActivitiesList = () => {
	const [fitnessActivityData, setFitnessActivityData] = useState(activityData);

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

	return (
		<div className='activitiy-container'>
			<div className='inner-wrapper'>
				{fitnessActivityData.activities.map((items: any, index: number) => {
					return (
						<>
							{items.id === activityId && (
								<div key={index} className='activity-detail--wrapper'>
									<div className='activity-header'>
										<div
											className='img-wrapper'
											style={{
												backgroundColor: activityColorMapper[items.name]
											}}
										>
											<img
												src={activityImgMapper[items.name]}
												alt='symbol'
												className='activity-img'
											/>
										</div>
										<p className='font-size--34'>{items.name}</p>
									</div>
									<div className='detail-wrapper'>
										<div className='card-wrapper' />
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
