export default function StudyList({ items, selectedId, onSelect }) {
  console.log(items);


  return (
    <>
      <h2>학습 목록</h2>
      <section>
        {items.map(item => (
          <article
            key={item.id}
            className={item.id === selectedId ? "active" : ""}
            onClick={() => {
              onSelect(item.id);
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <p>분류: {item.category}</p>
            {item.id === selectedId && <p>선택된 항목입니다</p>}
          </article>
        ))}
      </section>
    </>
  );
}
