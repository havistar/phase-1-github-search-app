const form = document.getElementById("github-form")

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const search = document.getElementById("search").value

    const originalName = search.split(' ').join('')

alert(originalName)

    function getData(username) {
        fetch(`https://api.github.com/users${username}`, {
            method: 'GET'
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        })
        .then(res => res.json())
        .then(user => console.log(user))

        document.getElementById("result").innerHTML = `
        <at arget="_blank" href="https://www.github.com/${originalName}"><img src="${data.avatar_url}"/></a>`
    }
})