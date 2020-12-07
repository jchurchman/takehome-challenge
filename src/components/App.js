import EditorContainer from './shared/EditorContainer';
import Branding from './Branding';
import './App.css';
import { useReducer } from 'react';
import { initialState, reducer } from '../state';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <EditorContainer
        heading="Hours of Operation"
        subhead="Manage available hours of operation when providers are available to provide care. Patients will be informed if they submit something outside these hours."
        onSave={() => {}}
        onCancel={() => {}}
        renderChildren={() => {}}
        />
      <EditorContainer
        heading="Branding"
        subhead="Set name, webname page text, and other branding for your patients to see during an exam."
        onSave={() => {}}
        onCancel={() => {}}
        renderChildren={(extraProps) => <Branding {...extraProps} {...state} />}
      />
    </div>
  );
}

export default App;
