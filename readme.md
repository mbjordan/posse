# posse

### Fork your hapi app!

A hapi plugin for utilizing Node's clustering capabilities.

[![Build Status](https://travis-ci.org/mbjordan/posse.svg?branch=master)](https://travis-ci.org/mbjordan/posse)
[![npm version](https://badge.fury.io/js/posse.svg)](https://www.npmjs.com/package/posse)
[![Dependency Status](https://david-dm.org/mbjordan/posse.svg)](https://david-dm.org/mbjordan/posse)

```javascript
server.register(require('posse'), (err) => {
    server.plugins.posse.ifWorker(() => {
        server.start(startHandler);
    });
});
```

hapi forking!
