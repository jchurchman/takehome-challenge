import React, { useState } from 'react';
import styled from 'styled-components';
import EditButtons from './EditButtons';

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


const EditorContainer = ({ heading, subhead, renderChildren, onSave, onCancel }) => {
  const [editing, setEditing] = useState(false);

  const handleOnSave = () => {
    onSave();
    setEditing(false);
  }
  const handleOnCancel = () => {
    onCancel();
    setEditing(false);
  }

  return (
    <div>
      <HeadingContainer>
        <h3>
          {heading}
        </h3>
        <EditButtons
          editing={editing}
          onEdit={() => setEditing(true)}
          onSave={handleOnSave}
          onCancel={handleOnCancel}
        />
      </HeadingContainer>
      <h5>
        {subhead}
      </h5>
      {renderChildren({ editing })}
    </div>
  )
}

export default EditorContainer;
