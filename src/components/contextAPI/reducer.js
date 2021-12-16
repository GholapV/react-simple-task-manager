function trueDate() {
    let splitted = Date().split(':')[0]
    let crudeDate = splitted.split(" ")
    crudeDate.pop()

    return crudeDate.join(" ");
}

export const initialState = {
    tasks: [
        { id: 1, taskName: "Laundry", date: trueDate(), status: false },
        { id: 2, taskName: "Grocery", date: trueDate(), status: false },
        { id: 3, taskName: "Car Washing", date: trueDate(), status: false }
    ],
    modalSignal: { flag: false, message: "" },
    editId: null,
    entries: { input: "", selected: false }
}

export const reducer = (state, action) => {

    switch (action.type) {
        case "OPEN_MODAL_ADD":
            return { ...state, modalSignal: { flag: true, message: action.payload } }

        case "OPEN_MODAL_EDIT":
            let target = state.tasks.find((task) => task.id === action.payload.id)
            return {
                ...state,
                modalSignal: { flag: true, message: action.payload.msg },
                entries: { input: target.taskName, selected: target.status },
                editId: action.payload.id
            }

        case "CLOSE_MODAL":
            return {
                ...state,
                modalSignal: { flag: false, message: "" },
                entries: { input: "", selected: false }
            }

        case "CLEAR_ALL_TASKS":
            return { ...state, tasks: [] }

        case "ADD_ITEM":
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: state.tasks.length + 1,
                    taskName: state.entries.input,
                    date: trueDate(),
                    status: state.entries.selected
                }],
                entries: { input: "", selected: false }
            }

        case "REMOVE_TASK":
            let newTasks = state.tasks.filter(task => task.id !== action.payload)
            return { ...state, tasks: newTasks }

        case "EDIT_TASK":
            let editedTasks = state.tasks.map(task => {
                if (task.id === state.editId) {
                    let editedtask = {
                        ...task,
                        taskName: state.entries.input,
                        date: trueDate(),
                        status: state.entries.selected
                    }
                    return editedtask;
                }
                return task;
            })
            return { ...state, tasks: editedTasks, entries: { input: "", selected: false } }

        case "SET_ENTRIES":
            console.log(action.payload);
            return { ...state, entries: action.payload }

        default:
            return state;
    }

}
