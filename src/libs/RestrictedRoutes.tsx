import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../store/useAuth';

export function RestrictedRoutes() {
	const { isAuthenticated } = useAuth();

	return isAuthenticated ? <Navigate to={'/home'} /> : <Outlet />;
}
