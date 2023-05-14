import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import BooksList from "./components/BooksList"
import BookDetails from "./components/BookDetails"
import AddBook from "./components/AddBook"
import { jsonBooksData } from './components/JsonBooksData';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [dataOfBooks,updateDataOfBooks] = useState(jsonBooksData)

  return(
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/bookslist" element={<BooksList dataOfBooks={dataOfBooks} />}/>
    <Route exact path="/bookslist/:id" element={<BookDetails />} />
    <Route exact path="/addbook" element={<AddBook dataOfBooks={dataOfBooks} updateDataOfBooks={updateDataOfBooks} />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
