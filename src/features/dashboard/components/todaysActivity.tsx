import React, { FC } from 'react';
import TodayActivityImg from 'assets/images/fitness-img.jpeg';

interface ITodayActivityProps {
	activity_name: string;
	duration: string;
}

const TodayActivity = ({ todayActivityData }: any) => {
	return (
		<div className='flex flex--column ml--45'>
			<h5 className='overview-title mb--10'>Today's Activity</h5>
			<div className='flex todays-activity-wrapper'>
				<div className='today-img-wrapper'>
					<img src={TodayActivityImg} alt='today-activity' className='img' />
					<div className='banner' />
				</div>
				<div>
					<ul className='overview-list--wrapper'>
						{todayActivityData.map((activity: any, index: number) => {
							return (
								<div className='flex flex--column mb--20'>
									<li className={`flex list list${index + 1}`}>
										<div className='list-title'>{activity.activity_name}</div>
									</li>
									<div className='flex'>
										<p className='health-percentage ml--10'>{activity.duration}</p>
									</div>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TodayActivity;
