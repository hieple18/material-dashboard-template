import React from 'react';
import ReactDOM from 'react-dom';

// Service worker
import * as serviceWorker from './common/serviceWorker';

// App
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "i18n";

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </I18nextProvider>
    , document.getElementById('root'));

serviceWorker.unregister();