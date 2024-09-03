'use client'

type InputProps = {
  onClick?: () => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'button' | 'submit' | 'reset' | 'checkbox' | 'radio' | 'file' | 'date' | 'url' | 'tel' | 'search' | 'color'; 
  variant?: 'outlined' | 'underline';
  fullwidth?: boolean; 
};




const Input = ({ onClick, placeholder, disabled, error = false, errorText, type = 'text', variant = 'outlined', fullwidth=false } : InputProps) => {
  let inputClasses;

  //TODO: before/after 적용해서 active시에 border 안움직이게
  switch (variant) {
    case 'outlined':
      inputClasses = 'bg-white border border-main-active px-3 rounded text-main-active disabled:bg-main-disabled focus: focus-visible:outline-none'
      break;
    case 'underline':
      inputClasses = 'bg-white border-b border-main-active  text-main-active disabled:bg-main-disabled focus-visible:outline-none'
      break;
    default:
  }

  if (error || errorText) {
    inputClasses += ' border-error';
  }


  return (
  <div className={`${fullwidth && 'w-full'}`}>
    <input
      type={type}
      onClick={onClick}
      disabled={disabled}
      placeholder={placeholder}
      className={` ${inputClasses} py-3 w-full`}
    />
    { errorText && <p className={`${ variant !== 'underline' && 'px-3' } text-error text-xs mt-1`}>{errorText}</p> }
  </div>  
  );
};

export default Input;