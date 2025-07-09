import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
;

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
          <div>
            <button
              onClick={handleLogout}
            >
              Sign out
            </button>
          </div>
  );
};

export default Dashboard;