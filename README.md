# fork-timer
A timer that forks a process and emits an event.

## Installation
Install by running `npm install fork-timer`

## Usage

```javascript
const Timeout = require('fork-timer');

const timeout = new Timeout(420); 

timeout.once('complete', time => {
    console.log("Your timeout is complete! It took: " + time + " milliseconds");
});
```
