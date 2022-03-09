
const sleep = ms => new Promise(r => setTimeout(r, ms));

function createPiu(username, photo, text, created_at){
    const card = document.createElement("div");
    const photoAndPiu = document.createElement("div");
    const userPhoto = document.createElement("img");
    const userAndPiu = document.createElement("div");
    const infos = document.createElement("section");
    const name = document.createElement("h3");
    const dateTime = document.createElement("p");
    const piuField = document.createElement("div");
    const piuText = document.createElement("p");
    const reactions = document.createElement("div");
    const likes = document.createElement("div");
    const likeIcon = document.createElement("img");
    const likeCount = document.createElement("p");
    const high = document.createElement("img");
    const repost = document.createElement("img");
    const report = document.createElement("img");

    card.classList.add("piuCard");
    photoAndPiu.classList.add("photoAndPiu");
    userPhoto.classList.add("userCircle");
    userAndPiu.classList.add("UserAndPiu");
    infos.classList.add("info");
    reactions.classList.add("reactions");
    likes.classList.add("likes");
    likeIcon.classList.add("reaction");
    likeIcon.classList.add("like");
    high.classList.add("reaction");
    high.classList.add("high");
    repost.classList.add("reaction");
    repost.classList.add("repost");
    report.classList.add("reaction");
    report.classList.add("report");

    userPhoto.src = photo;
    name.innerHTML = username;
    dateTime.innerHTML = created_at.slice(8,10)+"/"+created_at.slice(5,7)+"/"+created_at.slice(0,4)+" - "+created_at.slice(11,16);
    piuText.innerHTML = text;
    likeIcon.src = "../img/Heart.svg";
    likeCount.innerHTML = Math.floor(Math.random() * 200);
    high.src = "../img/highlight.svg";
    repost.src = "../img/repeat.svg";
    report.src = "../img/report.svg";

    const field = document.querySelector("#campoPius");
    field.appendChild(card);
    card.appendChild(photoAndPiu);
    photoAndPiu.appendChild(userPhoto);
    photoAndPiu.appendChild(userAndPiu);
    userAndPiu.appendChild(infos);
    infos.appendChild(name);
    infos.appendChild(dateTime);
    userAndPiu.appendChild(piuField);
    piuField.appendChild(piuText);
    card.appendChild(reactions);
    reactions.appendChild(likes);
    likes.appendChild(likeIcon);
    likes.appendChild(likeCount);
    reactions.appendChild(high);
    reactions.appendChild(repost);
    reactions.appendChild(report);

    var liked = false;

    function like(e){
        if(!liked){
            liked = true;
            likeIcon.src = "../img/heartFill.svg"
            likeCount.innerHTML = Number(likeCount.innerHTML)+1;
        }else{
            liked = false;
            likeIcon.src = "../img/Heart.svg";
            likeCount.innerHTML = Number(likeCount.innerHTML)-1;
        }
    }

    likeIcon.addEventListener("click", like);

    var highlighted = false;
    var index = Array.prototype.indexOf.call(field.children, card);

    function destacar(e){
        if(!highlighted){
            let cards = document.getElementsByClassName("piuCard");
            index = Array.prototype.indexOf.call(field.children, card);
            field.insertBefore(card, cards[0]);
            highlighted = true;
            high.src = "../img/awardFill.svg";
            card.style.border = "solid 3px #7831BE"
        
        }else{
            let cards = document.getElementsByClassName("piuCard");
            field.insertBefore(card, cards[index +1]);
            highlighted = false;
            high.src = "../img/highlight.svg"
            card.style.border = "none"
        }
    }

    high.addEventListener("click", destacar);
}

