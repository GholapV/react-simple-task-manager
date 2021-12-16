import React, { useContext } from 'react'
import { DispatchContext, StateContext } from '../TaskManager'

function TaskPanel() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext)

    return (
        <section className='main-section'>

            {state.tasks.map((task) => {
                return (
                    <div
                        className={task.status ? "taskdiv done" : "taskdiv notdone"}
                        key={task.id}
                    >

                        <section>
                            <p className='taskname'>{task.taskName}</p>
                            <p className="taskday">{task.date}</p>
                        </section>
                        <section className='icon-section'>
                            <i className="far fa-edit" onClick={() => {
                                dispatch({
                                    type: "OPEN_MODAL_EDIT",
                                    payload: { msg: "edit item", id: task.id }
                                })
                            }}></i>
                            <i className="fas fa-minus-circle" onClick={() => {
                                dispatch({ type: "REMOVE_TASK", payload: task.id })
                            }}></i>
                        </section>
                    </div>
                )
            })}
        </section>
    )
}

export default TaskPanel
