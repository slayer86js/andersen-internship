function delay(ms, value) {
 return new Promise(resolve => 
        setTimeout(() => resolve(value), ms));
}
delay(1000, 500).then(value => console.log(`Done with ${value}`));