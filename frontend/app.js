const body = document.querySelector('body');
const h1 = document.querySelector('body h1');
fetch('http://127.0.0.1:8000/memes')
.then(res => res.json())
.then(data => 
   {
    data.forEach((u)=>

    {
h6.innerHTML = u[0].name;
h6.innerHTML = u[0].caption;
// Create an Image.
const img = document.createElement('url');
body.appendChild(img);
// Set the image source to an image url from the API data.
img.src = u[0].url;
   });
});

