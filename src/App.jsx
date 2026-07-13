import "./App.css";
import reactData from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import StudyList from "./components/StudyList";
import { useState } from "react";


function App() {
  console.log(reactData);
  const m2Content = reactData[0];
  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");


  const onSelect = _id => {
    setSelectedId(_id);
  };


  const filteredData = reactData.filter(item => {
    const categoryMatch = category === "all" || category === item.category;
    const keyWordMatch = item.title.toLowerCase().includes(keyword.toLowerCase());
    return categoryMatch && keyWordMatch;
  });
  console.log(filteredData);
  return (
    <>
      <h1>React Mission 7</h1>
      <p>전체 학습 항목수 : {reactData.length}개</p>
      <hr />
      <StudyInfo title={m2Content.title} desc={m2Content.desc} category={m2Content.category} />
      <hr />
      <h2>필터</h2>
      <div className="filters">
        <button
          onClick={() => {
            setCategory("all");
          }}
        >
          all
        </button>
        <button
          onClick={() => {
            setCategory("concept");
          }}
        >
          concept
        </button>
        <button
          onClick={() => {
            setCategory("library");
          }}
        >
          library
        </button>
        <button
          onClick={() => {
            setCategory("hook");
          }}
        >
          hook
        </button>
      </div>
      <hr />
      <h2>검색</h2>
      <input
        type="text"
        value={keyword}
        onChange={e => {
          setKeyword(e.target.value);
        }}
      />
      <hr />
      <StudyList items={filteredData} onSelect={onSelect} selectedId={selectedId} />
    </>
  );
}


export default App;
