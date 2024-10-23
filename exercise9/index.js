// 1. PROMISE
function helloworld(){
    return newPromise((resolve) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    });
};

async function messages() {
    const msg = await helloworld();
    console.log(msg);
};
messages();



// 2. FETCH
function ambilDataUser() {
    fetch("https://reqres.in/api/users")
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        users.data.forEach((user) => {
          console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    })
    .catch((error) => {
        console.error('Terjadi Error saat mengambil data:', error);
    });
}
ambilDataUser();  



// 3. ASYNC AWAIT
async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const users = await response.json();
      users.data.forEach((user) => {
        console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
      });
    } catch (error) {
      console.error('Terjadi Error saat mengambil data:', error);
    }
}
ambilDataUser();



// 4. AXIOS
async function ambilDataUser() {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      response.data.data.forEach((user) => {
        console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
      });
    } catch (error) {
      console.error('Terjadi Error saat mengambil data:', error);
    }
}
ambilDataUser();