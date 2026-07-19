import StudyItem from "./StudyItem";

export default function StudyList({ items, selectedId, favoriteIds, onSelect, onToggleFavorite }) {
  return (
    <>
      <h2>학습 목록</h2>
      {items.length === 0 ? (
        <p>조건에 맞는 학습 항목이 없습니다.</p>
      ) : (
        <section>
          {items.map(item => (
            <StudyItem
              key={item.id}
              item={item}
              isSelected={item.id === selectedId}
              isFavorite={favoriteIds.includes(item.id)}
              onSelect={onSelect}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </section>
      )}
    </>
  );
}
