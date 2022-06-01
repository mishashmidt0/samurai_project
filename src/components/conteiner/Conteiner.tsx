import Nav from '../navigation/Navigation';
import NotFound from '../notfound/NotFound';

import s from './Conteiner.module.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {DialogsContainer} from "../messsages/DialogsContainer";
import {UsersContainer} from "../users/usersContainer";
import ProfileContainer from "../profile/ProfileContainer";


function Conteiner() {
    return (
        <div className={s.conteiner}>
            <Nav/>
            <div className={s.conteiner}>
                <Routes>
                    <Route path="/profile/:id" element={
                        <ProfileContainer/>
                    }/>
                    <Route path="/messages/*" element={
                        <DialogsContainer
                        />
                    }/>
                    <Route path="/users" element={
                        <UsersContainer/>
                    }/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default Conteiner;
