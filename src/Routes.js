import React from "react";
import { Route, Switch } from "react-router-dom";


import HomeAmizade from "./Pages/HomeAmizade";
import HomeConfianca from "./Pages/HomeConfiaca";
import HomeAmor from "./Pages/HomeAmor";
import HomeCoragem from "./Pages/HomeCoragem";
import HomeEsperanca from "./Pages/HomeEsperanca";
import HomeLuz from "./Pages/HomeLuz";
import HomeSabedoria from "./Pages/HomeSabedoria";
import HomeSemTema from "./Pages/HomeSemTema";
import HomeSinceridade from "./Pages/HomeSinceridade";
import Todos from "./Pages/Todos";

export default ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <HomeSemTema/>
            </Route>
            <Route exact path="/HomeConfianca">
                <HomeConfianca/>
            </Route>
            <Route exact path="/HomeAmor">
                <HomeAmor/>
            </Route>
            <Route exact path="/HomeAmizade">
                <HomeAmizade/>
            </Route>
            <Route exact path="/HomeCoragem">
                <HomeCoragem/>
            </Route>
            <Route exact path="/HomeEsperanca">
                <HomeEsperanca/>
            </Route>
            <Route exact path="/HomeLuz">
                <HomeLuz/>
            </Route>
            <Route exact path="/HomeSabedoria">
                <HomeSabedoria/>
            </Route>
            <Route exact path="/HomeSinceridade">
                <HomeSinceridade/>
            </Route>
            <Route exact path="/Todos">
                <Todos/>
            </Route>
        </Switch>
    );
}