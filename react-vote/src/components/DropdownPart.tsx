import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownPartProps {
  listsName : string
  lists: string[];
  onChange: (selectedItem: string) => void;
}

export const DropdownPart: React.FC<DropdownPartProps> = ({ listsName, lists, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleLists = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onChange(item);
    setIsOpen(false);
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
`

const DropdownBtnContainer = styled.div`
    cursor: pointer;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    background-color: beige;
    width: 10rem;
    height: 3rem;
    margin-bottom: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center; 
`;

const ListWrapper = styled.ul`
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    background-color: beige;
    width: 10rem;
`;

const ListItem = styled.li`
    cursor: pointer;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
