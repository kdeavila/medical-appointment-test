import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../store/useAuth';

export function PrivateRoutes() {
	const { patient } = useAuth();

	return patient ? <Outlet /> : <Navigate to={'/'} />;
}
