import styled from "styled-components";

interface InputBoxProps {
    placeholder: string;
    value?: string;
  }
  
const InputBox: React.FC<InputBoxProps> = ({ placeholder, value = '' }) => {
  return (
    <InputWrapper>
        <input 
            type="text"
            placeholder={placeholder}
            value={value}
        />
    </InputWrapper>
  )
}

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