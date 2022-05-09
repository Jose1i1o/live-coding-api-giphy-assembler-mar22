const apiKey = "EhdRmrgVkNVGNw9aYoKS90hAJgBbPYz5";

const fetchApi =
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


// arrow function
fetchApi
.then(response => response.json())
.then(data => {
  const title = data.data.title;
  const url = data.data.images.original.url;

  const titleElement = document.createElement("h2");
  const img = document.createElement("img");

  titleElement.textContent = title;
  img.src = url;

  const printTitle = document.getElementById("title");
  const printImage = document.getElementById("posts");

  printTitle.append(titleElement);
  printImage.append(img);
})
.catch(error => console.log(error));

// with functions and not arrow functions
fetchApi
.then(function (response) {
  return response.json();
})
.then(function (data) {
  const title = data.data.title;
  const url = data.data.images.original.url;

  const titleElement = document.createElement("h2");
  const img = document.createElement("img");

  titleElement.textContent = title;
  img.src = url;

  const printTitle = document.getElementById("title");
  const printImage = document.getElementById("posts");

  printTitle.append(titleElement);
  printImage.append(img);
})
.catch(function (error) {
  console.log(error);
});

// const getImage = async () => { // async returns the value by default in a promise

//   try {

//   const apiKey = 'EhdRmrgVkNVGNw9aYoKS90hAJgBbPYz5';
//   const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); // if you hover over the petition you will see it´s a response type of variable. So it will wait for the fetch to be done, before passing to the next argument, function, variable etc.
//   const { data } = await response.json(); // wait for the response to be completed

//   const { url } = data.images.original;
//   console.log(url);
//   const img = document.createElement('img');
//   img.src = url;

//   document.body.append(img)

//   } catch (error) {
//     console.error(error);
//   }
// }

// getImage();