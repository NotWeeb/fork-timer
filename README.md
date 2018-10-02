# fork-timer
A timer that forks a process and emits an event.
1.0.4 creates a new fork for every timer, it then disconnects from that fork and just repeats that process.

## Installation
Install by running `npm install fork-timer --save`

## Usage

```javascript
const Timeout = require('fork-timer');

const timeout = new Timeout(420); 

timeout.once('complete', time => {
    console.log("Your timeout is complete! It took: " + time + " milliseconds");
});
```
