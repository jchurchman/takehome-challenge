import styled from 'styled-components';
import { Input } from 'antd';
import { useEffect, useReducer, useRef } from 'react';
import { BRANDING } from '../../constants';

const config = [{
  name: BRANDING.FULL_NAME,
  displayText: 'Full Name',
  width: 300,
},{
  name: BRANDING.SHORT_NAME,
  displayText: 'Short Name',
  width: 180,
},{
  name: BRANDING.WELCOME_TEXT,
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

const Branding = ({ editing, onEdit, editState, ...restProps }) => {
  const reducer = (state, action) => {
    if (state[action.name]) {
      return {
        ...state,
        [action.name]: action.value,
      }
    }
    if (action.name === 'reset') {
      return restProps;
    }
    return state;
  }
  const [state, dispatch] = useReducer(reducer, restProps)
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
                defaultValue={restProps[name]}
                value={state[name]}
                name={name}
                onChange={handleEdit}
              />
            )
            : restProps[name]
        }
      </RowValue>
    </BrandingRow>
  ))
}

export default Branding;