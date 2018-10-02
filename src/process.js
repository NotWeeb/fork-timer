setTimeout(() => {
    process.send('COMPLETE');
}, parseInt(process.env.TIMEOUT));