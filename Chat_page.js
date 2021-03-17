// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBDUCRhgRSH3t0jI9_QvRGgxCodIHdNelk",
  authDomain: "pro93-65932.firebaseapp.com",
  projectId: "pro93-65932",
  storageBucket: "pro93-65932.appspot.com",
  messagingSenderId: "328012410471",
  appId: "1:328012410471:web:76544ca3eedd6c6aa16ec2"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}
 function getData() {
  firebase.database().ref("/"+room_name).on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key;
    childData = childSnapshot.val();
     if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData; 

             console.log(firebase_message_id);
              console.log(message_data);
              name = message_data['name'];
              message = message_data['message'];
              like = message_data['like'];
              name_with_tag = "<h4>" + name + "<img class='user_tick src='tick.png'></h4>";
              message_with_tag="<h4 class='meassage h4'>" +message + "</h4";
              like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
              spane_with_tag = "<spane class='gylphicon gilyphicon-thumbs-up'>like: "+like+"</span> </button><hr>";

              row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
      } });  }); }
      getData(); 
      function  updateLike(messgae_id) {
console.log(messgae_id);
button_id=messgae_id;
likes=document.getElementById(button_id).value;
update_Likes=Number(likes+1);
console.log(update_Like);
firebase.database().ref(room_name).child(message_id).update({
  like : updated_likes
});
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomd_name");
  window.location.replace("index.html");
}