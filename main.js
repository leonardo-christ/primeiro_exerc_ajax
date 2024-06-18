document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.querySelector('.profile-avatar');
    const nameElement = document.querySelector('.profile-name');
    const usernameElement = document.querySelector('.profile-username');
    const reposElement = document.querySelector('.numbers-repos');
    const followersElement = document.querySelector('.numbers-followers');
    const followingsElement = document.querySelector('.numbers-followings');
    const linksElement = document.querySelector('.profile-link');

    fetch('https://api.github.com/users/leonardo-christ')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingsElement.innerText = json.following;
            linksElement.href = json.html_url;
        })
        .catch(function(error) {
            console.error('Houve um problema com a operação:', error);
        });
});