import { Route, Routes } from 'react-router';
import { PrivateRoutes } from './libs/PrivateRoutes';
import { RestrictedRoutes } from './libs/RestrictedRoutes';
import { Home } from './routes/Home';
import { LandingPage } from './routes/LandingPage';
import { Login } from './routes/Login';
import { NotFound } from './routes/NotFound';

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

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
