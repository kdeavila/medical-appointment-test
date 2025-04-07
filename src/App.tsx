import { Route, Routes } from 'react-router';
import { LandingPage } from './routes/LandingPage';
import { Login } from './routes/Login';
import { Home } from './routes/Home';
import { PrivateRoutes } from './libs/PrivateRoutes';
import { RestrictedRoutes } from './libs/RestrictedRoutes';

function App() {
	return (
		<Routes>
			<Route index element={<LandingPage />} />

			<Route element={<RestrictedRoutes />}>
				<Route path="/login" element={<Login />} />
			</Route>

			<Route element={<PrivateRoutes />}>
				<Route path="/home" element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
