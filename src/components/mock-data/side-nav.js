export const sideNavItems =  {
  "top": [
    {
      "key": "OVERVIEW",
      "label": "Overview",
      "icon": "unity:home",
      "short": false,
      "children": []
    },
    {
      "key": "MANAGE",
      "label": "Manage Things",
      "icon": null,
      "short": false,
      "children": [
        {
          "key": "PRODUCTION",
          "label": "Your Things",
          "icon": "social:domain",
          "short": false,
          "children": []
        }
      ]
    },
    {
      "key": "EDGE_ORCHESTRATION",
      "label": "Edge Orchestration",
      "icon": "unity:server",
      "short": false,
      "children": [
        {
          "key": "CLUSTER_LIST",
          "label": "Clusters",
          "icon": "unity:db",
          "short": false,
          "children": []
        },
        {
          "key": "TASKS",
          "label": "Tasks",
          "icon": "unity:jobs",
          "short": false,
          "children": []
        }
      ]
    },
    {
      "key": "STREAMS",
      "label": "Stream Processing",
      "icon": "unity:line_chart",
      "short": false,
      "children": [
        {
          "key": "APPLICATIONS",
          "label": "Applications",
          "icon": "unity:pages",
          "short": false,
          "children": []
        },
        {
          "key": "DATA_SOURCES",
          "label": "Data Sources",
          "icon": "hardware:toys",
          "short": false,
          "children": []
        },
        {
          "key": "DATA_PRODUCERS",
          "label": "Data Producers",
          "icon": "hardware:sim-card",
          "short": false,
          "children": []
        },
        {
          "key": "MONITORING",
          "label": "Monitoring",
          "icon": "icons:track-changes",
          "short": false,
          "children": []
        },
        {
          "key": "SCHEDULER",
          "label": "Scheduler",
          "icon": "unity:schedule",
          "short": false,
          "children": []
        },
        {
          "key": "STREAM_PARAMETERS",
          "label": "Parameters",
          "icon": "unity:cube",
          "short": false,
          "children": []
        }
      ]
    },
    {
      "key": "DATA_VIZ",
      "label": "Real Time Visualization",
      "icon": "unity:surface_3d_chart",
      "short": false,
      "children": [
        {
          "key": "WORKBOOKS",
          "label": "Workbooks",
          "icon": "unity:pages",
          "short": false,
          "children": []
        },
        {
          "key": "ALERTS",
          "label": "Alerts",
          "icon": "unity:notification",
          "short": false,
          "children": []
        },
        {
          "key": "VIS_PARAMETERS",
          "label": "Parameters",
          "icon": "unity:cube",
          "short": false,
          "children": []
        }
      ]
    }
  ],
  "bottom": [
    {
      "key": "SETTINGS",
      "label": "Settings",
      "icon": "unity:gear",
      "short": false,
      "children": []
    },
    {
      "key": "DOCS",
      "label": "Documentation",
      "icon": "unity:document",
      "short": false,
      "children": []
    },
    {
      "key": "LOGOUT",
      "label": "Log Out",
      "icon": "power-settings-new",
      "short": false,
      "children": []
    }
  ]
}

//key of selected nav item
export const sideNavSelected =  "PRODUCTION"

//style property
export const sideNavStyle =  {
  "--global-nav-menu-shadow": "none"
}