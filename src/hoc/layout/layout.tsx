import { PropsWithChildren, useState } from 'react';
import SideNav from 'shared/components/sidenav/sidenav';
import TopHeader from 'shared/components/topHeader/topHeader';
import activityData from 'assets/JSONDATA/fitnessActivity.json';

const Layout: React.FC<PropsWithChildren> = (props) => {
	const [fitnessActivityData, setFitnessActivityData] = useState(activityData);
	return (
		<div id='wrapper' className='flex'>
			<SideNav />
			<div id='page-wrapper' className='full--width'>
				<TopHeader user={fitnessActivityData.user.name} />
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
