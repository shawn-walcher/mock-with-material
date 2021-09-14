const serviceAccounts = (projectID, path, limit, page) => {
  return {
    status: 200,
    data: {
      pagination: {
        next: `${page < 5 && `${path}?limit=${limit}&page=${page + 1}`}`,
        previous: `${page > 1 && `${path}?limit=${limit}&page=${page - 1}`}`,
        total: limit * 5,
        total_pages: 5,
      },
      resource: [
        {
          google_service_account: [
            {
              'billing-ingester@project.iam.gserviceaccount.com': [
                {
                  account_id: 'billing-ingester',
                  description: '',
                  display_name: 'Billing Ingester',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
        {
          google_service_account: [
            {
              'cloud-api@project.iam.gserviceaccount.com': [
                {
                  account_id: 'cloud-api',
                  description: '',
                  display_name: 'Cloud API',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
        {
          google_service_account: [
            {
              'cloud-asset@project.iam.gserviceaccount.com': [
                {
                  account_id: 'cloud-asset',
                  description: 'Asset Info Repository',
                  display_name: 'cloud-asset',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
        {
          google_service_account: [
            {
              'cloud-bigquery-slot-read@project.iam.gserviceaccount.com': [
                {
                  account_id: 'cloud-bigquery-slot-read',
                  description: '',
                  display_name: 'cloud-bigquery-slot-read',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
        {
          google_service_account: [
            {
              'cloud-cicd@projectID.iam.gserviceaccount.com': [
                {
                  account_id: 'cloud-cicd',
                  description: '',
                  display_name: 'Cloud CICD',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
        {
          google_service_account: [
            {
              'cloud-execution-engine@project.iam.gserviceaccount.com': [
                {
                  account_id: 'cloud-execution-engine',
                  description: '',
                  display_name: 'Cloud Execution Engine',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
        {
          google_service_account: [
            {
              'cloud-key-delivery@project.iam.gserviceaccount.com': [
                {
                  account_id: 'cloud-key-delivery',
                  description: '',
                  display_name: 'Cloud Key Delivery',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
        {
          google_service_account: [
            {
              'cloud-rfchandler@project.iam.gserviceaccount.com': [
                {
                  account_id: 'cloud-chandler',
                  description: '',
                  display_name: 'Cloud CHandler',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
        {
          google_service_account: [
            {
              'cloud-spend-ui@project.iam.gserviceaccount.com': [
                {
                  account_id: 'cloud-spend-ui',
                  description: '',
                  display_name: '',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
        {
          google_service_account: [
            {
              'cloud-view-gcp@project.iam.gserviceaccount.com': [
                {
                  account_id: 'cloud-view-gcp',
                  description: 'Supports audit reporting from Cloud Team',
                  display_name: 'cloud-view-gcp',
                  tfe_managed: true,
                  project: `${projectID}`,
                },
              ],
            },
          ],
        },
      ],
    },
  };
};

module.exports = serviceAccounts;
