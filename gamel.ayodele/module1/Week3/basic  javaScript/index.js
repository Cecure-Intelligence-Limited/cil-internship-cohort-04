document.querySelector(".json").addEventListener('click', getProfile);


function getProfile() {
    fetch("http://jsonplaceholder.typicode.com/users")
        .then(function (response) { return (response.json()) })
        .then(function (data) {
            console.log(data);
            let output = `<h2>Users Profile</h2>`;
            data.forEach(function (user) {
                output += `
                            <ul>
                            <li> ID: ${user.id} </li>
                            <li> Name: ${user.name} </li>
                            <li> Email: ${user.email} </li>
                            <li> City: ${user.address.city} </li>
                            <li> Phone: ${user.phone} </li>
                            <li> Website: ${user.website} </li>
                            <li> Company Name: ${user.company.name} </li>
                             </ul>`
            }

            );
            document.querySelector(".text").innerHTML = output

        });
}
