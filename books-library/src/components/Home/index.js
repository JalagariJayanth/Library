import "./index.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return(
        <div className="home-bg-container">
            
            <button
        className="btn"
        onClick={() => {
          navigate("/bookslist");
        }}
      >
        See Books List
      </button>
        </div>
    )

}
export default Home