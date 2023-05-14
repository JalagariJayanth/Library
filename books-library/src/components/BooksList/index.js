import {Link} from "react-router-dom";
import "./index.css"
import { useState } from "react";

const BooksList = (props) => {
    const {dataOfBooks} = props
    const [filterData, setFilterData] = useState(dataOfBooks);
  const getUserInputValue = (event) => {
    const filteredData = dataOfBooks.filter((each) =>
      each.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilterData(filteredData);
  };

    return (
        <div className="books-bg-container">
            <input type="text" placeholder="Search a book" className="user-input" onChange={getUserInputValue}/>
             <ul className="books-container">
                {filterData.map ((each,id) => (
                    <Link className="link" to={`/bookslist/${each.id}`} key={id}>
                    <div className="book-card">
                        <img src={each.thumbnailUrl} className="img" alt={each.title} />
                        <h1 className="book-title">{each.title}</h1>
                        <p className="book-author">{each.author}</p>
                    </div>
                    </Link>
                ))}
             </ul>
        </div>
    )

}
export default BooksList