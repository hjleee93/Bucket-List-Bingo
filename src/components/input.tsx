'use client'

type InputProps = {
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'button' | 'submit' | 'reset' | 'checkbox' | 'radio' | 'file' | 'date' | 'url' | 'tel' | 'search' | 'color'; 
  variant?: 'outlined' | 'underline';
  fullwidth?: boolean; 
};




const Input = ({ onChange, placeholder, disabled, error = false, errorText, type = 'text', variant = 'outlined', fullwidth=false } : InputProps) => {
  let inputClasses;

  //TODO: before/after 적용해서 active시에 border 안움직이게
  switch (variant) {
    case 'outlined':
      inputClasses = 'bg-white border px-3 rounded text-black disabled:bg-main-disabled focus: focus-visible:outline-none'
      break;
    case 'underline':
      inputClasses = 'bg-white border-b  text-blacke disabled:bg-main-disabled focus-visible:outline-none'
      break;
    default:
  }

  //border color
  if (error || errorText) {
    inputClasses += ' border-error';
  }else{
    inputClasses += ' border-main-active';
  }

  return (
  <div className={`${fullwidth && 'w-full'}`}>
    <input
      type={type}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      className={` ${inputClasses} py-3 w-full`}
    />
    
    { errorText && <p className={`${ variant !== 'underline' && 'px-3' } text-error text-xs mt-1`}>{errorText}</p> }
  </div>  
  );
};

export default Input;