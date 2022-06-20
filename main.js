/*Ciao ragazzi,
esercizio di oggi: Social Posts
nome repo: js-social-posts
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
BONUS
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.*/

//Millestone 1
//Ho creato un array di oggetti
//Ogni oggetto contiene le informazini necessarie per il completamneto di ogni post
const socialArray=[
    {
        id:1,
        nameAutor:'Phil Mangione',
        photoProfile:'https://unsplash.it/300/300?image=1',
        date:'05-21-2019',
        textPost:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto nemo suscipit vel esse consequuntur, amet quas itaque magni sunt saepe officia  cum rerum perferendis tempora facere. Nobis, adipisci nam',
        imagePost:'https://unsplash.it/300/300?image=1',
        numbersLike:729
    },
    {
        id:2,
        nameAutor:'Xavi Montereey',
        photoProfile:'https://unsplash.it/300/300?image=2',
        date:'05-21-2019',
        textPost:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto nemo suscipit vel esse consequuntur, amet quas itaque magni sunt saepe officia  cum rerum perferendis tempora facere. Nobis, adipisci nam',
        imagePost:'https://unsplash.it/300/300?image=2',
        numbersLike:729
    },
    {
        id:3,
        nameAutor:'Alexander Rakid',
        photoProfile:'https://unsplash.it/300/300?image=3',
        date:'05-21-2019',
        textPost:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto nemo suscipit vel esse consequuntur, amet quas itaque magni sunt saepe officia  cum rerum perferendis tempora facere. Nobis, adipisci nam',
        imagePost:'https://unsplash.it/300/300?image=3',
        numbersLike:729
    },
    {
        id:4,
        nameAutor:'Mikael Shad',
        photoProfile:'https://unsplash.it/300/300?image=4',
        date:'05-21-2019',
        textPost:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto nemo suscipit vel esse consequuntur, amet quas itaque magni sunt saepe officia  cum rerum perferendis tempora facere. Nobis, adipisci nam',
        imagePost:'https://unsplash.it/300/300?image=4',
        numbersLike:729
    },
    {
        id:5,
        nameAutor:'Phil Brown',
        photoProfile:'https://unsplash.it/300/300?image=5',
        date:'05-21-2019',
        textPost:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto nemo suscipit vel esse consequuntur, amet quas itaque magni sunt saepe officia  cum rerum perferendis tempora facere. Nobis, adipisci nam',
        imagePost:'https://unsplash.it/300/300?image=5',
        numbersLike:729
    },
    {
        id:6,
        nameAutor:'Eduardo Mangione',
        photoProfile:'https://unsplash.it/300/300?image=6',
        date:'05-21-2019',
        textPost:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto nemo suscipit vel esse consequuntur, amet quas itaque magni sunt saepe officia  cum rerum perferendis tempora facere. Nobis, adipisci nam',
        imagePost:'https://unsplash.it/300/300?image=6',
        numbersLike:729
    }
]
//Millestone 2
//Genero la varibile per il contenitore che conterrà le card(post)
const containerClass=document.getElementById('container');
//Stampo un post per volta scorrendo tramite il ciclo for
for(i=0; i<socialArray.length; i++){
    const singleSocial=socialArray[i];
    //Completo il template ricopiando la sequenza html e sostituendo i valori con le informazioni date dagli oggetti nell'array
const postDraw=
`<div class="post">
<div class="post__header">
<div class="post-meta">                    
    <div class="post-meta__icon">
        <img class="profile-pic" src="${singleSocial.photoProfile}" alt="Phil Mangione">                    
    </div>
    <div class="post-meta__data">
        <div class="post-meta__author">${singleSocial.nameAutor}</div>
        <div class="post-meta__time">${socialArray.date}</div>
    </div>                    
</div>
</div>
<div class="post__text"> ${singleSocial.textPost}</div>
<div class="post__image">
<img src="${singleSocial.imagePost}" alt="">
</div>
<div class="post__footer">
<div class="likes js-likes">
    <div class="likes__cta">
        <a class="like-button  js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
        </a>
    </div>
    <div class="likes__counter">
        Piace a <b id="like-counter-1" class="js-likes-counter">${singleSocial.numbersLike}</b> persone
    </div>
</div> 
</div>            
</div>`

//Infine concateno
containerClass.innerHTML += postDraw;
}
//Completo il template ricopiando la sequenza html e sostituendo i valori con le informazioni date dagli oggetti nell'array
const postDraw=
`<div class="post">
<div class="post__header">
<div class="post-meta">                    
    <div class="post-meta__icon">
        <img class="profile-pic" src="${singleSocial.photoProfile}" alt="Phil Mangione">                    
    </div>
    <div class="post-meta__data">
        <div class="post-meta__author">${singleSocial.nameAutor}</div>
        <div class="post-meta__time">${socialArray.date}</div>
    </div>                    
</div>
</div>
<div class="post__text"> ${singleSocial.textPost}</div>
<div class="post__image">
<img src="${singleSocial.imagePost}" alt="">
</div>
<div class="post__footer">
<div class="likes js-likes">
    <div class="likes__cta">
        <a class="like-button  js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
        </a>
    </div>
    <div class="likes__counter">
        Piace a <b id="like-counter-1" class="js-likes-counter">${singleSocial.numbersLike}</b> persone
    </div>
</div> 
</div>            
</div>`

//Infine concateno
containerClass.innerHTML += postDraw;