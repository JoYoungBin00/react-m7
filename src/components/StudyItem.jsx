import { memo } from "react";

function StudyItem({ item, isFavorite, isSelected, onSelect, onToggleFavorite }) {
  console.log(`${item.title} 렌더링`);

  return (
    <article className={isSelected ? "active" : ""} onClick={() => onSelect(item.id)}>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <p>
        분류: {item.category} / 난이도: {item.level}
      </p>
      {isSelected && <p>선택된 항목입니다</p>}
      <button
        onClick={e => {
          e.stopPropagation();
          onToggleFavorite(item.id);
        }}
      >
        {isFavorite ? "★ 즐겨찾기 해제" : "☆ 즐겨찾기"}
      </button>
    </article>
  );
}

export default memo(StudyItem);
