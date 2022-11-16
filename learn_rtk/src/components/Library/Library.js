import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../store/slices/bookSlice";

const Library = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);

    const deleteBookHandler = (id) => {
        // dispatch the deleteBook action
        dispatch(deleteBook({ id: id }));
    };

    const booksTable = books.map((book, id) => (
        <tr key={id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.rating}</td>
            <td>
                <button
                    className="delete"
                    onClick={() => deleteBookHandler(book.id)}
                >
                    x
                </button>
            </td>
        </tr>
    ));
    return (
        <div className="library">
            <h2>Library</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{booksTable}</tbody>
            </table>
        </div>
    );
};

export default Library;
