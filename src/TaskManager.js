import React, { createContext, useReducer } from 'react'
import MainSection from './components/mainsection';
import Modal from './components/modal';
import { reducer, initialState } from './components/contextAPI/reducer'

export const StateContext = createContext();
export const DispatchContext = createContext();

function TaskManager() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <div className='background-div'></div>
                <header>
                    <h2>Simple Task Manager</h2>
                    <i className="fas fa-tasks"></i>
                </header>
                <MainSection />
                {state.modalSignal.flag ? <Modal /> : null}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export default TaskManager
