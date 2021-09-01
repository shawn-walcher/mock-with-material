import { useEffect, useState } from 'react';

const APIHealth = () => {
  const [healthCheck, setHealthCheck] = useState('checking...');

  const fetchHealthCheck = async () => {
    return await fetch('/v1/health', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setHealthCheck(data.message));
  };

  // On Load fetchHealthCheck
  useEffect(() => {
    fetchHealthCheck();
  }, []);

  return <span>Health status: {healthCheck}</span>;
};

export default APIHealth;
