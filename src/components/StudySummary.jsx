export default function StudySummary({ summary, renderCount }) {
  return (
    <div className="summary">
      <p>전체 항목: {summary.total}개</p>
      <p>현재 표시: {summary.visible}개</p>
      <p>즐겨찾기: {summary.favorite}개</p>
      <p>App 렌더링 횟수: {renderCount}회</p>
    </div>
  );
}
