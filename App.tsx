import React from 'react';
import RootStack from './src/routes/RootStack/RootStack';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
