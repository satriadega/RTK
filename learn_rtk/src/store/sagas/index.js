/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable require-yield */
import { take } from "redux-saga/effects";
import { addBook } from "../actions/booksActions";

export default function* () {
    yield take(addBook.toString());
    console.log("I am the root saga");
}
