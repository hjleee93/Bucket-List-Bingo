'use client'

interface ListItemProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  icon?: string;
};

export default function ListItem({ label, onClick, icon }: ListItemProps) {

  return (
    <div onClick={onClick} className="border-b ">
      <div className="mx-5 flex flex-row justify-between items-center h-[80px]">
      <p>{label}</p>
      {icon &&
      <span className="material-symbols-outlined">
{icon}
</span>
}
</div>
    </div>
  );
}