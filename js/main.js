document.getElementById('searchfield').addEventListener('input', search);

function search() {
    let input = document.getElementById('searchfield').value;
    document.getElementById('output').innerHTML = "";

    if (input.length >= 2) {
        for (i = 0; i < cities.length; i++) {
            if (cities[i].city.toUpperCase().indexOf(input.toUpperCase()) != -1 || cities[i].state.toUpperCase().indexOf(input.toUpperCase()) != -1) {
                let resultCity = cities[i].city;
                let resultState = cities[i].state;
                document.getElementById('output').innerHTML += "<li>" +
                    highlightText(resultCity, input) + " , " + highlightText(resultState, input) + " , population: " + cities[i].population + "</li>"
            }
        }
    }
}

function highlightText(text, search) {
    let re = new RegExp(search, 'ig');
    return text.replace(re, `<mark>${search}</mark>`);
}
