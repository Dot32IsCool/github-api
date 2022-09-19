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
		div.innerHTML = `
			<h3>
				<span class="count">${index}.</span> ${capitalizeFirstLetter(repo.name.replaceAll("-", " "))}
			</h3> 
			<p>⭐️ ${repo.stargazers_count} stars</p>
			<p>${capitalizeFirstLetter(repo.description)}</p> 
			<p>[${repo.topics.toString().replaceAll(",", ", ")}]</p>
		`;
		main.appendChild(div);
		main.appendChild(document.createElement('hr'));
		index++;
	}
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
