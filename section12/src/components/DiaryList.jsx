import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css"

const DiaryList = ({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest")

    const onChangeSortType = (e) => {
        setSortType(e.target.value)
    }

    const getSortedData = () => {
        return data.toSorted((a,b) => {
            if(sortType === "latest") {
                return b.createdDate - a.createdDate;
            } else {
                return a.createdDate - b.createdDate;
            }
        })
    }

    const sortedData = getSortedData();


  return (
    <div className="DiaryList">
      <div class="menu_bar">
        <select onChange={onChangeSortType} value={sortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button 
            onClick={() => nav("/new")}
            text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>
      <div class="list_wrapper">
        {sortedData.map((item) => (
            <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
