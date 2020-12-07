import styled from 'styled-components';
import { Switch, Select } from 'antd'
import { HOURS } from '../../constants';

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 30px 120px 90px 15px 90px;
`;

const Text = styled.span`
  grid-column: 1 / span 1;
`;

const StyledSwitch = styled(Switch)`
  grid-column: 2 / span 1;
`;

const OpenText = styled.span`
  grid-column: 3 / span 1;
`;

const StartTime = styled.span`
  grid-column: 4 / span 1;
`;

const Hyphen = styled.span`
  grid-column: 5 / span 1;
`;

const EndTime = styled.span`
  grid-column: 6 / span 1;
`;

const selectOpts = HOURS.map((str, ind) => ({ label: str, value: ind }))

const HoursRow = ({ onChange, editing, displayText, open, start, end }) => {
  console.log({ start, end })
  return (
    <RowContainer>
      <Text>
        {displayText}
      </Text>
      {
        editing && (
          <StyledSwitch
            name="open"
            checked={open}
            onChange={onChange}
          />
        )
      }
      <OpenText>
        {
          open ? 'OPEN' : 'CLOSED'
        }
      </OpenText>
      <StartTime>
        {
          editing
            ? (
              <Select
                name="start"
                options={selectOpts}
                value={start}
                onChange={onChange}
              />
            )
            : HOURS[start]
        }
      </StartTime>
      <Hyphen>-</Hyphen>
      <EndTime>
        {
          editing
            ? (
              <Select
                name="end"
                options={selectOpts}
                value={end}
                onChange={onChange}
              />
            )
            : HOURS[end]
        }

      </EndTime>
    </RowContainer>
  )
}

export default HoursRow;
