class CatApi {
  static getAllCats() {
    return fetch('http://localhost:5000/data').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
  export default CatApi;
