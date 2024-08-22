function book(){
    window.location.href="travel_recommendation.html" //in development
}

const btnSearch = document.getElementById('search-btn')

function searchJSON() {
    const input = document.getElementById('input-search').value.toLowerCase()
    const resultDiv = document.getElementById('div-result')
    resultDiv.innerHTML = ''
    let resCountries = []
    let results = []

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if (input == 'country' || input == 'countries'){
            resCountries = data.countries.slice(0,2)
            resultDiv.innerHTML += `<h2>${resCountries[0].cities[0].name}</h2>`
            resultDiv.innerHTML += `<img src="${resCountries[0].cities[0].imageUrl}">`
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${resCountries[0].cities[0].description}</p>`
           
            resultDiv.innerHTML += `<h2>${resCountries[1].cities[0].name}</h2>`
            resultDiv.innerHTML += `<img src="${resCountries[1].cities[0].imageUrl}">`
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${resCountries[1].cities[0].description}</p>`
            
        } else if (input == 'temple' || input == 'temples'){
            results = data.temples.slice(0,2)
        } else if (input == 'beach' || input == 'beaches'){
            results = data.beaches.slice(0,2)
        } else {
            resultDiv.innerHTML = '<strong>Please, enter a valid keyword: countries, temples or beaches.</strong>'
        }
        results.forEach(item => {
            displayRecomm(resultDiv, item)
        })
        }
      )
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = '<strong>An error occurred while fetching data.</strong>';
      });
  }

    function displayRecomm(resultDiv, item){
        resultDiv.innerHTML += `<h2>${item.name}</h2>`
        resultDiv.innerHTML += `<img src="${item.imageUrl}" alt="${item.name}">`
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${item.description}</p>`
  }

  function clearSearch(){
        const resultDiv = document.getElementById('div-result')
        resultDiv.innerHTML = ''
        
  }

