const projects = (path, authorization, limit, page, search = null, type = null) => {
  return {
    status: 200,
    data: {
      pagination: {
        next: `${page < 5 && `${path}?limit=${limit}&page=${page + 1}`}`,
        previous: `${page > 1 && `${path}?limit=${limit}&page=${page - 1}`}`,
        total: limit * 5,
        total_pages: 5,
      },
      projects: [
        {
          project_name: `mock-project-${search !== null ? `search-${search}-` : ''}${type !== null ? `type-${type}-` : ''}${page * limit - (limit - 1)}`,
          project_id: `project-id-${page * limit - (limit - 1)}`,
          repo_url: `https://github.fake.net/tfe-workspaces/project-id-${page * limit - (limit - 1)}`,
          lifecycle: 'non-production',
          owner: {
            id: 'js1234',
            name: 'Jane Smith',
          },
          ancestry: `fake.net > tfe > ${authorization} > non-production`,
          tfe_management_enabled: true,
        },
        {
          project_name: `mock-project-${search !== null ? `search-${search}-` : ''}${type !== null ? `type-${type}-` : ''}${page * limit - (limit - 2)}`,
          project_id: `project-id-${page * limit - (limit - 2)}`,
          repo_url: `https://github.fake.net/tfe-workspaces/project-id-${page * limit - (limit - 2)}`,
          lifecycle: 'non-production',
          owner: {
            id: 'js2345',
            name: 'John Smith',
          },
          ancestry: `fake.net > tfe > ${authorization} > non-production`,
          tfe_management_enabled: true,
        },
        {
          project_name: `mock-project-${search !== null ? `search-${search}-` : ''}${type !== null ? `type-${type}-` : ''}${page * limit - (limit - 3)}`,
          project_id: `project-id-${page * limit - (limit - 3)}`,
          repo_url: `https://github.fake.net/tfe-workspaces/project-id-${page * limit - (limit - 3)}`,
          lifecycle: 'non-production',
          owner: {
            id: 'jd345',
            name: 'Jane Doe',
          },
          ancestry: `fake.net > tfe > ${authorization} > non-production`,
          tfe_management_enabled: true,
        },
        {
          project_name: `mock-project-${search !== null ? `search-${search}-` : ''}${type !== null ? `type-${type}-` : ''}${page * limit - (limit - 4)}`,
          project_id: `project-id-${page * limit - (limit - 4)}`,
          repo_url: `https://github.fake.net/tfe-workspaces/project-id-${page * limit - (limit - 4)}`,
          lifecycle: 'production',
          owner: {
            id: 'jd14',
            name: 'John Doe',
          },
          ancestry: `fake.net > tfe > ${authorization} > production`,
          tfe_management_enabled: false,
        },
        {
          project_name: `mock-project-${search !== null ? `search-${search}-` : ''}${type !== null ? `type-${type}-` : ''}${page * limit - (limit - 5)}`,
          project_id: `project-id-${page * limit - (limit - 5)}`,
          repo_url: `https://github.fake.net/tfe-workspaces/project-id-${page * limit - (limit - 5)}`,
          lifecycle: 'production',
          owner: {
            id: 'js3498b',
            name: 'Janet Smith',
          },
          ancestry: `fake.net > tfe > ${authorization} > production`,
          tfe_management_enabled: true,
        },
      ],
    },
  };
};

module.exports = projects;
