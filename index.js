// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const userID = document.querySelector(".id");
          userID.textContent = `user id :${data.id} `;
        document.body.append(userID);
      })
      .catch((error) => {
        let errors = document.querySelector(".error");        
        errors.textContent = error.message
        document.body.append(errors);
      });
  }
  