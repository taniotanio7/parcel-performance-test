import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBeksKDpUpxHmL0qa_BNoo_-cZWDpDk_p4",
  authDomain: "daj-kase.firebaseapp.com",
  databaseURL: "https://daj-kase.firebaseio.com",
  projectId: "daj-kase",
  storageBucket: "daj-kase.appspot.com",
  messagingSenderId: "88053698918",
  appId: "1:88053698918:web:c4aafa7268f1b0b0f2f8a7",
  measurementId: "G-B2SRJYR8VY"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
