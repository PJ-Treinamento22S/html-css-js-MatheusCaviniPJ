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

async function displayPius(){
    pius = await getPius();
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

displayPius();
displayOnline();