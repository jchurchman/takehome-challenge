import styled from 'styled-components';
import { Input } from 'antd';
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



const Branding = ({ editing, ...otherProps }) => {
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
                value={otherProps[name]}
              />
            )
            : otherProps[name]
        }
      </RowValue>
    </BrandingRow>
  ))
}

export default Branding;