import { DAYS } from '../../constants';
import { useReducer, useEffect, useRef } from 'react';
import HoursRow from './HoursRow';

const config = [{
  name: DAYS.SUNDAY,
  displayText: 'Sunday',
},{
  name: DAYS.MONDAY,
  displayText: 'Monday',
},{
  name: DAYS.TUESDAY,
  displayText: 'Tuesday',
},{
  name: DAYS.WEDNESDAY,
  displayText: 'Wednesday',
},{
  name: DAYS.THURSDAY,
  displayText: 'Thursday',
},{
  name: DAYS.FRIDAY,
  displayText: 'Friday',
},{
  name: DAYS.SATURDAY,
  displayText: 'Saturday',
}]

const Hours = ({ editing, onEdit, editState, ...restProps }) => {
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

  return config.map(({ displayText, name }) => {
    const values = state[name]

    return (
      <HoursRow
        key={name}
        editing={editing}
        displayText={displayText}
        onChange={e => {
          const { name: targetName, value: targetVal } = e.target;
          handleEdit({
            name,
            value: {
              ...values,
              [targetName]: targetVal
            }
          })
        }}
        {...values}
      />
    )
  })
}

export default Hours;
