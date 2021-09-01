import { CssBaseline } from '@material-ui/core';
import Header from './components/layout/Header';
import { useState } from 'react';

function App() {
  const [healthCheck, setHealthCheck] = useState('checking...');
  const fetchHealthCheck = async () =>
    await fetch(`/v1/health`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setHealthCheck(data.message));
  fetchHealthCheck();
  
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <span>
        Health status: {healthCheck}
      </span>
    </div>
  );
}

export default App;
