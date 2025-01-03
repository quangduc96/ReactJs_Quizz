import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col p-4 bg-white-500 text-black border-t border-grey-500">
      <div className="flex mb-4">
        <div className="flex flex-col w-1/2 ">
          <div className="flex ">
            <p className="brand inline-block text-2xl justify-start items-center">
              <img src={logo} alt="Logo" className="inline-block h-14 mr-2" />
              Quizzes
            </p>
          </div>
          <div className="flex  ">
            <p className="flex-wrap justify-start items-center">
              Quizzes is a platform for creating and managing quizzes
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-start w-1/2">
          <div className="flex flex-col w-1/2">
            <p className="text-xl font-semibold">Menu</p>
            <nav>
              <ul className="nav-menu flex-col text-blue-400 ">
                <li className="nav-item">
                  <Link to="/" className="nav-link block">Home</Link>
                </li><li className="nav-item">
                  <Link to="/quizzes" className="nav-link block">Quizzes</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link block">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link block">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-xl font-semibold">Contact</p>
            <ul className="flex flex-col">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Mail: example@example.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Phone: +1-234-567-890
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Location: 123 Example St, City,
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-t border-grey-300 p-4">
        <p className="text-right">&copy; Duc Nguyen {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
