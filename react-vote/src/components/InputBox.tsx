interface InputBoxProps {
    placeholder: string;
    value?: string;
  }
  
const InputBox: React.FC<InputBoxProps> = ({ placeholder, value = '' }) => {
  return (
    <>
    <input 
        type="text"
        placeholder={placeholder}
        value={value}
    />
    </>
  )
}

export default InputBox