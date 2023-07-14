import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddSubjectProvider from './components/contexts/AddSubjectProvider';
import AddStudentProvider from './components/contexts/AddStudentProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddSubjectProvider>
      <AddStudentProvider>
        <App />
      </AddStudentProvider>
    </AddSubjectProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
