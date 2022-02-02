import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/index.js'
import ContextGlobal from './contextGlobal.js'

export default function App(){
    return(
        <ContextGlobal>
            <BrowserRouter> 
                <Routes>
                    <Route path='/' exact={true} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </ContextGlobal>
    )
}