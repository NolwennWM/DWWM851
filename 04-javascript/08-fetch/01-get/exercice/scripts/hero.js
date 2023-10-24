fetch('../hero.json')
  .then(response => response.json())
  .then(data => {
    const superHeroData = data; 

    
    const heroSelect = document.getElementById('hero-select');
    superHeroData.members.forEach(member => {
        const option = document.createElement('option');
        option.value = member.name;
        option.text = member.name;
        heroSelect.appendChild(option);
    });

   
    heroSelect.addEventListener('change', afficherCartesHeros);
    
  document.addEventListener('click', (event) => {
    if(event.target instanceof HTMLOptionElement) return
    console.log(event.target);
    const heroContainer = document.getElementById('hero-container');
    heroContainer.innerHTML = '';   
});

    function afficherCartesHeros() {
        const selectedHeroNames = Array.from(heroSelect.selectedOptions, option => option.value);
        const heroContainer = document.getElementById('hero-container');
        heroContainer.innerHTML = ''; 
      

        selectedHeroNames.forEach(heroName => {
            const selectedHero = superHeroData.members.find(member => member.name === heroName);
            if (selectedHero) {
                const heroCard = document.createElement('div');
                heroCard.style.border = "2px solid black"
                heroCard.classList.add('hero-card');
                heroCard.innerHTML = `
                    <h2>${selectedHero.name}</h2>
                    <p>Âge : ${selectedHero.age}</p>
                    <p>Identité secrète : ${selectedHero.secretIdentity}</p>
                    <p>Pouvoirs :<br> ${selectedHero.powers.join('<br> ')}</p>
                `;
                heroContainer.appendChild(heroCard);
            }
         
        });
    }
  })
  .catch(error => console.error('Erreur de chargement du fichier hero.json : ', error));