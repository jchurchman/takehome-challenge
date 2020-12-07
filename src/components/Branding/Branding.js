import styled from 'styled-components';
import { Input } from 'antd';
import { useEffect, useReducer, useRef } from 'react';
import * as CONSTANTS from '../../constants';

const config = [{
  name: CONSTANTS.FULL_NAME,
  displayText: 'Full Name',
  width: 300,
},{
  name: CONSTANTS.SHORT_NAME,
  displayText: 'Short Name',
  width: 180,
},{
  name: CONSTANTS.WELCOME_TEXT,
  displayText: 'Welcome Text',
  width: 800,
}]

const StyledInput = styled(Input)`
  ${({ width }) => (width && `width: ${width}px;`)}
`;

const BrandingRow = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  margin-bottom: 32px;
`;

const RowName = styled.span`
  grid-column: 1 / span 1;
`;

const RowValue = styled.span`
  grid-column: 2 / span 1;
`;

const createInitialState = allTheState => {
  return config.reduce((acc, { name }) => ({ ...acc, [name]: allTheState[name]}), {})
}

const Branding = ({ editing, onEdit, editState, ...otherProps }) => {
  const reducer = (state, action) => {
    console.log('action ', action);
    if (state[action.name]) {
      return {
        ...state,
        [action.name]: action.value,
      }
    }
    if (action.name === 'reset') {
      return createInitialState(otherProps);
    }
    return state;
  }
  const [state, dispatch] = useReducer(reducer, otherProps, createInitialState)
  const handleEdit = e => {
    const { name, value } = e.target;
    const newState = {
      ...state,
      [name]: value,
    };
    dispatch({ name, value })
    onEdit(newState)
  }

  const { current: wasEditing } = useRef(editing);
  useEffect(() => {
    if (
      editing ^ wasEditing
      && !editState
    ) {
      dispatch({ name: 'reset' })
    }
  }, [editing, wasEditing, editState]);
  
  return config.map(({ name, displayText, width }) => (
    <BrandingRow key={name}>
      <RowName>
        {displayText}
      </RowName>
      <RowValue>
        {
          editing
            ? (
              <StyledInput
                width={width}
                defaultValue={otherProps[name]}
                value={state[name]}
                name={name}
                onChange={handleEdit}
              />
            )
            : otherProps[name]
        }
      </RowValue>
    </BrandingRow>
  ))
}

export default Branding;