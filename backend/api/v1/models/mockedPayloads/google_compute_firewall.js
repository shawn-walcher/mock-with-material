const firewalls = (projectID, path, limit, page, search = null, type = null) => {
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
          google_compute_firewall: [
            {
              'gke-k8s-containers-abc123-all': [
                {
                  allow: [{ protocol: 'ah' }, { protocol: 'esp' }, { protocol: 'icmp' }, { protocol: 'sctp' }, { protocol: 'tcp' }, { protocol: 'udp' }],
                  description: '',
                  direction: 'INGRESS',
                  disabled: false,
                  name: `${page * limit - (limit - 1)}gke-k8s-customer-containers-abc123-all${search !== null ? `-search-${search}`: ''}${type !== null ? `-type-${type}` : ''}`,
                  network: 'default',
                  priority: '1000',
                  project: `${projectID}`,
                  source_ranges: ['10.52.0.0/14'],
                },
              ],
            },
          ],
        },
        {
          google_compute_firewall: [
            {
              'test-1': [
                {
                  allow: [{ ports: ['443'], protocol: 'tcp' }],
                  destination_ranges: ['215.11.1.0/24'],
                  direction: 'EGRESS',
                  disabled: true,
                  name: `${page * limit - (limit - 2)}test-1${search !== null ? `-search-${search}`: ''}${type !== null ? `-type-${type}` : ''}`,
                  network: 'default',
                  priority: '1000',
                  project: `${projectID}`,
                  target_tags: ['pira-test'],
                },
              ],
            },
          ],
        },
        {
          google_compute_firewall: [
            {
              'test-6-24-3': [
                {
                  allow: [{ ports: ['20'], protocol: 'tcp' }],
                  description: 'this is a test to trigger rules',
                  destination_ranges: ['127.0.0.0/24'],
                  direction: 'EGRESS',
                  disabled: true,
                  name: `${page * limit - (limit - 3)}test-6-24-3${search !== null ? `-search-${search}`: ''}${type !== null ? `-type-${type}` : ''}`,
                  network: 'default',
                  priority: '1000',
                  project: `${projectID}`,
                  target_tags: ['e'],
                },
              ],
            },
          ],
        },
        {
          google_compute_firewall: [
            {
              'demo-rule01': [
                {
                  allow: [{ ports: ['80'], protocol: 'tcp' }],
                  description: 'this is a demo',
                  direction: 'INGRESS',
                  disabled: true,
                  name: `${page * limit - (limit - 4)}demo-rule01${search !== null ? `-search-${search}`: ''}${type !== null ? `-type-${type}` : ''}`,
                  network: 'default',
                  priority: '1000',
                  project: `${projectID}`,
                  source_tags: ['sarahdemotag'],
                  target_tags: [],
                },
              ],
            },
          ],
        },
        {
          google_compute_firewall: [
            {
              'default-allow-iap-ssh': [
                {
                  allow: [{ ports: ['22'], protocol: 'tcp' }],
                  description: '',
                  direction: 'INGRESS',
                  disabled: false,
                  name: `${page * limit - (limit - 5)}default-allow-iap-ssh${search !== null ? `-search-${search}`: ''}${type !== null ? `-type-${type}` : ''}`,
                  network: 'default',
                  priority: 1000,
                  project: `${projectID}`,
                  source_ranges: ['35.235.240.0/20'],
                },
              ],
            },
          ],
        },
      ],
    },
  };
};

module.exports = firewalls;