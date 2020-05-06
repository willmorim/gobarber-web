import React from 'react';

import GlobalStyle from './styles/globals';
import SigIn from './pages/SignIn';
// import SigUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SigIn />
      <GlobalStyle />
    </AuthProvider>
  </>
);

export default App;
