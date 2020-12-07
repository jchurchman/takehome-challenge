import EditorContainer from './shared/EditorContainer';
import Branding from './Branding';
import Hours from './Hours';
import { useState } from 'react';
import { initialState } from '../state';
import { BRANDING, DAYS } from '../constants';

const selectState = (stateObj, configObj) => {
  const keys = Object.values(configObj)
  const selectedState = keys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: stateObj[key]
    }
  }, {})
  return selectedState;
}

function App() {
  const [state, setState] = useState(initialState);

  const handleSave = editState => {
    const newState = {
      ...state,
      ...editState,
    };
    setState(newState)
  }
  return (
    <div>
      <EditorContainer
        heading="Hours of Operation"
        subhead="Manage available hours of operation when providers are available to provide care. Patients will be informed if they submit something outside these hours."
        onSave={handleSave}
        renderChildren={(extraProps) => <Hours {...extraProps} {...selectState(state, DAYS)} />}
        />
      <EditorContainer
        heading="Branding"
        subhead="Set name, webname page text, and other branding for your patients to see during an exam."
        onSave={handleSave}
        renderChildren={(extraProps) => <Branding {...extraProps} {...selectState(state, BRANDING)} />}
      />
    </div>
  );
}

export default App;
