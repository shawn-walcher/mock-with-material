const iamRoles = (projectID) => {
  return {
    status: 200,
    data: {
      resource: [
        { role_id: 'roles/run.serviceAgent' },
        { role_id: 'roles/secretmanager.admin' },
        { role_id: 'roles/secretmanager.viewer' },
        {
          role_id: `projects/${projectID}/roles/pubsub.subscription.create`,
        },
        { role_id: 'organizations/123412498153/roles/BigQueryMetaViewer' },
        { role_id: 'organizations/123412498153/roles/BigQueryRsViewer' },
        {
          role_id: 'organizations/123412498153/roles/BigQuery_Datahub_Auditor',
        },
        { role_id: 'organizations/123412498153/roles/BigQuery_Explorer' },
        { role_id: 'organizations/123412498153/roles/MetadataViewer' },
        {
          role_id: 'organizations/123412498153/roles/billingViewer_custom',
        },
      ],
    },
  };
};

module.exports = iamRoles;
