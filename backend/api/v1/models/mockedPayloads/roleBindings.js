const roleBindings = (projectID, role) => {
  return {
    status: 200,
    data: {
      members: [
        `serviceAccount:inventory-publisher@${projectID}.iam.gserviceaccount.com`,
        `serviceAccount:looker-cloud@${projectID}.iam.gserviceaccount.com`,
        `serviceAccount:valuation@cloud-ref.iam.gserviceaccount.com`,
        `serviceAccount:vm-dash@cloud-tooling.iam.gserviceaccount.com`,
        `serviceAccount:vm-dash@cloud.iam.gserviceaccount.com`,
      ],
      groups: [],
      project: `${projectID}`,
      role: `roles/${role}`,
    },
  };
};

module.exports = roleBindings;
