 // define function to fetch data from backend
async function fetchData() { 
    let url = 'https://jsonplaceholder.typicode.com/users'; //  set url
    try {
        let response = await fetch(url); // fetch data asynchronusly
        return await response.json(); // return data in JSON format
    } 
    catch (error) {
        alert(error); // alert users in case of error
    }
}

// define function to render data to frontend
async function renderData() {
    let jsonData = await fetchData(); // await data and assign it to variable jsonData
    let html = ''; // initiate html to add to DOM
    // loop through each JSON element and assign to variable jsonData
    jsonData.forEach(user => {
        let htmlData = `<ul>
        <li><b>User ID:</b> ${user.id}</li>
        <li><b>Name:</b> ${user.name}</li>
        <li><b>Username:</b> ${user.username}</li>
        <li><b>Email:</b> ${user.email}</li>
        <li><b>Address:</b> ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</li>
        <li><b>Phone:</b> ${user.phone}</li>
        <li><b>Website:</b> http://${user.website}</li>
        <li><b>Comapany:</b> ${user.company.name}</li>
        </ul><hr />`;
        html += htmlData; // populate html variable with each json data in html data
    });
    
    document.querySelector('#container').innerHTML = html; // add final html data to DOM
}

renderData(); // call renderData function