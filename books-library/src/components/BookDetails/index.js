import { useParams } from "react-router-dom";
import {jsonBooksData} from "../JsonBooksData"
import "./index.css";

const BookDetails = () => {
    
    const {id} = useParams()
    const book = jsonBooksData.find((book) => book.id == parseInt(id));
    const {title, thumbnailUrl, longDescription, authors} = book

    return (
        <div className="details-bg-container">
            <div className="details-container">
             <img src={thumbnailUrl} className="book-image" alt={title}/>
             <h1 className="book-title">{title}</h1>
             <p className="book-author">Author : <span className="author-name">{authors}</span></p>
             <p className="book-des">{longDescription}</p>
             </div>
        </div>
    )

}
export default BookDetails
