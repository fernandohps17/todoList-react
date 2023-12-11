import { useEffect, useReducer } from "react"
import { todoReducer } from "../todoReducer"

export const useTodo = () => {

    const initialState = []

    // Funcion para obtener el localStorage
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const todosCount = todos.length
    const pendingTodosCount = todos.filter(todo => !todo.done).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // Funcion para agregar un Todo
    const handleNewTodo = todo => {
        const action = {
            type: "Add Todo",
            payload: todo,
        }
        dispatch(action)
    }

    // Funcion para eliminar un Todo
    const handleDeleteTodo = id => {
        const action = {
            type: "Delete Todo",
            payload: id
        }
        dispatch(action)
    }

    // Funcion para completar un Todo
    const handleCompleteTodo = id => {
        const action = {
            type: "Complete Todo",
            payload: id
        }
        dispatch(action)
    }

    // Funcion para actualizar un Todo
    const handleUpdateTodo = (id, description) => {
        const action = {
            type: "Update Todo",
            payload: {
                id,
                description
            }
        }
        dispatch(action)
    }

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }
}