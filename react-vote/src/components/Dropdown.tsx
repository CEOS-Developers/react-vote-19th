import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  lists: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({ lists }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleLists = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <>
      <DropdownBtnContainer onClick={toggleLists}>
        <span>{selectedItem || 'Dropdown'}</span>
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
    </>
  );
};

const DropdownBtnContainer = styled.div`
  cursor: pointer;
 
`;

const ListWrapper = styled.ul`
  
`;

const ListItem = styled.li`
  cursor: pointer;
`;
