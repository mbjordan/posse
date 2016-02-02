# posse

```javascript
server.register(require('posse'), function(err) {
    if (server.plugins.posse.isWorker) {
        server.start(startHandler);
    }
});
```
