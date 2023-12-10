import { TodoItem } from "../TodoItem"

export const TodoList = ({ todos, handleUpdateTodo, handleCompleteTodo, handleDeleteTodo }) => {

    return (
        <ul>
            {todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleUpdateTodo={handleUpdateTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCompleteTodo={handleCompleteTodo}
                />
            )}
        </ul>
    )

}