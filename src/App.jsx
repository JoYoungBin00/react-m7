import "./App.css";
import reactData from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import StudyList from "./components/StudyList";
import CategoryFilter from "./components/CategoryFilter";
import SearchForm from "./components/SearchForm";
import StudySummary from "./components/StudySummary";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";

const CATEGORY_OPTIONS = [
  { value: "all", label: "전체" },
  { value: "concept", label: "concept" },
  { value: "library", label: "library" },
  { value: "hook", label: "hook" },
];

const LEVEL_OPTIONS = [
  { value: "all", label: "전체 난이도" },
  { value: "basic", label: "basic" },
  { value: "intermediate", label: "intermediate" },
];

function App() {
  const m2Content = reactData[0];

  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const searchInputRef = useRef(null);
  const renderCount = useRef(0);
  renderCount.current += 1;

  const onSelect = _id => {
    setSelectedId(_id);
  };

  const handleToggleFavorite = useCallback(id => {
    setFavoriteIds(prev => (prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]));
  }, []);

  const handleToggleFavoriteOnly = () => {
    setFavoriteOnly(prev => !prev);
  };

  const handleReset = () => {
    setKeyword("");
    setCategory("all");
    setLevel("all");
    setFavoriteOnly(false);
    searchInputRef.current.focus();
  };

  const handleFocusSearch = () => {
    searchInputRef.current.focus();
  };

  const filteredData = useMemo(() => {
    return reactData.filter(item => {
      const keywordMatch = item.title.toLowerCase().includes(keyword.toLowerCase());
      const categoryMatch = category === "all" || category === item.category;
      const levelMatch = level === "all" || level === item.level;
      const favoriteMatch = !favoriteOnly || favoriteIds.includes(item.id);
      return keywordMatch && categoryMatch && levelMatch && favoriteMatch;
    });
  }, [keyword, category, level, favoriteOnly, favoriteIds]);

  const summary = useMemo(() => {
    return {
      total: reactData.length,
      visible: filteredData.length,
      favorite: favoriteIds.length,
    };
  }, [filteredData, favoriteIds]);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <>
      <h1>React Basic Review Mission 8</h1>
      <p>React Hooks 학습 목록 관리</p>
      <hr />
      <StudyInfo title={m2Content.title} desc={m2Content.desc} category={m2Content.category} />
      <hr />
      <SearchForm
        keyword={keyword}
        searchInputRef={searchInputRef}
        onKeywordChange={setKeyword}
        onFocusSearch={handleFocusSearch}
        onReset={handleReset}
      />
      <hr />
      <h2>필터</h2>
      <CategoryFilter label="카테고리" options={CATEGORY_OPTIONS} selected={category} onSelect={setCategory}>
        <button className={favoriteOnly ? "active" : ""} onClick={handleToggleFavoriteOnly}>
          {favoriteOnly ? "전체 항목 보기" : "즐겨찾기만 보기"}
        </button>
      </CategoryFilter>
      <CategoryFilter label="난이도" options={LEVEL_OPTIONS} selected={level} onSelect={setLevel} />
      <hr />
      <StudySummary summary={summary} renderCount={renderCount.current} />
      <hr />
      <StudyList
        items={filteredData}
        selectedId={selectedId}
        favoriteIds={favoriteIds}
        onSelect={onSelect}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}

export default App;
