'use client'

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event : React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  variant?: 'filled' | 'outlined'; 
  className?: string;
};



const Button = ({ children, onClick, disabled, type = 'button', size = 'large', variant = 'filled', className } : ButtonProps) => {
  let height;
  let width;
  let _variant;

  switch (size) {
    case 'small':
      height = 'h-[26px]';
      width = 'w-[80px]';
      break;
    case 'large':
    height = 'h-12';
    width = 'w-[355px]';
      break;
    case 'medium':
      height = 'h-12';
    width = 'w-[165px]';
    default:
  }

  switch (variant) {
    case 'filled':
      _variant = 'bg-main-active text-white hover:bg-main-hover disabled:bg-main-disabled'
      break;
    case 'outlined':
      _variant = 'bg-white border border-main-active text-main-active hover:bg-main-active hover:text-white disabled:bg-main-disabled'
      break;
    default:
  }

  if(disabled) {
    _variant = 'bg-main-active text-gray-300 opacity-70 cursor-not-allowed'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${height} ${width} ${_variant} ${className} rounded`}
    >
      {children}
    </button>
  );
};

export default Button;