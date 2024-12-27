import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import logo from '../../assets/logo.png';

function Header() {
    const { isAuthenticated, logout } = useAuth();

    const onLogout = () => {
        logout();
    }
    return (
        <header className="flex justify-between items-center px-4 bg-white-500 text-black border-b border-grey-500">
            <Link to="/" className="brand block text-2xl "><img src={logo} alt="Logo" className="inline-block h-14 mr-2" />Quizzes</Link>
            <nav>
                <ul className="nav-menu flex justify-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link block p-4 hover:bg-blue-700">Home</Link>
                    </li><li className="nav-item">
                        <Link to="/management/dashboard" className="nav-link block p-4 hover:bg-blue-700">Quizzes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link block p-4 hover:bg-blue-700">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link block p-4 hover:bg-blue-700">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="profile-menu">
                {isAuthenticated ? (
                    <ul className="nav-menu flex justify-center">
                        <li className="nav-item">
                            <Link to="/auth/profile" className="nav-link block p-4 hover:bg-blue-700">Welcome, Admin</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={onLogout} className="nav-link block p-4 hover:bg-blue-700">Logout</button>
                        </li>
                    </ul>
                ) : (
                    <ul className="nav-menu flex justify-center">
                        <li className="nav-item">
                            <Link to="/auth/login" className="nav-link block p-4 hover:bg-blue-700">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/auth/register" className="nav-link block p-4 hover:bg-blue-700">Register</Link>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
}

export default Header;