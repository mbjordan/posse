# posse

### Fork your node app!

```javascript
server.register(require('posse'), (err) => {
    if (server.plugins.posse.isWorker) {
        server.start(startHandler);
    }
});
```
