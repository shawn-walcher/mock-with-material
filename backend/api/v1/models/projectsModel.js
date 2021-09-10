const projectsService = {
  getList: function (path, authorization, search = null, type = null) {
    switch (path) {
      case '/happy_path':
        return {
          status: 400,
          data: {
            projects: [
              {
                project_name: `mock-project-${search !== null ? `search-${search}-` : ''}${type !== null ? `type-${type}-` : ''}1`,
                project_id: 'project-id-1',
                repo_url: 'https://github.fake.net/tfe-workspaces/project-id-1',
                lifecycle: 'non-production',
                owner: {
                  id: 'js1234',
                  name: 'Jane Smith',
                },
                ancestry: `fake.net > tfe > ${authorization} > non-production`,
                tfe_management_enabled: true,
              },
              {
                project_name: `mock-project-${search !== null ? `search-${search}-` : ''}${type !== null ? `type-${type}-` : ''}2`,
                project_id: `project-id-2`,
                repo_url: `https://github.fake.net/tfe-workspaces/project-id-2`,
                lifecycle: 'production',
                owner: {
                  id: 'js2345',
                  name: 'John Smith',
                },
                ancestry: `fake.net > tfe > ${authorization} > production`,
                tfe_management_enabled: true,
              },
            ],
          },
        };
      case '/sad_path':
        return { status: 500, err: true, message: `Appropriate error message for ${path}` };
      default:
        return { status: 400, err: true, response: { data: { error: `Appropriate bad request message for ${path}` } } };
    }
  },
  getPaginatedList: function (path, authorization, limit, page, search = null, type = null) {
    switch (path) {
      case '/happy_path':
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
                project_name: `mock-project-${search !== null ? `search-${search}-`: ''}${type !== null ? `type-${type}-` : ''}${page * limit - (limit - 1)}`,
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
      case '/sad_path':
        return { status: 500, err: true, message: `Appropriate error message for ${path}` };
      default:
        return { status: 400, err: true, response: { data: { error: `Appropriate bad request message for ${path}` } } };
    }
  },
};

module.exports = projectsService;
