import "./index.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <ul className="header-container">
            <Link to="/" className="link">
                <li className="nav-item">Home</li>
            </Link>
            <Link to="/bookslist" className="link">
                <li className="nav-item">Books</li>
            </Link>
            <Link to="/addbook" className="link">
                <li className="nav-item">Add Book</li>
            </Link>
        </ul>

    )

}
export default Header