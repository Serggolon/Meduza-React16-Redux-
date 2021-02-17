import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ApiService from './services/api-service';
import GoodsStoreService from './services/goods-store-service';
import { GoodsStoreServiceProvider } from './components/goods-store-service-context';

import store from './store';
const goodsStoreService = new ApiService();
const oodsStoreService = new GoodsStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <GoodsStoreServiceProvider value={goodsStoreService}>
        <Router>
          <App />
        </Router>
      </GoodsStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
