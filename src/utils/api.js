const BASEURL = "https://doodledash.herokuapp.com"
// const BASEURL ="http://localhost:4000/"

const API = {
    getTokenData: async (token) => {
      const response = await fetch(`${BASEURL}/verifytoken`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      return await response.json();
    },  
    login: async (username, password) => {
      const response = await fetch(`${BASEURL}/login`, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      return await response.json();
    },
  
    createUser: async (username, password) => {
      const response = await fetch(`${BASEURL}/api/users`, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      return await response.json();
    },
  
    getSingleUser: async (username) => {
      const response = await fetch(`${BASEURL}/api/users/${username}`);
      return await response.json();
    },
  
    getUsers: async () => {
      const response = await fetch(`${BASEURL}/api/users`);
      return await response.json();
    }
  };
   export default API