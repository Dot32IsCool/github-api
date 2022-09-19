let main = document.querySelector('main');
main.innerHTML = "Getting informatgion from the Github API";

fetch('https://api.github.com/users/Dot32IsCool/repos?per_page=100')
.then(response => response.json())
.then(data => {
	main.innerHTML = '';

	data.sort((a, b) => { 
		return b.stargazers_count - a.stargazers_count;
	});

	let index = 1
	for (let repo of data) {
		let div = document.createElement('div');
		div.innerHTML = `<h3><span class="count">${index}.</span> ${repo.name}</h3> <p>${repo.description}</p> <p>${repo.stargazers_count} stars, tags: ${repo.topics}</p>`;
		main.appendChild(div);
		main.appendChild(document.createElement('hr'));
		index++;
	}
});