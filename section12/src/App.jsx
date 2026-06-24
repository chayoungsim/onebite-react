import "./App.css";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Edit from "./pages/Edit.jsx";
import Notfound from "./pages/Notfound.jsx";

const mockData = [
    {
        id:1,
        createDate : new Date().getTime(),
        emotionId:1,
        content:"1번 일기"
    },
    {
        id:2,
        createDate : new Date().getTime(),
        emotionId:2,
        content:"2번 일기"
    }
]


function reducer(state, action) {
  return state;
}



function App() {

    const [data, dispatch] = useReducer(reducer, mockData)

  return (
    <>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
