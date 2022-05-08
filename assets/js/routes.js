import React, {useState} from 'react';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import App from "./Page/App";
import Original from "./Page/Materiel/Original";
import DetailMateriel from "./Page/Materiel/DetailMateriel";
import Panier from "./Page/Panier";
import Login from "./Page/Login";
import {RequireAuth} from 'react-auth-kit'
import Menu from "./Page/Menu";
import TemplateOut from "./Page/TemplateOut";
import Template from "./Page/Template";
import Profile from "./Page/Profile";


const RouteApp = () => {
    const [token, setToken] = useState([]);
    let params = useParams();
    return (
        <BrowserRouter>
            <Routes>

                <Route path={"/*"} element={<App/>}/>
                <Route path="materiel" element={<TemplateOut/>}>
                    <Route path={"original"} element={<Original/>}/>
                    <Route path={":id"} element={<DetailMateriel/>}/>

                </Route>
                <Route path="login" element={<Template content={<Login token={token} setToken={setToken}/>}/>}/>
                <Route path="menu" element={<Template content={<Menu/>}/>}/>
                <Route path={"panier"}
                       element={
                           <RequireAuth loginPath={'login'}>
                               <Panier token={token} setToken={setToken}/>
                           </RequireAuth>
                       }/>
                <Route path={"/profile"} element={<Template content={<Profile/>}/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default RouteApp;
