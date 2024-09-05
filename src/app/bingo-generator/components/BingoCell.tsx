interface BingoCellProps {
  size: number;
  value?: number;
  isLastRow: boolean;
  isLastCol: boolean;
}

export default function BingoCell({
  size,
  value,
  isLastRow,
  isLastCol,
}: BingoCellProps) {
  return (
    <div
      className={`flex items-center justify-center text-xl border-black ${
        isLastRow ? '' : 'border-b'
      } ${isLastCol ? '' : 'border-r'}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {value}
    </div>
  );
}
