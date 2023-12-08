// Import COMPONENTS
import { TodoUpdate } from '../TodoUpdate';

// Import ICONS
import { FaTrash } from 'react-icons/fa';

export const TodoItem = () => {

    return (
        <li>
            <span>
                <label htmlFor="" className="container-done"></label>
            </span>
            <TodoUpdate />
            <button className="btn-delete"><FaTrash /></button>
        </li>
    )

}