const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8fafe80b3msh8fcf4188db4a911p1be6d8jsn7788696631b3',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=lost', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
            document.querySelector('.movies').innerHTML += movie;
            
        })
    })
	.catch(err => console.error(err));