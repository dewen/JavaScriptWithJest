const myFunction = (t1, t2) => (resolve, reject) => {
  const doSuccessCallback = () => {
    // console.log('Play Time!');
    resolve('scheduled task done!');
  }
  const doFailedCallback = () => {
    console.log('No Play Time!');
    reject('Scheduled task failed here!');
  }
  setTimeout(doSuccessCallback, t1);
  // catch this first
  setTimeout(doFailedCallback, t2);
};

export {
  myFunction,
}