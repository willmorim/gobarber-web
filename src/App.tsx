import React from 'react';

import GlobalStyle from './styles/globals';
import SigIn from './pages/SignIn';
// import SigUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SigIn />
    <GlobalStyle />
  </>
);

export default App;
