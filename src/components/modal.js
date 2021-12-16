import React, { useContext } from 'react'
import { StateContext, DispatchContext } from '../TaskManager'

function Modal() {

    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    return (
        <div className='modal-div'>
            <section>

                <div className='modal-inputs'>
                    <label htmlFor="taskname" className='label-taskname'>
                        Task Name:
                    </label><br />
                    <input type="text"
                        id='taskname'
                        placeholder='Put Your Task'
                        value={state.entries.input}
                        onChange={(e) => {
                            dispatch({
                                type: "SET_ENTRIES",
                                payload: { ...state.entries, input: e.target.value }
                            })
                        }}
                        required />
                    <br /><br />

                    <label htmlFor="Status" className='label-status'>
                        Status
                    </label><br />
                    <select name="status" id="status" value={state.entries.selected ? "1" : ""} onChange={(e) => {
                        dispatch({
                            type: "SET_ENTRIES",
                            payload: { ...state.entries, selected: Boolean(e.target.value) }
                        })
                    }}>

                        <option value="1">DONE</option>
                        <option value="">NOT DONE</option>
                    </select>
                </div>

                <div className='modal-buttons'>
                    <button onClick={() => {
                        state.modalSignal.message === "add item" ?
                            state.entries.input ?
                                dispatch({ type: 'ADD_ITEM' })
                                :
                                dispatch({ type: 'CLOSE_MODAL' })
                            :
                            dispatch({ type: "EDIT_TASK" })

                        dispatch({ type: 'CLOSE_MODAL' })
                    }}>
                        {state.modalSignal.message}
                    </button>
                    <button onClick={() => {
                        dispatch({ type: 'CLOSE_MODAL' })
                    }}>Close</button>
                </div>

            </section>
        </div>
    )
}

export default Modal
