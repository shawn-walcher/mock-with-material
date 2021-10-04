import { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const APIHealth = () => {
  const [healthCheck, setHealthCheck] = useState('checking...');

  const fetchHealthCheck = async () => {
    return await fetch('/v1/health', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setHealthCheck(data.message))
      .catch((error) => console.log(error));
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
      <Card>
        <CardContent>
          <Typography variant='body'>{healthCheck}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default APIHealth;
