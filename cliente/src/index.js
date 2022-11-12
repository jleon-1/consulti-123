import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreContext, store } from './store/store';
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

export const history = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </StoreContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
