import setScreen from '../index.js'
import logScreen from "./logout.js"

var db = firebase.firestore();
document.getElementById('signIn').addEventListener('click', function() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {

            var popEmail = result.user.email

            // db.collection("Users").get().then((querySnapshot) => {
            //     console.log(querySnapshot)
            //     querySnapshot.forEach((doc) => {
            //         var email = `${doc.data().email}`
            //             // console.log(`${doc.id} => ${doc.data().email}`);
            //         if (email === popEmail) {
            //             name = ` ${doc.data().name}`
            //             ten.style.display = "block"
            //             ten.innerHTML = name

            //         }

            //     });
            // });


            function getEmailName(popEmail) {
                ten.style.display = "block"
                ten.innerHTML = popEmail.substring(0, popEmail.indexOf('@'))
                localStorage.setItem("users", popEmail.substring(0, popEmail.indexOf('@')));
            }
            getEmailName(popEmail)

            // setScreen(logScreen)
            window.location = "../index.html"

        }).catch(function(error) {

        });
    })
    // document.getElementById('sign').addEventListener('click', function() {
    //     var provider = new firebase.auth.FacebookAuthProvider();
    //     firebase.auth().signInWithPopup(provider).then(function(result) {
    //         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //         var token = result.credential.accessToken;
    //         // The signed-in user info.
    //         var user = result.user;
    //         setScreen(logScreen)
    //             // ...
    //     }).catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // The email of the user's account used.
    //         var email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         var credential = error.credential;
    //         // ...
    //     });
    // })