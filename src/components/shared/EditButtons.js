import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  height: 32px;
  width: 64px;
  margin: 0 8px;
  ${({ type }) => (type && type === 'primary' && 'background-color: cornflowerblue; color: white;')}
`;


const EditButtons = ({ editing, onEdit, onCancel, onSave, saveDisabled }) => editing
  ? (
    <ButtonContainer>
      <StyledButton onClick={onCancel}>
        Cancel
      </StyledButton>
      <StyledButton
        type="primary"
        onClick={onSave}
        disabled={saveDisabled}
      >
        Save
      </StyledButton>
    </ButtonContainer>
  )
  : (
    <StyledButton onClick={onEdit}>
      Edit
    </StyledButton>
  )

  export default EditButtons;
  