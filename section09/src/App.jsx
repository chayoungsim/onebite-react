
import './App.css'
import { useReducer } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData =[
    {
        id:0,
        isDone:false,
        content:'React 공부하기',
        date:new Date().getTime()
    },{
        id:1,
        isDone:true,
        content:'JS 공부하기',
        date:new Date().getTime()
    },{
        id:2,
        isDone:false,
        content:'CSS 공부하기',
        date:new Date().getTime()
    }
]

function reducer(state, action) {
    switch(action.type) {
        case "CREATE":
            return [...state, action.data];
        case "UPDATE":
            return state.map((todo) => todo.id === action.targetId ? {...todo, isDone: !todo.isDone} : todo)
        case "DELETE":
            return state.filter((todo) => todo.id !== action.targetId)
        default:
            return state;
    }           
}


function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  // 현재상태, 액션을 보내는 함수, state,action => newState 형태의 함수 , 초기 상태값

  const onCreate = (content) => {
    dispatch({
        type:"CREATE",
        data:{
            id:Date.now(),
            isDone:false,
            content:content,
            date:new Date().getTime()
        }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
        type:"UPDATE",
        targetId:targetId    
    })
  }

  
 const onDelete = (targetId) => {
    dispatch({
        type:"DELETE",
        targetId:targetId     
    })
 }


  return (
    <div className="App">      
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
