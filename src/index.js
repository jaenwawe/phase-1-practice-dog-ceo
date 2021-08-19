const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


console.log(imgUrl)
console.log('hello')


const getDogImgs = () => {
    fetch(imgUrl)
    .then((res) => res.json())
    .then((dogImgData) => {
        const dogImgContainer = document.querySelector("#dog-image-container")    
        dogImgData.message.forEach((imgUrl) => {
            const dogImg = document.createElement('img')
            dogImg.src = imgUrl
            console.log(imgUrl)
            dogImgContainer.append(dogImg)
        })
    })
}



getDogImgs()


const getBreeds = () => {
    fetch(breedUrl)
    .then((res) => res.json())
    .then((breedData) => { 
        console.log(breedData.message)

        const dogImgContainer = document.querySelector("#dog-breeds")
        console.log(breedData)
        const arrayBreeds =  Object.keys(breedData.message)
        console.log(arrayBreeds)
        const breedUL =  document.querySelector("#dog-breeds")
        console.log(breedUL)

        arrayBreeds.forEach( (dogType) => {
            // console.log(dogType)
            const breedLi = document.createElement("li")
     
            breedLi.innerText = dogType
            // console.log(breedLi)
            breedUL.append(breedLi) 

           

        } )
        //breedData.  
  


    })
}

//when dropdown event listener on form  click?
// = letter  filter key[0] by leter








//     .then((breedData) => { 
//         (breedData) => {

//             const dogImgContainer = document.querySelector("#dog-breeds")            
//             breedData.message.forEach((breedData) =>  {
//             const breedImg = document.createElement(`ul`)
//                 breedImg.id = `${breedData.message}`
//                 breedImg.src = breedUrl
//                 breedImg.log(breedUrl)
//                 console.log(breedData)
//                 dogImgContainer.append(breedImg)

//             })
//         })
//     }

// }
    
    getBreeds()   

    //brainstoriming on the eventlistener.  k  
    // need the event e.g. 
    // arrayBreeds.filter(arrayBreeds[0][0] = '${letter}')
    // onchange="myFunction()
    // https://www.w3schools.com/jsref/event_onchange.asp