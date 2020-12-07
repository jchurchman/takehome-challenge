import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


const EditButtons = ({ editing, onEdit, onCancel, onSave }) => editing
  ? (
    <Button onClick={onEdit}>
      Edit
    </Button>
  )
  : (
    <ButtonContainer>
      <Button onClick={onCancel}>
        Cancel
      </Button>
      <Button onClick={onSave}>
        Save
      </Button>
    </ButtonContainer>
  )

  export default EditButtons;
  