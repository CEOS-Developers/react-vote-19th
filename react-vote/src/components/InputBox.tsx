import styled from "styled-components";

interface InputBoxProps {
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputBox: React.FC<InputBoxProps> = ({ placeholder, type = "text", value, onChange }) => {
  return (
    <InputWrapper>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
    />
     </InputWrapper>
  );
};

export default InputBox

const InputWrapper = styled.div`
   margin-bottom: 1rem;
    input{
        width: 100%;
        height: 3rem;
        font-size : 1.2rem;
        border-radius: 5px;
        border: none;
    }
`