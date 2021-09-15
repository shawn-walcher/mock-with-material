import { Card, Tabs, Tab, Typography, CardContent } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { TFEContext } from '../../../Context/TFEProvider';
import ProjectInformation from './ProjectInformation';

const ProjectDashboard = () => {
  const {projectInformation, setProjectInformation, projectOwner, setProjectOwner} = useContext(TFEContext);
  const { projectID } = useParams();
  const [tab, setTab] = useState(0);
  let projectName = 'hello';

  const tabContent = () => {
    switch (tab) {
      case 0:
        return <ProjectInformation/>;
      case 1:
        return 'show audit';
    }
  };

  const fetchInformation = async () => {
    // setFetching(true);
    // setErrorMessage('');
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
        setProjectInformation(data.project);
        setProjectOwner(data.owner);
      });
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <>
      <Typography variant='h3'>Project Name: {projectInformation.name && projectInformation.name}</Typography>
      <Typography variant='h4' gutterBottom>
        Project ID: {projectInformation.id && projectInformation.id}
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
