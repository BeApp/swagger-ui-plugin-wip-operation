# Introduction

This [Swagger-UI](https://github.com/swagger-api/swagger-ui) plugin allows to mark some path operation as still Work In Progress.

It works by wrapping the `operation` component with a div and applying custom CSS.

# Installation

```
npm i swagger-ui-plugin-wip-operation
```

# Usage

Add the plugin in the configuration object of SwaggerUI, and provides a list of sections like this :

```js
import { WipOperationPlugin } from 'swagger-ui-plugin-wip-operation';

SwaggerUI({
  // ...
  plugins: [
    WipOperationPlugin
  ]
})
```

To mark an operation as WIP, you just have to add `x-wip: true` field on your OpenAPI spec :

```yaml
openapi: "3.0.1"
# ...
paths:
  /my-wip-endpoint:
    get:
      x-wip: true
      summary: "An endpoint still in specification"
      responses:
        "200":
          description: "Successful operation"
```
