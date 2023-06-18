import { FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ActivityIcon, Dashboard, Logo, RunningMan, SideNavIcon } from '../icons/icons';
import LogoImg from 'assets/images/logo.png';

interface IIconProps {
	width?: string;
	height?: string;
	className?: string;
}

interface ISideNavOpt {
	SvgIcon: FC<IIconProps>;
	urlLink: string;
	title: string;
}

const SIDE_NAV_OPTIONS: ISideNavOpt[] = [
	{
		SvgIcon: Dashboard,
		urlLink: '',
		title: 'Home'
	},
	{
		SvgIcon: ActivityIcon,
		urlLink: '/activity/activity_1',
		title: 'Activity'
	}
];

const SideNav = () => {
	const [sidebarOpen, setSideBarOpen] = useState(false);
	const location = useLocation();
	const activeMenu = location.pathname.split('/')[1];

	return (
		<nav className='navbar-default' role='navigation'>
			<div className={`navbar-static-side bg--white d-flex flex-column full--height`}>
				<div className='title-logo pl--10 pt--15 pb--15 flex align-items--center'>
					<NavLink to='/dashboard'>
						<Logo />
						{/* <img src={LogoImg} alt='logo' width={60} /> */}
					</NavLink>
					{/* <p className='app-title'>FITNESS</p> */}
				</div>
				{/* <div className='collapse-icon' onClick={() => setSideBarOpen(!sidebarOpen)}>
					<SideNavIcon className='cursor-pointer sidenav-icon' />
				</div> */}
				<div className='cursor-pointer d-flex flex-column icons'>
					{SIDE_NAV_OPTIONS.map(({ SvgIcon, urlLink, title }: ISideNavOpt, index: number) => {
						return (
							<NavLink
								to={urlLink}
								key={index}
								className={`nav-link ${activeMenu === urlLink && 'active-menu'}`}
							>
								<div className='nav-link-content d-flex full--width align-items-center bg--twilight-blue '>
									<div>{<SvgIcon />}</div>
									<p className='menu-label font--18px hide no-margin'>{title}</p>
								</div>
							</NavLink>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default SideNav;
