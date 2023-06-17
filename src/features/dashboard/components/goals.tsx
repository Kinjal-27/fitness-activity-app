import React from 'react';
import Running from 'assets/images/running.png';
import Swimming from 'assets/images/swimming.png';

const Goals = ({ fitnessGoalsData }: Record<string, any>) => {
	interface IActvityMapper {
		[key: string]: string;
	}

	const activityColorMapper: IActvityMapper = {
		Running: '#87c285',
		Swimming: '#fad578'
	};

	const activityImgMapper: IActvityMapper = {
		Running: Running,
		Swimming: Swimming
	};
	return (
		<div className='ml--30 goals-wrapper'>
			<h5 className='overview-title mb--35'>Fitness Goals</h5>
			{fitnessGoalsData.map((goalActivity: any, index: number) => {
				return (
					<div key={index} className='card-wrapper mb--35'>
						<div className='flex flex--column'>
							<div
								className={`activity-img--wrapper`}
								style={{
									backgroundColor: activityColorMapper[goalActivity.activity]
								}}
							>
								<img
									src={activityImgMapper[goalActivity.activity]}
									alt='run-img'
									className='activity-img'
								/>
							</div>
							<div className='goal-title-description mb--15'>
								<p className='text--white'>{goalActivity.activity}</p>
								<p
									className='ml--20 font--medium'
									style={{ color: activityColorMapper[goalActivity.activity] }}
								>
									{goalActivity.duration}
								</p>
							</div>
							<p className='text--gray mr--30 font-size--sm'>{goalActivity.goal}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Goals;