function postPiu(username, photo, text, created_at){
    const card = document.createElement("div");
    const photoAndPiu = document.createElement("div");
    const userPhoto = document.createElement("img");
    const userAndPiu = document.createElement("div");
    const infos = document.createElement("section");
    const name = document.createElement("h3");
    const dateTime = document.createElement("p");
    const piuField = document.createElement("div");
    const piuText = document.createElement("p");
    const reactions = document.createElement("div");
    const likes = document.createElement("div");
    const likeIcon = document.createElement("img");
    const likeCount = document.createElement("p");
    const high = document.createElement("img");
    const repost = document.createElement("img");
    const erase = document.createElement("img");
    

    card.classList.add("piuCard");
    photoAndPiu.classList.add("photoAndPiu");
    userPhoto.classList.add("userCircle");
    userAndPiu.classList.add("UserAndPiu");
    infos.classList.add("info");
    reactions.classList.add("reactions");
    likes.classList.add("likes");
    likeIcon.classList.add("reaction");
    likeIcon.classList.add("like");
    high.classList.add("reaction");
    high.classList.add("high");
    repost.classList.add("reaction");
    repost.classList.add("repost");
    erase.classList.add("reaction");
    erase.classList.add("erase");

    userPhoto.src = photo;
    name.innerHTML = username;
    dateTime.innerHTML = created_at.slice(8,10)+"/"+created_at.slice(5,7)+"/"+created_at.slice(0,4)+" - "+created_at.slice(11,16);
    piuText.innerHTML = text;
    likeIcon.src = "../img/Heart.svg";
    likeCount.innerHTML = Math.floor(Math.random() * 200);
    high.src = "../img/highlight.svg";
    repost.src = "../img/repeat.svg";
    erase.src = "../img/delete.svg";

    const field = document.querySelector("#campoPius");
    let cards = field.children;
    let indexCount = 0;
    for(i of cards){
        if(i.style.border == "3px solid rgb(120, 49, 190)"){
            indexCount++;
        }
    }
    console.log(indexCount);
    field.insertBefore(card, cards[indexCount]);
    card.appendChild(photoAndPiu);
    photoAndPiu.appendChild(userPhoto);
    photoAndPiu.appendChild(userAndPiu);
    userAndPiu.appendChild(infos);
    infos.appendChild(name);
    infos.appendChild(dateTime);
    userAndPiu.appendChild(piuField);
    piuField.appendChild(piuText);
    card.appendChild(reactions);
    reactions.appendChild(likes);
    likes.appendChild(likeIcon);
    likes.appendChild(likeCount);
    reactions.appendChild(high);
    reactions.appendChild(repost);
    reactions.appendChild(erase);

    var liked = false;

    function like(e){
        if(!liked){
            liked = true;
            likeIcon.src = "../img/heartFill.svg"
            likeCount.innerHTML = Number(likeCount.innerHTML)+1;
        }else{
            liked = false;
            likeIcon.src = "../img/Heart.svg";
            likeCount.innerHTML = Number(likeCount.innerHTML)-1;
        }
    }

    likeIcon.addEventListener("click", like);

    var highlighted = false;
    var index = Array.prototype.indexOf.call(field.children, card);
    function destacar(e){
        if(!highlighted){
            let cards = document.getElementsByClassName("piuCard");
            index = Array.prototype.indexOf.call(field.children, card);
            field.insertBefore(card, cards[0]);
            highlighted = true;
            high.src = "../img/awardFill.svg";
            card.style.border = "solid 3px #7831BE"
        
        }else{
            let cards = document.getElementsByClassName("piuCard");
            field.insertBefore(card, cards[index +1]);
            highlighted = false;
            high.src = "../img/highlight.svg"
            card.style.border = "none"
        }
    }

    high.addEventListener("click", destacar);


    function deletar(e){
        let del = document.getElementById("modalDelete");
        del.style.display = "flex";
        let cancel = document.getElementById("modalDeleteC");
        cancel.addEventListener("click", function(){del.style.display="none"});
        let apagar = document.getElementById("modalDeleteA");
        apagar.addEventListener("click", function(){del.style.display="none"; card.remove();})
    }

    erase.addEventListener("click", deletar);
}

function onlineUser(username, photo){
    const friendCard = document.createElement("div");
    const userPhoto = document.createElement("img");
    const online = document.createElement("div");
    const name = document.createElement("p");

    friendCard.classList.add("friendCard");
    userPhoto.classList.add("userCircle");
    online.classList.add("online");

    userPhoto.src = photo;
    if((username.length)<=14){
        name.innerHTML = username; 
    }else{
        name.innerHTML = username.slice(0,12) + "...";
    }


    const field = document.querySelector("#amigos");
    field.appendChild(friendCard);
    friendCard.appendChild(userPhoto);
    friendCard.appendChild(online)
    friendCard.appendChild(name);
}

async function getPius(){
    const response = await fetch("https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad");
    return await response.json();
}

var piuslGlobal;

