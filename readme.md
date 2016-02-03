# posse

### Fork your node app!

[![Build Status](https://travis-ci.org/mbjordan/posse.svg?branch=master)](https://travis-ci.org/mbjordan/posse)

```javascript
server.register(require('posse'), (err) => {
    if (server.plugins.posse.isWorker) {
        server.start(startHandler);
    }
});
```
