const project = (projectID) => {
  return {
    status: 200,
    data: {
      project: {
        name: `mock-${projectID}`,
        id: `${projectID}`,
        repo_url: `https://github.fake.net/tfe-workspaces/${projectID}`,
        lifecycle: 'non-production',
        ancestry: `fake.net > tfe > ${projectID} > non-production`,
        tfe_management_enabled: true,
      },
      owner: {
        id: 'js1234',
        name: 'Jane Smith',
      },
    },
  };
};

module.exports = project;
