import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import * as React from 'react';
import Bpp from './Bpp';
import { store } from './store';

// style + assets
import './assets/scss/style.scss';
import {CartProvider} from "react-use-cart";
import {AuthProvider} from "react-auth-kit";

// ==============================|| REACT DOM RENDER  ||============================== //

ReactDOM.render(
    <Provider store={store}>
        <AuthProvider authType={'cookie'}
                      authName={'_auth'}
                      cookieDomain={window.location.hostname}
                      cookieSecure={window.location.protocol === "https:"}>
            <CartProvider>
                <BrowserRouter>
                    <Bpp />
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    </Provider>,
    document.getElementById('root')
);

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA