import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  listsName : string
  lists: string[];
  onChange: (selectedItem: string) => void; // onChange 새로 추가

}


export const Dropdown: React.FC<DropdownProps> = ({ listsName, lists, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleLists = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    onChange(item); // 선택된 값을 부모 컴포넌트로 전달
  };

  return (
    <DropdownContainer>
      <DropdownBtnContainer onClick={toggleLists}>
        <span>{selectedItem || listsName}</span>
      </DropdownBtnContainer>
      {isOpen && (
        <ListWrapper>
          {lists.map((list: string) => (
            <ListItem key={list} onClick={() => handleItemClick(list)}>
              {list}
            </ListItem>
          ))}
        </ListWrapper>
      )}
    </DropdownContainer>
  );
};


const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 48%;
`

const DropdownBtnContainer = styled.div`
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.green};
    margin-bottom: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center; 
    height: 3rem;

    font-size: 1.2rem;
    font-weight: 520;
    color: white;

    &:hover {
      color: ${({theme}) => theme.colors.yellow};;
    }
`;

const ListWrapper = styled.ul`
    border: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.green};
    position: absolute;
    padding: 0.5rem 2rem;
    top: 100%;
    left: 0;
    z-index: 10;
`;

const ListItem = styled.li`
    cursor: pointer;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
    font-weight: 500;
    color: white;

    &:hover {
      color: ${({theme}) => theme.colors.yellow};;
    }
    `;
