
//Extra rows of fake data to test infinite scroll
let fillerRows = []
for(let i=0; i<200; i++) {
  fillerRows.push({
    id: `filler-${i}`,
    name: `filler-${i}`,
    icon: 'unity:cube',
    description: 'Filler row',
    deployments: 'Test App, Control center Video Wall',
    firmwareVersion: '2.1.0',
    status: 'Active',
    createdAt: 'January 13, 2018 7:06pm',
  })
}

// example table data, should eventually turn into controls
// normally this would be taken from the store
export const devices = {
  data: [
    {
      id: 'root',
      name: 'Global',
      icon: 'icons:folder',
      groups: [
        {
          id: 'africa',
          name: 'Africa',
          icon: 'icons:folder',//Not sure if this works
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
          devices: [],
        },
        {
          id: 'asia',
          name: 'Asia',
          icon: 'icons:folder',
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
        },
        {
          id: 'australia',
          name: 'Australia',
          icon: 'icons:folder',
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
        },
        {
          id: 'europe',
          name: 'Europe',
          icon: 'icons:folder',
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
        },
        {
          id: 'northAmerica',
          name: 'North America',
          icon: 'icons:folder',
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
          groups: [
            {
              id: 'canada',
              name: 'Canada',
              icon: 'icons:folder',
              description: 'Device Group',
              deployments: 'Test App, Control center Video Wall',
              createdAt: 'January 12, 2018 7:06pm',
            },
            {
              id: 'mexico',
              name: 'Mexico',
              icon: 'icons:folder',
              description: 'Device Group',
              deployments: 'Test App, Control center Video Wall',
              createdAt: 'January 12, 2018 7:06pm',
            },
            {
              id: 'us',
              name: 'United States',
              icon: 'icons:folder',
              description: 'Device Group',
              deployments: 'Test App, Control center Video Wall',
              createdAt: 'January 12, 2018 7:06pm',
              devices: [
                {
                  id: 'abc001',
                  name: 'abc001',
                  icon: 'unity:cube',
                  description: 'Switch',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.1 (latest)',
                  status: 'Not Responding',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                {
                  id: 'abc002',
                  name: 'abc002',
                  icon: 'unity:cube',
                  description: 'Switch',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Active',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                {
                  id: 'abc003',
                  name: 'abc003',
                  icon: 'unity:cube',
                  description: 'Switch',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Active',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                {
                  id: 'abc004',
                  name: 'abc004',
                  icon: 'unity:cube',
                  description: 'Switch',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Probable to fail',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                {
                  id: 'abc005',
                  name: 'abc005',
                  icon: 'unity:cube',
                  description: 'Switch',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Active',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                {
                  id: 'abc006',
                  name: 'abc006',
                  icon: 'unity:cube',
                  description: 'Switch',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Active',
                  createdAt: 'January 12, 2018 7:06pm',
                },

                {
                  id: 'abc007',
                  name: 'abc007',
                  icon: 'unity:cube',
                  description: 'tTube',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Active',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                {
                  id: 'abc008',
                  name: 'abc008',
                  icon: 'unity:cube',
                  description: 'tTube',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Active',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                {
                  id: 'abc009',
                  name: 'abc009',
                  icon: 'unity:cube',
                  description: 'tTube',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Active',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                {
                  id: 'abc010',
                  name: 'abc010',
                  icon: 'unity:cube',
                  description: 'Can Light',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Active',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                {
                  id: 'abc011',
                  name: 'abc011',
                  icon: 'unity:cube',
                  description: 'Can Light',
                  deployments: 'Test App, Control center Video Wall',
                  firmwareVersion: '1.0.0',
                  status: 'Active',
                  createdAt: 'January 12, 2018 7:06pm',
                },
                ...fillerRows
              ]
            },
          ]
        },
      ],
    }
  ],
  columns: [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'deployments',
      label: 'Used in Deployments',
      formatLabel: (deployments='') => deployments
    },
    {
      key: 'firmwareVersion',
      label: 'Firmware Version',
      formatLabel: (version='') => version
    },
    {
      key: 'description',
      label: 'Description',
      formatLabel: (description='') => description
    },
    {
      key: 'status',
      label: 'Status',
      formatLabel: (status='...') => status
    },
    {
      key: 'createdAt',
      label: 'Created at',
      formatLabel: (createdAt='') => createdAt
    },
  ]
  ,
  //filters: [{column: "status", values: ["Active"], include: true} ],
  childKeys: ['groups', 'devices']
}