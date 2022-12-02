function services (){

    const n = 4;

    for(let i = 1; i <= n; i++) {

        const url = `https://rickandmortyapi.com/api/character/1,183/${i}`;

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)

            let card = `            
        <div class="d-flex justify-content-around flex-wrap mt-4">
                <div class="card text-white bg-primary mb-3" style="width: 18rem">
                    <img src="${data.image}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${data.tittle}</h5>
                        <h6> ${data.price}</h6>
                        <p class="card-text">
                        ${data.description}
                        </p>
                        <a href="#" class="btn btn-warning">Go somewhere</a>
                    </div>
                </div>
        </div>
        `

            document.getElementById("card-container").innerHTML += card

        });

    }


}