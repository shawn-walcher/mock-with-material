const iamBindings = (projectID, path, limit, page) => {
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
          google_project_iam_binding: [
            {
              organizations_123412498153_roles_BigQueryMetaViewer: [
                {
                  members: [
                    'group:gg_gcp_cloud_edit@xyz.com',
                    `serviceAccount:cloud-cicd@${projectID}.iam.gserviceaccount.com`,
                    `group:cloud_${projectID}_locksmith@xyz.com`,
                  ],
                  project: `${projectID}`,
                  role: 'organizations/123412498153/roles/Cloud123412498153',
                },
              ],
            },
          ],
        },
        {
          google_project_iam_binding: [
            {
              organizations_123412498153_roles_CloudSysEngnr2: [
                {
                  members: [`serviceAccount:cloud-cicd@${projectID}.iam.gserviceaccount.com`, `group:cloud_${projectID}_locksmith@xyz.com`],
                  project: `${projectID}`,
                  role: 'organizations/123412498153/roles/Cloud1234124981532',
                },
              ],
            },
          ],
        },
        {
          google_project_iam_binding: [
            {
              'roles_appengineflex-serviceAgent': [
                {
                  members: ['serviceAccount:service-xyz@gae-api-prod.google.com.iam.gserviceaccount.com'],
                  project: `${projectID}`,
                  role: 'roles/appengineflex.serviceAgent',
                },
              ],
            },
          ],
        },
        {
          google_project_iam_binding: [
            {
              'roles_bigquery-admin': [
                {
                  members: [
                    `serviceAccount:cloud-billing@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:cloud-execution-engine@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:cscc-export@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:invoice-ingester@${projectID}.iam.gserviceaccount.com`,
                    'serviceAccount:org-resource-reporting@server-on-demand.iam.gserviceaccount.com',
                    'serviceAccount:cloud-product-cluster-sa@pr-tfe.iam.gserviceaccount.com',
                  ],
                  project: `${projectID}`,
                  role: 'roles/bigquery.admin',
                },
              ],
            },
          ],
        },
        {
          google_project_iam_binding: [
            {
              'roles_bigquery-dataEditor': [
                {
                  members: [
                    `serviceAccount:fw-detective-control@${projectID}.iam.gserviceaccount.com`,
                    'serviceAccount:projectcreator@cloud-dev.iam.gserviceaccount.com',
                    `serviceAccount:projectcreator@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:scanner@${projectID}.iam.gserviceaccount.com`,
                  ],
                  project: `${projectID}`,
                  role: 'roles/bigquery.dataEditor',
                },
              ],
            },
          ],
        },
        {
          google_project_iam_binding: [
            {
              'roles_bigquery-dataViewer': [
                {
                  members: [
                    `group:gg_cloud_gcp_${projectID}_bqreader@xyz.com`,
                    `serviceAccount:inventory-publisher@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:looker-cloud@${projectID}.iam.gserviceaccount.com`,
                    'serviceAccount:vm-dashboard@pr-te-cloud-tooling.iam.gserviceaccount.com',
                    'serviceAccount:vm-dashboard@rc-te-cloud-tooling.iam.gserviceaccount.com',
                  ],
                  project: `${projectID}`,
                  role: 'roles/bigquery.dataViewer',
                },
              ],
            },
          ],
        },
        {
          google_project_iam_binding: [
            {
              'roles_bigquery-jobUser': [
                {
                  members: [
                    `serviceAccount:cloud-billing-ingester@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:cloud--asset@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:fw-detective@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:inventory-publisher@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:looker-cloud@${projectID}.iam.gserviceaccount.com`,
                    'serviceAccount:projectcreator@cloud-dev.iam.gserviceaccount.com',
                    `serviceAccount:scanner@${projectID}.iam.gserviceaccount.com`,
                    `group:gg_cloud_gcp_${projectID}_bqreader@xyz.com`,
                    'serviceAccount:tangoe-cur-data-serv@tangoe-onboard-proj.iam.gserviceaccount.com',
                  ],
                  project: '${projectID}',
                  role: 'roles/bigquery.jobUser',
                },
              ],
            },
          ],
        },
        {
          google_project_iam_binding: [
            {
              'roles_bigquery-user': [
                {
                  members: [
                    `serviceAccount:inventory-publisher@${projectID}.iam.gserviceaccount.com`,
                    `serviceAccount:looker-cloud@${projectID}.iam.gserviceaccount.com`,
                    'serviceAccount:revaluation@hd-opstool-pr.iam.gserviceaccount.com',
                    'serviceAccount:vm-dashboard@pr-te-cloud-tooling.iam.gserviceaccount.com',
                    'serviceAccount:vm-dashboard@rc-te-cloud-tooling.iam.gserviceaccount.com',
                  ],
                  project: `${projectID}`,
                  role: 'roles/bigquery.user',
                },
              ],
            },
          ],
        },
        {
          google_project_iam_binding: [
            {
              'roles_bigquerydatatransfer-serviceAgent': [
                {
                  members: ['serviceAccount:service-8675309@gcp-sa-bigquerydatatransfer.iam.gserviceaccount.com'],
                  project: `${projectID}`,
                  role: 'roles/bigquerydatatransfer.serviceAgent',
                },
              ],
            },
          ],
        },
        {
          google_project_iam_binding: [
            {
              'roles_cloudasset-serviceAgent': [
                {
                  members: ['serviceAccount:service-8675309@gcp-sa-cloudasset.iam.gserviceaccount.com'],
                  project: `${projectID}`,
                  role: 'roles/cloudasset.serviceAgent',
                },
              ],
            },
          ],
        },
      ],
    },
  };
};

module.exports = iamBindings;
