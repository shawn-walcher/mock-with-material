import { Card, CardContent, Typography } from '@mui/material';
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

  return (
    <div>
      <Typography variant='h3' gutterBottom>
        API Health Status
      </Typography>
      <Card variant='outlined'>
        <CardContent>{healthCheck}</CardContent>
      </Card>
    </div>
  );
};

export default APIHealth;
