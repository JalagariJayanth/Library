import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import { useState } from "react";
import "./index.css"

const newbookdata={
    id: uuidv4(),
    title: "",
    authors: "",
    thumbnailUrl: "",
}

const AddBook = (props) => {
    const {updateDataOfBooks} = props
    const navigate = useNavigate()
    const [newData,updateNewData] = useState(newbookdata)

    const onChangeInput = (event) => {
        updateNewData({...newData,[event.target.name]: event.target.value,});
    }

    const onClickAddBook= () => {
        if ( 
            !newData.title.trim() || 
            !newData.authors.trim() || 
            !newData.thumbnailUrl.trim()
            ){
            alert("Please fill Valid Credentials")
        }else{
            updateDataOfBooks((prevData) => [...prevData,newData])
            navigate("/bookslist")
        }
       
    }


    return (
        <div className="form-container">
            <h1 className="heading">Add Book</h1>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input type="text" className="userinput" id="title" placeholder="Enter Title of the book" onChange={onChangeInput}/>
               
            </div>
            <div className="input-container">
                <label htmlFor="author">Author</label>
                <input type="text" className="userinput" id="author" placeholder="Enter Author Name" onChange={onChangeInput}/>
                
            </div>
            <div className="input-container">
                 <label htmlFor="url">ThumbnailUrl</label>
                 <input type="text" className="userinput" id="url" placeholder="Enter ThumbanilUrl" onChange={onChangeInput}/>
                
            </div>
            <button className="add-btn" onClick={onClickAddBook}>
                 Add
            </button>

        </div>
    )


}
export default AddBook