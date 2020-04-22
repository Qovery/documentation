---
last_modified_on: "2020-04-22"
title: Routing
description: "Learn how to configure Routing on Qovery"
---

import Alert from '@site/src/components/Alert';

Qovery allows you to configure network routing in your projects. Here is how to do it in the Qovery configuration file:
- create and name a `router`
- create associated route paths to the application

```yml title=".qovery.yml" {6-13}
application:
  name: myapp
  project: test
  publicly_accessible: true
...
routers:
  - name: backend-router
    dns: api.mycompany.com
    routes:
      - application-name: myapp
        paths:
          - \/api\/v1\/user\/\w+\/.*
          - \/api\/v1\/stat\/\w+\/.*
```

<Alert>

**Important**

- you can specify multiple routers
- you can specify multiple routes to different applications of the same project
- you can define multiple paths

**Any other application of the same project can create rules for other applications**

</Alert>

<Alert type="success">

Qovery takes care of duplicated routes and deny the latest created one to avoid unintended overrides.

</Alert>



