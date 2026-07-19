export default function SearchForm({ keyword, searchInputRef, onKeywordChange, onFocusSearch, onReset }) {
  return (
    <div className="search-form">
      <input
        ref={searchInputRef}
        type="text"
        value={keyword}
        onChange={e => onKeywordChange(e.target.value)}
        placeholder="학습 항목 검색"
      />
      <button onClick={onFocusSearch}>검색창으로 이동</button>
      <button onClick={onReset}>초기화</button>
    </div>
  );
}
