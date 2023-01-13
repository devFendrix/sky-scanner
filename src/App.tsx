import React from 'react';
import './App.css';
import { Menu } from "./component/Menu";
import { Outlet } from "react-router-dom";

if (localStorage.getItem("fav") === null || localStorage.getItem("fav") === undefined) {
    localStorage.setItem("fav", JSON.stringify({}));
}

const App = () => (
    <div className="App">
        <Menu links={[
            { text: "Recherche de vols", url: '/' },
            { text: "Recherche d'aéroports", url: '/airports' },
            { text: "Favoris", url: "/fav" }
        ]} />
        <Outlet />
    </div>
);

export default App;
