// @ts-nocheck
const data = [
	{
		name: 'Nirav Bhuva',
		age: 26,
		gender: 'male',
		lookingfor: 'female',
		location: 'Merseburg',
		image: 'https://randomuser.me/api/portraits/men/26.jpg'
	},
	{
		name: 'Penil Tejani',
		age: 27,
		gender: 'male',
		lookingfor: 'female',
		location: 'Merseburg',
		image: 'https://randomuser.me/api/portraits/men/27.jpg'
	},
	{
		name: 'Mayur Savaliya',
		age: 28,
		gender: 'male',
		lookingfor: 'female',
		location: 'Halle',
		image: 'https://randomuser.me/api/portraits/men/30.jpg'
	},
	{
		name: 'Jen Smith',
		age: 31,
		gender: 'female',
		lookingfor: 'male',
		location: 'Merseburg',
		image: 'https://randomuser.me/api/portraits/women/82.jpg'
	}
];

const profiles = profileIterator(data);

// Call First Profile
nextProfile();

//next Event
document.getElementById('next')?.addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
	const currentProfile = profiles.next().value;

	if(currentProfile !== undefined) {
		document.getElementById('profileDisplay').innerHTML = `
		<ul class="list-group">
			<li class="list-group-item">Name: ${currentProfile.name}</li>
			<li class="list-group-item">Age: ${currentProfile.age}</li>
			<li class="list-group-item">Location: ${currentProfile.location}</li>
			<li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
		</ul>	
		`;
		
		document.getElementById('imageDisplay').innerHTML = `
		 <img src="${currentProfile.image}">`;
	} else {
		// No More Profiles
		window.location.reload();
	}
	} 

// Profile Iterator

function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function(){
			return nextIndex < profiles.length ? 
			{ value: profiles[nextIndex++], done: false} : 
			{done: true}
		}
	};

}