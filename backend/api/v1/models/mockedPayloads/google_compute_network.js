const networks = () => {
  return {
    status: 200,
    data: {
      resources: [
        { type: 'google_compute_network', name: 'default' },
        { type: 'google_compute_network', name: 'another' },
      ],
    },
  };
};

module.exports = networks;
