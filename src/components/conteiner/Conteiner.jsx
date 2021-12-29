import Nav from '../navigation/Navigation';

import Profile from '../profile/Profile';
import Messsages from '../messsages/Messsages';

import NotFound from '../notfound/NotFound';

import s from './Conteiner.module.css';
import {Route, Routes} from 'react-router-dom';


function Conteiner() {
	return (
		<div className={s.conteiner}>
			<Nav/>
			<div className={s.conteiner}>
				<Routes>

					<Route path='/profile' element={<Profile/>}/>

					<Route path='/messages' element={<Messsages/>}/>
					<Route path='*' element={<NotFound/>}/>

				</Routes>
			</div>
		</div>

	)
}

export default Conteiner;