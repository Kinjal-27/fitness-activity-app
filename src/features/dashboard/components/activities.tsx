import React from 'react';
import Running from 'assets/images/running.png';
import Swimming from 'assets/images/swimming.png';
import Cycling from 'assets/images/cycling.png';
import Strength from 'assets/images/strength.png';
import CaloryBurn from 'assets/images/calories.png';
import { HeartRate } from 'shared/components/icons/icons';

const Activities = ({ activityData }: Record<string, any>) => {
	const limitedActivities = activityData.slice(0, 4);

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
		<div className='ml--20'>
			<h5 className='overview-title mb--20'>Activity List</h5>
			<table className='activity-table'>
				<tbody className='table-body'>
					{limitedActivities.map((activity: any, index: number) => {
						return (
							<tr key={index} className='table-row flex'>
								<td
									className='table-activity-img--wrapper'
									style={{
										backgroundColor: activityColorMapper[activity.name]
									}}
								>
									<img
										src={activityImgMapper[activity.name]}
										alt='activity-image'
										className='table-activity-img'
									/>
								</td>
								<td className='activity-name-date'>
									<p className='activity-name'>{activity.name}</p>
									<p className='activity-date'> {activity.date}</p>
								</td>
								<td className='table-data flex align-items--center'>{activity.duration} min</td>
								<td className='table-data flex align-items--center'>
									<div
										className='calory-wrapper'
										style={{
											backgroundColor: activityColorMapper[activity.name]
										}}
									>
										<img src={CaloryBurn} alt='calories burn' className='calories-burn' />
									</div>
									{activity.calories_burned}
								</td>
								<td className='table-data flex align-items--center'>
									<HeartRate className='heart-svg' /> {activity.heart_rate.average}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Activities;
