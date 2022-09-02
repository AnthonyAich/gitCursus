fetch('https://api.github.com/repos/anthonyaich/gitCursus/commits')
    .then(response => response.json())
    .then(data => {
        const gitInfo = document.querySelector('[data-git-info]');
        gitInfo.innerHTML = new Date(data[0].commit.author.date).toLocaleDateString() + " &nbsp;<b>By:</b> " + data[0].commit.author.name;
    }).catch(error => console.log(error));