async function displayPius(){
    let pius = await getPius();
    piuslGlobal = pius;
    for(piu of pius){
         let {username, photo}= piu.user;
         let{text, created_at} = piu;
         createPiu(username, photo, text, created_at);
     }
}

async function displayOnline(){
    let Users = [];
    pius = await getPius();
    for(piu of pius){
        let append = true;
        for(user of Users){
            if(piu.user.username == user.username){
                append = false;
            }
        }

        if(append){
            Users.push(piu.user);
        }
    }
    for(let i = 0; i<(Math.floor(Math.random() * 18)); i++){
        let user = Users[i];
        onlineUser(user.username, user.photo);
    }
}

function dateGenerator(){
    let date = new Date();
    let dia = String(date.getDate()).padStart(2, '0');
    let mes = String(date.getMonth() + 1).padStart(2, '0');
    let ano = date.getFullYear();
    let hora = String(date.getHours()).padStart(2, '0');
    let minutos = String(date.getMinutes()).padStart(2, '0');

    return(ano+"-"+mes+"-"+dia+"T"+hora+":"+minutos);
}

displayPius();
displayOnline();

//validação do formulário
function charCount(e){
    let x = document.getElementById("charcount");
    let text = document.getElementById("newPiu")
    x.innerHTML = (this.value.length)+"/140"
    if(this.value.length >140){
        x.style.color = "#a00"
        text.style.color = "#a00"
    }else{
        x.style.color = "black"
        text.style.color = "#787779"
    } 
}

async function submitValidate(e){
    const textArea = document.getElementById("newPiu");
    if(textArea.value.length >140){
        let modal = document.getElementById("modal140");
        modal.style.display= "flex";
        const button = document.getElementById("modal140Ok");
        button.addEventListener("click", function() {modal.style.display="none"});
    }else if(textArea.value.length ==0){
        let modal = document.getElementById("modal_nulo");
        modal.style.display= "flex";
        const button = document.getElementById("modalNullOk");
        button.addEventListener("click", function() {modal.style.display="none"});

    }
    else{
        newPiu = {user: {username: "Matheus_Cavini",
        photo: "../img/pp.jpeg"},
        text : textArea.value,
        created_at: dateGenerator()
    }

    let campo = document.getElementById("campoPius");
    textArea.value="";
    let x = document.getElementById("charcount");
    x.innerHTML = "0/140";

    pius = piuslGlobal;
    pius.unshift(newPiu);

    
    let {username, photo}= newPiu.user;
    let{text, created_at} = newPiu;
    postPiu(username, photo, text, created_at);
    
    }
}

const form = document.getElementById("submitPiu");
form.addEventListener("click", submitValidate);

const textArea = document.getElementById("newPiu");
textArea.addEventListener("input", charCount);

//busca

function Results(){

    let results = document.getElementById("searchResults");
    results.style.height = "600px";
    results.style.marginBottom = "24px";
    
    
    let bar = document.getElementById("searchbar");
    bar.addEventListener("input", async function(){
        var Users = [];
        let pius = await getPius();
        for(piu of pius){
            let append = true;
            for(user of Users){
                if(piu.user.username == user.username){
                    append = false;
                }
            }

            if(append){
                Users.push(piu.user);
            }
        }
        results.innerHTML =""
        for(i of Users){
            if(i.username.toLowerCase().startsWith(bar.value.toLowerCase()) && bar.value != "" ){
                const friendCard = document.createElement("div");
                const userPhoto = document.createElement("img");
                const online = document.createElement("div");
                const name = document.createElement("p");

                friendCard.classList.add("friendCard");
                userPhoto.classList.add("userCircle");

                userPhoto.src = i.photo;
                if((i.username.length)<=14){
                    name.innerHTML = i.username; 
                }else{
                    name.innerHTML = i.username.slice(0,12) + "...";
                }


        
                results.appendChild(friendCard);
                friendCard.appendChild(userPhoto);
                friendCard.appendChild(online)
                friendCard.appendChild(name);
            }
        }
    });

}

function ResultsOff(){
    let results = document.getElementById("searchResults");
    results.style.height = "0";
    results.style.marginBottom = "64px";
    results.innerHTML=""
}

let bar = document.getElementById("searchbar");
bar.addEventListener("focus", Results);
bar.addEventListener("focusout", ResultsOff);




