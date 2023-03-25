const apiRequest = path => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
  .then(res => {
    if(res.ok) {
      return res.json(); 
    } else {
      throw new Error('Error');
    }
  })
  .catch(error => console.log(`Could not fetch because: ${error}`))
}

const resolvePromise = path => {
  return apiRequest(path);
};

export default resolvePromise;