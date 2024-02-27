import peliculas from './peliculas.js'

const paccion=document.getElementById("genero-28");
const pthriller=document.getElementById("genero-53");
const paventura=document.getElementById("genero-12");



console.log(peliculas[0].genre_ids.length);


    const accion=peliculas.filter((element,index)=>{
        for (let i=0;element.genre_ids.length;i++){
            element.genre_ids[i]===28;
            accion[index]="https://image.tmdb.org/t/p/w500element.backdrop_path" + element.backdrop_path + element.title ;
        }

    }    
    );

    const thriller=peliculas.filter((element)=>{
        for (let i=0;element.genre_ids.length;i++){
            element.genre_ids[i]===53;
            thriller[index]="https://image.tmdb.org/t/p/w500element.backdrop_path" + element.backdrop_path + element.title ;
        }

    }    
    );



    const aventura=peliculas.filter((element)=>{
        for (let i=0;element.genre_ids.length;i++){
            element.genre_ids[i]===12;
            const[index]="https://image.tmdb.org/t/p/w500element.backdrop_path" + element.backdrop_path + element.title ;
        }

    }    
    );


    paccion.textContent(accion);
    pthriller.textContent(thriller);
    paventura.textContent(aventura);
    





