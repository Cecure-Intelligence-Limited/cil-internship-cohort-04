let allProfile = document.querySelector(".profile-container")
allProfile.innerHTML = ''


const getUsers = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = response.json()
    return users
}

allProfile.addEventListener('click', (e)=>{
    if(e.target.id || e.target.parentNode.id ){
        if(e.target.className==="profile"){
        localStorage.setItem("id",JSON.stringify(e.target.id))
        }
        else{
            localStorage.setItem("id",JSON.stringify(e.target.parentNode.id))
        }
        location.replace("./user.html")
    }
})



const renderUsers = async ()=>{
    const users = await getUsers()
    console.log(users)

    users.forEach(user =>{
        const address = user.address
        const company = user.company

        allProfile.innerHTML +=` <div class="profile" id=${user.id}>
                        <p class="id"> ${user.id}</p>
                        <p class="name">name: ${user.name} </p>
                        <p class="username">username: ${user.username} </p>
                        <p class="email">email: ${user.email} </p>
                        <p class="address">address: ${address.street} </p>
                        <p class="phone">phone: ${user.phone} </p>
                        <p class="website">website: ${user.website} </p>
                        <p class="company">company: ${company.name} </p>
                    </div>`
    })
}


renderUsers()