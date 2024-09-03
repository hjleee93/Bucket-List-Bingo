'use client'

type SwitchProps = {
  label?: string;
  checked: boolean;
  onChange: (event:  React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function Switch({label, checked = false, onChange, disabled = false} : SwitchProps) {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }

  return (
    <div>
      <label className="relative inline-block w-14 h-8">
        <input type="checkbox" checked={checked} className="opacity-0 w-0 h-0 peer" onChange={handleChange} />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition duration-400 ease-in-out peer-checked:bg-main-active"></span>
        <span className="absolute left-1 bottom-1 h-6 w-6 bg-white rounded-full transition-transform duration-400 ease-in-out peer-checked:translate-x-6"></span>
      </label>
    </div>
  );
}
