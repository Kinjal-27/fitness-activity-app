import Profile from 'assets/images/avatar.png';

interface ITopHeaderProps {
	user: string;
}
const TopHeader = ({ user }: ITopHeaderProps) => {
	const date = new Date().toLocaleString('en-us', { month: 'short', year: 'numeric', day: '2-digit' }) + '';

	return (
		<div className='topheader-wrapper flex-space-between'>
			<div className='width--full flex height--full'>
				<div className='header-title'>FITNESS ACTIVITY</div>
				<div className='profile-wrapper flex justify-content--end align-items--center'>
					<div>
						<p className='font-size--xxs date mb--5'>{date}</p>
						<p className='avatar-name mr--10 font-size--md'>Good day, {user.split(' ')[0]}!</p>
					</div>
					<img src={Profile} alt='profile' className='avatar-img' />
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
