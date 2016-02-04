# posse

### Fork your hapi app!

A hapi plugin for easily utilizing Node's [cluster](https://nodejs.org/dist/latest-v4.x/docs/api/cluster.html)ing capabilities.

[![Build Status](https://travis-ci.org/mbjordan/posse.svg?branch=master)](https://travis-ci.org/mbjordan/posse)
[![npm version](https://badge.fury.io/js/posse.svg)](https://www.npmjs.com/package/posse)
[![Dependency Status](https://david-dm.org/mbjordan/posse.svg)](https://david-dm.org/mbjordan/posse)

```javascript
/* ... */

server.register(require('posse'), (err) => {
    if (err){
        throw err;
    }

    server.plugins.posse.ifWorker(() => {
        server.start(/* ... */);
    });
});

/* ... */
```

### API

posse reveals two control methods, both of which are available via `server.plugins.posse.{method}`:

```javascript
.ifMaster(callbackFn)
```

If the current instance is the master, `callbackFn` will be called. This will only occur once.

```javascript
.ifWorker(callbackFn)
```

If the current instance is a worker, `callbackFn` will be called.

License MIT... hapi forking!
