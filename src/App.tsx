import React from 'react';

import GlobalStyle from './styles/globals';
import SigIn from './pages/SignIn';
// import SigUp from './pages/SignUp';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SigIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
