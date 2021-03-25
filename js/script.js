if(localStorage.getItem("FriendBook") == undefined) {
    localStorage.setItem("FriendBook","[]");
}

let result="";
let FriendBook = JSON.parse(localStorage.getItem("FriendBook"));
for(i=0;i<FriendBook.length;i++) {
    result +=`
    <div class="friend-list-items">
    <i class="fa fa-user color-primary"></i>
    <div class="friend-list-items-info">
      <h4>${FriendBook[i].name}</h4>
    </div>
    <div class="fa-fa-icon">
    <i class="fas fa-star" id="myFavorite"onClick="markFavorite('${FriendBook[i].id}')"></i>
    <i class="fas fa-trash color-primary" onClick="deleteContact('${FriendBook[i].id}')"></i>
    </div>
  </div>
  `
}

document.getElementsByClassName("friend-book-body")[0].innerHTML=result;

function submitFriendName(e) {
    e.preventDefault();

    let friend_Name = document.getElementById("name").value;


    let FriendBook = JSON.parse(localStorage.getItem("FriendBook"));
    
    let FriendList = {
        id: Math.random().toString(36).substr(2,9),
        name: friend_Name
    }

    FriendBook.unshift(FriendList)
    console.log(FriendBook);
    localStorage.setItem("FriendBook",JSON.stringify(FriendBook));
    document.getElementById("name").value="";

    location.reload();
}

function deleteContact (id) {
    let FriendBook = JSON.parse(localStorage.getItem("FriendBook"));
    FriendBook = FriendBook.filter(function(FriendList){
        return FriendList.id !=id;
    });

    localStorage.setItem("FriendBook",JSON.stringify(FriendBook));
    location.reload();
}

function markFavorite(id) {
    let FriendBook = JSON.parse(localStorage.getItem("FriendBook"));

    
}

