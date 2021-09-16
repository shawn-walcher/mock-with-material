import { Card, Tabs, Tab, Typography, CardContent, CircularProgress } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { TFEContext } from '../../../Context/TFEProvider';
import AuditDashboard from '../audit/AuditDashboard';
import ProjectInformation from './ProjectInformation';

const ProjectDashboard = () => {
  const { projectInformation, setProjectInformation, setProjectOwner } = useContext(TFEContext);
  const { projectID } = useParams();

  const [tab, setTab] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const tabContent = () => {
    switch (tab) {
      case 0:
        return <ProjectInformation />;
      case 1:
        return <AuditDashboard />;
    }
  };

  const fetchInformation = async () => {
    setFetching(true);
    setErrorMessage('');
    let tempError = '';

    await fetch(`/v1/projects/${projectID}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'mock-token',
      }),
    })
      .then(async (response) => {
        return { status: response.status, data: await response.json() };
      })
      .then(({ status, data }) => {
        if (status >= 400) {
          return (tempError = `${status} - ${data.message ? JSON.stringify(data.message) : 'Trouble loading the data'}`);
        }
        setProjectInformation(data.project);
        setProjectOwner(data.owner);
      })
      .catch((error) => {
        return (tempError = `Error: ${error}`);
      });
    if (tempError !== '') {
      setErrorMessage(tempError);
    }
    setFetching(false);
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <>
      <Typography variant='h3'>
        Project Name: {fetching && <CircularProgress variant='indeterminate' size={30} />}
        {projectInformation.name && projectInformation.name}
      </Typography>
      <Typography variant='h4' gutterBottom>
        Project ID: {fetching && <CircularProgress variant='indeterminate' size={20} />}
        {projectInformation.id && projectInformation.id}
      </Typography>
      <Tabs value={tab} indicatorColor='primary' textColor='primary' onChange={(e, newValue) => setTab(newValue)}>
        <Tab label='Project Information' />
        <Tab label='Audit' />
      </Tabs>
      <Card variant='outlined'>
        <CardContent>{tabContent()}</CardContent>
      </Card>
    </>
  );
};

export default ProjectDashboard;
