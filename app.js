       //Eventos
       const $poke = document.getElementById('pokemon');
       const $pokeimg = document.getElementById('poke-img');
       const $loader = document.getElementById('loader');
                
       const buildPokemon = (pokemon, $nameContainer, $imgContainer, $loader) => {
           $loader.classList.add('hidden');
           $imgContainer.style.display = 'block';
           $nameContainer.innerHTML = pokemon.name;
           $imgContainer.setAttribute('src', pokemon.sprites.front_default);
       }
           
           const getPokemon = async (pokemonId) => {
               const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                 const pokemon= await response.json();
                 return pokemon;
           }
                            
               const buscarPokemon = async (event) => {
               event.preventDefault();
               $loader.classList.remove('hidden');
               $pokeimg.style.display('none');
               // event.currentTarget === $form
               // Para enviar datos diferente a GET o POST. Accede a todo lo que está dentro de form
               // También puedes settear datos cuando los usuarios no los ingresan explícitamente 
               const form = new FormData($form);
               const pokemonName = form.get('pokemon');
               // console.log(pokemonName);
               const pokemonData = await getPokemon(pokemonName);
               buildPokemon(pokemonData, $poke, $pokeimg)
             }
           
             const $form = document.getElementById('form');
           $form.addEventListener('submit', buscarPokemon);    
   
           //Fetch es el API del browser que nos permite interactuar con datos
           //Refactorizando con async await
   
       
       
                   // .then((response) => {
                   //     console.log(response);
                   //     response.json()
                   //         .then((pokemon) => {
                               // console.log(pokemon.name)       
                               //Signo de pesos indica que es un selector, elemento del DOM. Convencionalismo
                               // console.log(pokemon.sprites.front_default);
                   //         })
                   // });
   
           //Por defecto, fetch trabaja con GET
           // Para POST, fetch necesitará un nuevo parámetro *Investigar
   
           // Callback es una función que es parámetro de otra función 
           // const nombre = 'cope'
           // let apellido;
           // function apellid() {
           //     let apellido = 'copito'
           //     setTimeout(function () {
           //         const lastname = 'copete';
           //         const fullname = nombre + apellido + lastname;
           //         console.log(fullname);
           //     }, 1000)
           // }
   
           // setTimeout(apellid, 1000)
   
           // Promises
   
           // const tiempo = 11;
           // const promesa = new Promise((todoBien, todoMal) => {
           //     if (tiempo === 11) {
           //         todoBien();
           //     } else {
           //         todoMal();
           //     }
           // })
           //     .then(function () {
           //         console.log('Llegaste puntual');
   
           //     })
           //     .catch(function () {
           //         console.log('Llegaste tarde');
           //     })