import { Route, Routes } from 'react-router';
import { LandingPage } from './routes/LandingPage';
import { Login } from './routes/Login';

function App() {
	return (
		<Routes>
			<Route index element={<LandingPage />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
