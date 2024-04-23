import { characters } from './02-data.js';

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("userInput");
    const searchButton = document.getElementById("searchButton");
    const resultsContainer = document.getElementById("resultsContainer");

    function displayResults(results) {
        let html = '';
        
        if (results.length === 0) {
            html = '<div class="alert alert-warning">No characters found.</div>';
        } else {
            results.forEach(character => {
                html += `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">Height: ${character.height} cm</p>
                            <p class="card-text">Birth Year: ${character.birth_year}</p>
                        </div>
                    </div>
                `;
            });
        }

        resultsContainer.innerHTML = html;
    }

    function searchCharacters(query) {
        const results = characters.filter(character => 
            character.name.toLowerCase().includes(query.toLowerCase())
        );

        displayResults(results);
    }

    searchButton.addEventListener("click", function () {
        const query = searchInput.value;
        searchCharacters(query);
    });
});
