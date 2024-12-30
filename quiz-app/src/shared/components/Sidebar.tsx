import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPersonCircleQuestion, faQuestion, faUser, faUserShield} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="w-48 border-r border-slate-300 *:text-left ">
            <nav>
                <div className="sidebar-title text-2xl font-semibold p-3 border border-gray-300">Menu</div>
                <ul>
                    <li>
                        <Link className="block p-3 hover:bg-blue-700 hover:text-white border border-gray-300" to="/management/dashboard">
                            <FontAwesomeIcon icon={faPersonCircleQuestion} /> Quick Management</Link>
                    </li>
                    <li>
                        <Link className="block p-3 hover:bg-blue-700 hover:text-white border border-gray-300" to="/management/dashboard">
                            <FontAwesomeIcon icon={faQuestion} /> Question Management</Link>
                    </li>
                    <li>
                        <Link className="block p-3 hover:bg-blue-700 hover:text-white border border-gray-300" to="/management/dashboard">
                            <FontAwesomeIcon icon={faUser} /> User Management</Link>
                    </li>
                    <li>
                        <Link className="block p-3 hover:bg-blue-700 hover:text-white border border-gray-300" to="/management/dashboard">
                            <FontAwesomeIcon icon={faUserShield} /> Role Management</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;