import {useState, useMemo, useContext} from "react";

import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () => {


    const todos = useContext(TodoStateContext)

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

  

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        console.log("getAnalyzedData 호출!!!")
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        }
    }, [todos])
  
    

    return (
        <div className="list">
            <h4>Todo List 🌱</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>not done: {notDoneCount}</div>
            </div>
            <div className="searchBox">
                <input placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch} />
            </div>
            <div className="todoItems">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />
                })}                 
            </div>
        </div>
    )
}

export default List;