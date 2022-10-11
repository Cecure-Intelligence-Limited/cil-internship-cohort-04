const URL =
	"https://jsonplaceholder.typicode.com/users";

let output = `<h1>Users</h1>`;

const getUsers = async () => {
	try {
		let res = await fetch(URL);
		let data = await res.json();

		data.forEach((user) => {
			output += `
				<div class="container">
					<p class="products-title">
						Username: <span>${user.username}</span>
					</p>

					<p>
						Name: <span>${user.name}</span>
					</p>

					<p>
						Email: <span>${user.email}</span>
					</p>

					<p>
						Address: <span>${user.address.suite} ${user.address.street} ${user.address.city}</span>
					</p>

					<p>
						Phone Number: <span>${user.phone}</span>
					</p>

					<p>
						Website: <span>${user.website}</span>
					</p>
		
					<div>
						<p>
							Comapny Name: <span>${user.company.name}</span>
						</p>

						<p>
							Company Catch-phrase: <span>${user.company.catchPhrase}</span>
						</p>

						<p>
							Company BS: <span>${user.company.bs}</span>
						</p>
					</div>
				</div>
			`;
		});
		document.getElementById("output").innerHTML =
			output;

		console.log("Users", data);
	} catch (err) {
		console.log(err);
	}
};

getUsers();