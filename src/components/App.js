import EditorContainer from './shared/EditorContainer';
import Branding from './Branding';
import './App.css';
import { useState } from 'react';
import { initialState } from '../state';

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
        renderChildren={() => {}}
        />
      <EditorContainer
        heading="Branding"
        subhead="Set name, webname page text, and other branding for your patients to see during an exam."
        onSave={handleSave}
        renderChildren={(extraProps) => <Branding {...extraProps} {...state} />}
      />
    </div>
  );
}

export default App;
