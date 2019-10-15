import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import Routes from './routes';
import Navbar from './components/Navbar';
import { IconContext } from "react-icons";

//element where we'll mount our react app
const rootElement = document.getElementById("app");

const App = () => <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Router>
            <IconContext.Provider value={{ color: "black", className: "app-icons" }}>
                <Navbar>
                    <Routes />
                </Navbar>
            </IconContext.Provider>
        </Router>
    </PersistGate>
</Provider>;

//we render our app over rootElement
ReactDOM.render(<App />, rootElement);