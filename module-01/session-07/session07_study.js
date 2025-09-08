
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Success");
  else reject("Error");
});

myPromise
  .then(res => console.log(res))     // Success
  .catch(err => console.log(err))    // Error (if rejected)
  .finally(() => console.log("Done"));
// Output: Success → Done