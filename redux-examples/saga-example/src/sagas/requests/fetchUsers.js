const url = "https://jsonplaceholder.typicode.com/ussers"

const fetchGetUsers = () => {
  return fetch(url, { method: "GET", })
    .then((response) => response.json())
    .catch((error) => { throw "Error Fetching the API!" })
}

export default fetchGetUsers