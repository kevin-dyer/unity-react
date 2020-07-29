/*Import this mock thing data to populate things table and column editor
import {
  //mock data for things table
  thingData,
  visibleThingColumns
  thingsKeyExtractor,

  //mock data for things column editor
  selectedThingColumns,
  allThingColumns,
  thingColumnButtonProps
} from '@bit/smartworks.unity-react.mock-data'

//Things Table Example
<UnityTable
  noTopBorder={true}
  isLoading={false}
  data={thingData}
  selectable={true}
  emptyText={'No devices found'}
  filter={''}
  keyExtractor={thingsKeyExtractor}
  columns={visibleThingColumns}
/>

//Things Column Editor Example
<UnityColumnEditor
  selectedColumns={selectedThingColumns}
  columns={allThingColumns}
  buttonProps={thingColumnButtonProps}
/>

*/


//data property to pass into UnityTable
export const thingData = [
  {
    "account": "kdyer3031",
    "actions": {},
    "description": "my thing",
    "events": {},
    "href": "/things/01ed9ejjntjb4d21nye3vkfkv2",
    "id": "https://api.dev.altairsc.com/things/01ed9ejjntjb4d21nye3vkfkv2",
    "links": [
      {
        "href": "/things/01ed9ejjntjb4d21nye3vkfkv2/properties",
        "rel": "properties"
      },
      {
        "href": "/things/01ed9ejjntjb4d21nye3vkfkv2/actions",
        "rel": "actions"
      },
      {
        "href": "/things/01ed9ejjntjb4d21nye3vkfkv2/events",
        "rel": "events"
      }
    ],
    "properties": {},
    "title": "test thing"
  },
  {
    "account": "kdyer3031",
    "actions": {
      "run-stats": {
        "description": "Start sending statistics/metrics as events on an interval",
        "input": {
          "properties": {
            "interval": {
              "type": "integer"
            }
          },
          "type": "object"
        },
        "links": [
          {
            "href": "/things/01ed9f1x90mczn674cp4118bqj/actions/run-stats"
          }
        ],
        "title": "Run statistics/metrics gathering"
      },
      "send-kubectl": {
        "description": "Send a kubectl command to the cluster. Command must be an array of words",
        "input": {
          "properties": {
            "arguments": {
              "type": "array"
            },
            "command": {
              "type": "string"
            },
            "correlationId": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "links": [
          {
            "href": "/things/01ed9f1x90mczn674cp4118bqj/actions/send-kubectl"
          }
        ],
        "title": "Send kubectl"
      },
      "stop-stats": {
        "description": "Stop sending statistics/metrics as events",
        "input": {},
        "links": [
          {
            "href": "/things/01ed9f1x90mczn674cp4118bqj/actions/stop-stats"
          }
        ],
        "title": "Stop statistics/metrics gathering"
      }
    },
    "description": "A great cluster",
    "events": {
      "deployments-stats": {
        "data": {
          "type": "array"
        },
        "description": "",
        "links": [
          {
            "href": "/things/01ed9f1x90mczn674cp4118bqj/events/deployments-stats"
          }
        ],
        "title": "Statistics/metrics for each deployment in the cluster"
      },
      "kubectl-logs": {
        "data": {
          "type": "object"
        },
        "description": "Final response of kubectl command",
        "links": [
          {
            "href": "/things/01ed9f1x90mczn674cp4118bqj/events/kubectl-logs"
          }
        ],
        "title": "Kubectl command is done"
      },
      "nodes-stats": {
        "data": {
          "type": "array"
        },
        "description": "",
        "links": [
          {
            "href": "/things/01ed9f1x90mczn674cp4118bqj/events/nodes-stats"
          }
        ],
        "title": "Statistics/metrics for each node in the cluster"
      }
    },
    "href": "/things/01ed9f1x90mczn674cp4118bqj",
    "id": "https://api.dev.altairsc.com/things/01ed9f1x90mczn674cp4118bqj",
    "links": [
      {
        "href": "/things/01ed9f1x90mczn674cp4118bqj/properties",
        "rel": "properties"
      },
      {
        "href": "/things/01ed9f1x90mczn674cp4118bqj/actions",
        "rel": "actions"
      },
      {
        "href": "/things/01ed9f1x90mczn674cp4118bqj/events",
        "rel": "events"
      }
    ],
    "properties": {
      "build-configuration": {
        "description": "Latest build configuration applied",
        "links": [
          {
            "href": "/things/01ed9f1x90mczn674cp4118bqj/properties/build-configuration"
          }
        ],
        "title": "Build configuration",
        "type": "string"
      },
      "master_node": {
        "links": [
          {
            "href": "/things/01ed9f1x90mczn674cp4118bqj/properties/master_node"
          }
        ],
        "title": "Master node",
        "type": "string"
      },
      "status": {
        "description": "Status Cluster",
        "links": [
          {
            "href": "/things/01ed9f1x90mczn674cp4118bqj/properties/status"
          }
        ],
        "title": "Status",
        "type": "string"
      }
    },
    "title": "Live demo for q2"
  },
  {
    "@type": "cluster",
    "account": "kdyer3031",
    "actions": {
      "run-stats": {
        "description": "Start sending statistics/metrics as events on an interval",
        "input": {
          "properties": {
            "interval": {
              "type": "integer"
            }
          },
          "type": "object"
        },
        "links": [
          {
            "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/actions/run-stats"
          }
        ],
        "title": "Run statistics/metrics gathering"
      },
      "send-kubectl": {
        "description": "Send a kubectl command to the cluster. Command must be an array of words",
        "input": {
          "properties": {
            "arguments": {
              "type": "array"
            },
            "command": {
              "type": "string"
            },
            "correlationId": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "links": [
          {
            "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/actions/send-kubectl"
          }
        ],
        "title": "Send kubectl"
      },
      "stop-stats": {
        "description": "Stop sending statistics/metrics as events",
        "input": {},
        "links": [
          {
            "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/actions/stop-stats"
          }
        ],
        "title": "Stop statistics/metrics gathering"
      }
    },
    "description": "kd cluster",
    "events": {
      "deployments-stats": {
        "data": {
          "type": "array"
        },
        "description": "",
        "links": [
          {
            "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/events/deployments-stats"
          }
        ],
        "title": "Statistics/metrics for each deployment in the cluster"
      },
      "kubectl-logs": {
        "data": {
          "type": "object"
        },
        "description": "Final response of kubectl command",
        "links": [
          {
            "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/events/kubectl-logs"
          }
        ],
        "title": "Kubectl command is done"
      },
      "nodes-stats": {
        "data": {
          "type": "array"
        },
        "description": "",
        "links": [
          {
            "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/events/nodes-stats"
          }
        ],
        "title": "Statistics/metrics for each node in the cluster"
      }
    },
    "href": "/things/01ed9f702g9dsnsg5khnj2k9pw",
    "id": "https://api.dev.altairsc.com/things/01ed9f702g9dsnsg5khnj2k9pw",
    "links": [
      {
        "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/properties",
        "rel": "properties"
      },
      {
        "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/actions",
        "rel": "actions"
      },
      {
        "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/events",
        "rel": "events"
      }
    ],
    "properties": {
      "build-configuration": {
        "description": "Latest build configuration applied",
        "links": [
          {
            "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/properties/build-configuration"
          }
        ],
        "title": "Build configuration",
        "type": "string"
      },
      "master_node": {
        "links": [
          {
            "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/properties/master_node"
          }
        ],
        "title": "Master node",
        "type": "string"
      },
      "status": {
        "description": "Status Cluster",
        "links": [
          {
            "href": "/things/01ed9f702g9dsnsg5khnj2k9pw/properties/status"
          }
        ],
        "title": "Status",
        "type": "string"
      }
    },
    "title": "Test Cluster",
    "status": "connected"
  }
]

//columns property to pass into UnityTable
export const visibleThingColumns = [
  {
    "key": "title",
    "label": "Title"
  },
  {
    "key": "description",
    "label": "Description"
  },
  {
    "key": "id",
    "label": "ID"
  },
  {
    "key": "status",
    "label": "Status"
  }
]

//keyExtractor property of UnityTable
export const thingsKeyExtractor = (datum, index) => {
  return datum.id
}


//columns property to pass into UnityColumnEditor
export const allThingColumns = [
  {
    "key": "title",
    "label": "Title"
  },
  {
    "key": "description",
    "label": "Description"
  },
  {
    "key": "id",
    "label": "ID"
  },
  {
    "key": "build-configuration",
    "label": "Build configuration"
  },
  {
    "key": "master_node",
    "label": "Master node"
  },
  {
    "key": "status",
    "label": "Status"
  }
]

//selectedColumns property of UnityColumnEditor
export const selectedThingColumns = [
  "title",
  "description",
  "id",
  "status"
]

const styles = {
  blackButton: {
    '--button-color': 'var(--black-text-color, #000)'
  },
}
export const thingColumnButtonProps = {
  style: styles.blackButton,
  type: 'borderless',
  label: 'Edit Columns'
}