import React from 'react'
import { UnityTag } from "./components/unity-core-react"


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
      labels: [],
      groups: [
        {
          id: 'africa',
          name: 'Africa',
          icon: 'icons:folder',//Not sure if this works
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
          labels: ['continent', 'southern hemisphere'],
          devices: [],
        },
        {
          id: 'asia',
          name: 'Asia',
          icon: 'icons:folder',
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
          labels: ['continent', 'northern hemisphere'],
        },
        {
          id: 'australia',
          name: 'Australia',
          icon: 'icons:folder',
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
          labels: ['continent', 'southern hemisphere'],
        },
        {
          id: 'europe',
          name: 'Europe',
          icon: 'icons:folder',
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
          labels: ['continent', 'northern hemisphere'],
        },
        {
          id: 'northAmerica',
          name: 'North America',
          icon: 'icons:folder',
          description: 'Device Group',
          deployments: 'Test App, Control center Video Wall',
          createdAt: 'January 12, 2018 7:06pm',
          labels: ['continent', 'northern hemisphere'],
          groups: [
            {
              id: 'canada',
              name: 'Canada',
              icon: 'icons:folder',
              description: 'Device Group',
              deployments: 'Test App, Control center Video Wall',
              createdAt: 'January 12, 2018 7:06pm',
              labels: ['country'],
            },
            {
              id: 'mexico',
              name: 'Mexico',
              icon: 'icons:folder',
              description: 'Device Group',
              deployments: 'Test App, Control center Video Wall',
              createdAt: 'January 12, 2018 7:06pm',
              labels: ['country'],
            },
            {
              id: 'us',
              name: 'United States',
              icon: 'icons:folder',
              description: 'Device Group',
              deployments: 'Test App, Control center Video Wall',
              createdAt: 'January 12, 2018 7:06pm',
              labels: ['country'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
                  labels: ['device'],
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
      format: (deployments='') => deployments
    },
    {
      key: 'firmwareVersion',
      label: 'Firmware Version',
      format: (version='') => version
    },
    {
      key: 'description',
      label: 'Description',
      format: (description='') => description
    },
    {
      key: 'status',
      label: 'Status',
      format: (status='...') => status
    },
    {
      key: 'createdAt',
      label: 'Created at',
      format: (createdAt='') => createdAt
    },
    {
      key: 'labels',
      label: 'Labels',
      format: (val) => val,
      renderCustomContent: (value=[]) => {
        if (!Array.isArray(value)) return
        return value.map((label, index) => <UnityTag
          key={index}
          label={label}
          style={{
            height: '32px'
          }}
        />)
      }
    }
  ]
  ,
  //filters: [{column: "status", values: ["Active"], include: true} ],
  childKeys: ['groups', 'devices']
}


const BIT_TOKEN = 'my-fake-bit-token'

export const fakeYaml = `stages:
  - setup
  - test
  - cq
  - version
  - build
  - package
  - deploy
  - int

setup:
  stage: setup
  image:
    name: atlassianlabs/docker-node-jdk-chrome-firefox
  script:
  - echo "Set upp"
  - echo "**************"
  - echo ""
  - echo "***************************** installing deps for the project and building the app"
  - rm -rf node_modules && rm package-lock.json
  - echo -e "@bit:registry=https://node.bit.dev\n//node.bit.dev/:_authToken=${BIT_TOKEN}\nalways-auth=true" > .npmrc
  - npm install
  rules:
  - if: '$CI_MERGE_REQUEST_TARGET_BRANCH_NAME == "master"'
  cache:
    key: node_modules
    paths:
      - node_modules/
    policy: push
  tags:
  - docker

test:
  stage: test
  image:
    name: atlassianlabs/docker-node-jdk-chrome-firefox
  script:
  - echo "Running tests"
  - npm test
  artifacts:
    paths:
      - junit/report.xml
      - coverage
    reports:
      junit: junit/report.xml
  coverage: /Statements.*?(\\d+(?:\\.\\d+)?)%/
  rules:
  - if: '$CI_MERGE_REQUEST_TARGET_BRANCH_NAME == "master"'
  cache:
    key: node_modules
    paths:
      - node_modules/
    policy: pull
  tags:
  - docker

code-quality:
  stage: cq
  script:
    - echo "Launching code quality tests"
  rules:
    - if: '$CI_MERGE_REQUEST_TARGET_BRANCH_NAME == "master"'
  tags:
#CHANGE TO DOCKER WHEN WE HAVE INTEGRATION TEST
    - shell

version:
  stage: version
  image: iotaltairacr.azurecr.io/dev/iot/common/docker/gitlab-semver:v1.0.0
  script:
  - python3 /version-update/version-update.py
  rules:
    - if: '$CI_COMMIT_REF_NAME == "master"'
  tags:
    - docker

build:
  stage: build
  image:
    name: node:erbium
  script:
  - echo "A WIP pipeline"
  - echo "**************"
  - echo ""
  - echo "***************************** installing deps for the project and building the app"
  - echo -e "@bit:registry=https://node.bit.dev\n//node.bit.dev/:_authToken=${BIT_TOKEN}\nalways-auth=true" > .npmrc
  - rm -rf node_modules && rm package-lock.json
  - npm install
  - npm run build-storybook
  artifacts:
    paths:
    - ./storybook-static
  rules:
  - if: '$CI_COMMIT_REF_NAME == "master"'
  tags:
  - docker

package:
  stage: package
  script:
  - echo "***************************** moving static content to be serverd by Nginx"
  - TAG=$(git describe --tags --abbrev=0)
  - rm -rf /tmp/storybook-static
  - mv ./storybook-static /tmp
  - echo "***************************** pulling changes from the Packer repo"
  - git -C /home/gitlab-runner/packer pull https://$DEPLOYERU:$DEPLOYERP@carritosdev.carriots.com/devops/kubernetes-and-containers/packer.git
  - cd /home/gitlab-runner/packer && git fetch --all && git reset --hard origin/master
  - echo "***************************** creating Docker image"
  - sed -i "s/__CI_COMMIT_SHORT_SHA__/$TAG/g" /home/gitlab-runner/packer/2020-smartworks-webcomponents.json
  - docker login -u $REGROU -p $REGROP $REGSRV
  - cd /home/gitlab-runner/packer && packer build 2020-smartworks-webcomponents.json
  - echo ""
  rules:
  - if: '$CI_COMMIT_REF_NAME == "master"'
  tags:
  - shell

deploy:
  stage: deploy
  script:
  - echo "***************************** deploying to K8s"
  - TAG=$(git describe --tags --abbrev=0)
  - docker login -u $REGROU -p $REGROP $REGSRV
  - echo "Going to deploy smartworks-webcomponents:$TAG"
  - kubectl -n dev-iot set image deployment/webcomponents webcomponents=iotaltairacr.azurecr.io/dev/iot/common/packer/smartworks-webcomponents:$TAG --record
  rules:
  - if: '$CI_COMMIT_REF_NAME == "master"'
  tags:
  - shell

integration-test:
  stage: int
  script:
    - echo "Launching integration tests"
  rules:
    - if: '$CI_COMMIT_REF_NAME == "master"'
#CHANGE TO DOCKER WHEN WE HAVE INTEGRATION TEST
  tags:
    - shell
`;

export const selectMenuItems = [
  {
    "id": "1",
    "label": "Option 1",
    "submenu": [
      {
        "id": "1_1",
        "label": "Option 1"
      },
      {
        "id": "1_2",
        "label": "Option 2"
      },
      {
        "id": "1_3",
        "label": "Option 3"
      }
    ]
  },
  {
    "id": "2",
    "label": "Option 2",
    "submenu": [
      {
        "id": "2_1",
        "label": "Option 1",
        "submenu": [
          {
            "id": "2_1_1",
            "label": "Option 1"
          },
          {
            "id": "2_1_2",
            "label": "Option 2"
          }
        ]
      },
      {
        "id": "2_2",
        "label": "Option 2"
      },
      {
        "id": "2_3",
        "label": "Option 3"
      }
    ]
  }
]