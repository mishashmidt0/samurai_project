import './App.css';
import Conteiner from './components/conteiner/Conteiner';
import React from 'react';
import {HeaderContainerApi} from "./components/header/HeaderContainer";


export type forProps = {
    // state: forState;
    // dispatch: ( action: forAction ) => void;
}

export function App(props: forProps) {
    return (<div className="wrapper">
            <HeaderContainerApi/>
            <Conteiner
            />
        </div>

    );
}
