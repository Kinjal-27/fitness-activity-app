import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'hoc/layout/layout';
import Dashboard from 'features/dashboard/dashboard';
import ActivitiesList from 'features/activities/container/activitiesList';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/activity/:id' element={<ActivitiesList />} />
			</Routes>
		</Layout>
	);
};

export default App;
