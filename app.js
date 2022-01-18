const headerContainer = document.getElementById('header-container');
const expertiseContainer = document.getElementById('expertise-container');


      
fetch(`https://fa-frontend-code-test.herokuapp.com/getdata`)
	.then((response) => {
		return response.json();
	})
	.catch(error => {
		console.log(error)
	})
	.then((json) => {
	console.log(json)
		const title = json.data.heroBanner.title
		const paragraph = json.data.heroBanner.paragraph
		const video = json.data.heroBanner.videoUrl
		const profiles = json.data.profiles

		console.log(profiles)
    

	headerContainer.innerHTML += `
	<div class="header-wrapper">
		<video class="header-video" autoPlay>
			<source src="${ video }" type="video/mp4">
		</video>
	<div class="header-text-wrapper">
		<h1 class="header-title">${ title }</h1>
		<p class="header-text">${ paragraph }</p>
	</div>
	</div>
	`

	profiles.forEach((profile) => {
		expertiseContainer.innerHTML += `
		<div class="profile-card">
			<img class="profil-image" src="${ profile.imgUrl }">
			<div class="profile-text-wrapper">
				<h2 class="name-text">${ profile.firstName } ${ profile.lastName }</h2>
				<p class="expertise-text">${ profile.expertise }</p>
			</div>
		</div>
		`
	})

});


