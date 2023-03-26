const apiRequest = path => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
  .then(res => {
    if(res.ok) {
      return res.json(); 
    } else {
      throw new Error(res.status);
    }
  });
}

export default apiRequest;