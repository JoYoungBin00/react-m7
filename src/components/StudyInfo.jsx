export default function StudyInfo({title, desc, category}) {
  return(
    <article>
      <h2>h2 첫번째 데이터 출력</h2>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>분류:{category}</p>
    </article>
  );
}