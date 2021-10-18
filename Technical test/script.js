console.log("hello js")

function fetchDogs() {

    fetch('https://api.thedogapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.data = data;

        });
}

function showDogNames() {
    var d1 = document.getElementById('example');
    d1.insertAdjacentHTML('afterend',
        `<div class="name">${this.data[5].name}</div>
        <div class="weight">Gewicht: ${this.data[5].weight.metric} kg</div>
        <div class="weight">Grootte: ${this.data[5].height.metric} cm</div>
    <img class="picture" src="${this.data[5].image.url}" alt="picture of a pokemon">
    
    `);
}



window.onload = function () {
    fetchDogs();
    setTimeout(showDogNames, 2000);
}