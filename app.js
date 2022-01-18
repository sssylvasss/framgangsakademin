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
	<h1>${ title }</h1>
	<p>${ paragraph }</p>
	<video width="320" height="240" autoPlay>
  <source src="${ video }" type="video/mp4">
	</video>
	`

	profiles.forEach((profile) => {
		expertiseContainer.innerHTML += `
		<img src="${ profile.imgUrl }">
		<p>${ profile.firstName } ${ profile.lastName }</p>
		<p>${ profile.expertise }</p>
		`
	})

});


