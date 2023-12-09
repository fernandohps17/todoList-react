import { useEffect, useReducer } from "react"
import { todoReducer } from "../todoReducer"

export const useTodo = () => {

    const initialState = []

    // Funcion para obtener el localStorage
    const init = () => {
        return JSON.parse()
        // minuto 33 segundo 18
    }

    const [state, dispatch] = useReducer(todoReducer, initialState, init)

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
            type: "CompleteTodo",
            payload: id
        }
        dispatch(action)
    }

    // Funcion para actualizar un Todo
    const handleUpdateTodo = (id, description) => {
        const action = {
            type: "UpdateTodo",
            payload: {
                id,
                description
            }
        }
        dispatch(action)
    }

    return {
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo
    }
}