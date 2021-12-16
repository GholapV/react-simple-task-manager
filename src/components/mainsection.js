import React, { useContext } from 'react'
import { StateContext, DispatchContext } from '../TaskManager'
import TaskPanel from './taskpanel';

function MainSection() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    return (
        <>
            <div className='main-div'>
                {
                    !state.tasks.length &&
                    <div className='empty-section'>
                        add tasks
                    </div>
                }

                {state.tasks.length ? <TaskPanel /> : null}

                <div className="button-div">
                    <button className='add' onClick={() => {
                        dispatch({ type: 'OPEN_MODAL_ADD', payload: "add item" })
                    }}>Add</button>
                    {
                        state.tasks.length ?
                            <button className='clear-all' onClick={() => {
                                dispatch({ type: 'CLEAR_ALL_TASKS' })
                            }}>
                                clear all
                            </button> :
                            null
                    }
                </div>
            </div>
        </>
    )
}

export default MainSection
