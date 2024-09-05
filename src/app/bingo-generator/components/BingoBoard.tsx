import BingoCell from "./BingoCell";

interface BingoBoardProps {
  gridCount: number;
  gridSize: number;
}

export default function BingoBoard({ gridCount, gridSize }: BingoBoardProps) {
  //배열 생성
  const bingoValues = Array.from({ length: gridCount }, (_, row) =>
    Array.from({ length: gridCount }, (_, col) => row * gridCount + col + 1)
  );

  return (
    <div
      className={`grid border border-black`}
      style={{
        gridTemplateColumns: `repeat(${gridCount}, 1fr)`, // 동적 grid size 설정
        width: `${gridSize * gridCount}px`, // 동적으로 전체 크기 설정
      }}
    >
      {bingoValues.flat().map((value, index) => {
        const row = Math.floor(index / gridCount);
        const col = index % gridCount;
        const isLastRow = row === gridCount - 1;
        const isLastCol = col === gridCount - 1;

        return (
          <BingoCell
            key={index}
            size={gridSize}
            isLastRow={isLastRow}
            isLastCol={isLastCol}
          />
        );
      })}
    </div>
  );
}
