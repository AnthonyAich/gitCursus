//fetchen api data GitHub
fetch('https://api.github.com/repos/anthonyaich/gitCursus/commits')
    .then(response => response.json())
    .then(data => {
        const gitInfo = document.querySelector('[data-git-info]');
        gitInfo.innerHTML = new Date(data[0].commit.author.date).toLocaleDateString() + " &nbsp;<b>By:</b> " + data[0].commit.author.name;
    }).catch(error => console.log(error));


// bash eerste woord geel maken
const bashClasses = document.querySelectorAll('.bash');
bashClasses.forEach(bashClass => {
    bashClass.innerHTML = bashClass.innerHTML.replace(/(\w+)/, '<span style="color: #ffd33d;margin-left:6px;">$1</span>');
});