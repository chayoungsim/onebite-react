import {useState} from "react";

import TodoItem from "./TodoItem";

const List = ({todos,onUpdate, onDelete}) => {


    const [search, setSearch] = useState('')

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if(search==="") {
            return todos;
        }
        return todos.filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase())
        })
    }
    const filteredTodos = getFilteredData();

    return(
        <div className="list">
            <h4>Todo List 🌱</h4>
            <div className="searchBox">
                <input placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch} />
            </div>
            <div className="todoItems">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                })}                 
            </div>
        </div>
    )
}

export default List;