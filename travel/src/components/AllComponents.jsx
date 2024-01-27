import { useLocation, Route, Routes } from 'react-router-dom'
import { useReducer } from 'react'
import { globalContext, initialState } from '../state'
import { globalReducerFunction } from '../state/functions.js'
import Navigation from './Navigation'
import Main from './Main/Main'
import Excursion from './Excusion'

function AllComponents() {
    const location = useLocation()
    const [state, dispatch] = useReducer(globalReducerFunction, initialState)
    state.dispatch = dispatch
    return (
        <>
            <globalContext.Provider value={state}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Navigation />} >
                        <Route index element={<Main />} />
                        <Route path="/main" element={<Main />} />
                        <Route path="/excursion" element={<Excursion />} />
                        <Route path="/excursion#" element={<Excursion />} />
                    </Route>
                </Routes>
            </globalContext.Provider>
        </>
    );
}

export default AllComponents;