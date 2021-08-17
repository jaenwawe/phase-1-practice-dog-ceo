const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then ((r) => r.json())  //get .json objects from website
    .then((dogBreed) => {     // are we mapping the .json??
    console.log(dogBreed)
    console.log(dogBreed[0])
    let dogImg = document.createElement("img") //create img on DOM
    dogImg.src= dogBreed.message[0]; //add url to img src
    console.log(dogImg) 
    document.body.append(dogImg) //append the image to the body
    })


