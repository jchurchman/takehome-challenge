import React, { useState } from 'react';
import styled from 'styled-components';
import EditButtons from './EditButtons';

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin: 16px;
  h2 {
    margin: 0;
  }
`;

const Subhead = styled.span`
  margin: 16px;
`;

const ChildContainer = styled.div`
  margin: 32px 16px;
`;

const EditorContainer = ({ heading, subhead, renderChildren, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [editState, setEditState] = useState(null);

  const handleOnSave = () => {
    onSave(editState);
    setEditing(false);
  }
  const handleOnCancel = () => {
    setEditState(null);
    setEditing(false);
  }

  return (
    <div>
      <HeadingContainer>
        <h2>
          {heading}
        </h2>
        <EditButtons
          editing={editing}
          saveDisabled={!editState}
          onEdit={() => setEditing(true)}
          onSave={handleOnSave}
          onCancel={handleOnCancel}
        />
      </HeadingContainer>
      <Subhead>
        {subhead}
      </Subhead>
      <ChildContainer>
        {renderChildren({ editing, onEdit: arg => setEditState(arg), editState })}
      </ChildContainer>
    </div>
  )
}

export default EditorContainer;
