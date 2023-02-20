import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store.js';

const Home = lazy(() => import('./Home'));

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </Provider>
  );
};

export default App;
