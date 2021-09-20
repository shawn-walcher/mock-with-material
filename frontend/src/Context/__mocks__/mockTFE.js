const MockTFE = {
  projectInformation: {
    name: 'mock-project-id-99',
    id: 'project-id-99',
    repo_url: 'https://github.fake.net/tfe-workspaces/project-id-99',
    lifecycle: 'non-production',
    ancestry: 'fake.net > tfe > project-id-99 > non-production',
    tfe_management_enabled: true,
  },
  projectOwner: { id: 'js1234', name: 'Jane Smith' },
};

export { MockTFE };
