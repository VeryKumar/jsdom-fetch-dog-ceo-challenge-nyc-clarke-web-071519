document.addEventListener("DOMContentLoaded", event => {
  console.log("%c HI", "color: firebrick");

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => putJsObjectOnTheDom(data));

  function putJsObjectOnTheDom(data) {
    console.log("dog data", data);

    let imgParent = document.querySelector("#dog-image-container");

    data.message.forEach(dogUrl => {
      var imgElement = document.createElement("IMG");
      imgElement.alt = "dogImg";
      imgElement.src = dogUrl;

      imgParent.appendChild(imgElement);
    });

    // imgElement.innerHTML =  <p>"http/url.xom"</p>
  }

  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then(data => data.json())
    .then(parsedData => putBreedsOnTheDom(parsedData));

  function putBreedsOnTheDom(poop) {
    //   console.log("Breeds Data", poop.message);
    let breedParent = document.querySelector("#dog-breeds");
    //find where we wanna place
    //   console.log("breedParent", breedParent);
    const keys = Object.keys(poop.message);
    //   console.log("keys", keys);

    keys.forEach(breedUrl => {
      //create element we wanna place
      var li = document.createElement("LI");
      li.innerText = breedUrl;
      breedParent.append(li);
      //fill element with stuff we want
    });
  }

  function addColors() {
    breedParent = document.querySelector("#dog-breeds");
    breedParent.addEventListener("click", event => {
      if (event.target.tagName === "LI") {
        //   console.log(event.target.tagName);
        event.target.classList.add("clicked");
        // console.log(event.target.classList);
      }
    });
  }

  //   addColors = () => {
  //     let breedParent = document.getElementById("dog-breeds");
  //     console.log(breedParent);
  //   };

  addColors();
});
