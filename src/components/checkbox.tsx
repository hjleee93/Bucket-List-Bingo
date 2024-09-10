'use client'

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: (event:  React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function Checkbox({ label, checked = false, onChange, disabled = false } : CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }
  
  return (
    <span>
      <input type="checkbox" className="accent-main-active" checked={checked} onChange={handleChange}/>
    </span>

  );
}