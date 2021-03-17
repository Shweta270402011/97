
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCDFKbf7N_cqgLK_n2-n1bt3yU8Z99D6tg",
    authDomain: "chatroom-d0ad3.firebaseapp.com",
    databaseURL: "https://chatroom-d0ad3-default-rtdb.firebaseio.com",
    projectId: "chatroom-d0ad3",
    storageBucket: "chatroom-d0ad3.appspot.com",
    messagingSenderId: "185508621873",
    appId: "1:185508621873:web:8c94bd85e4250a8b5e6f10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome  " + user_name + ",  to the online Class !";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "Chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { 
document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
