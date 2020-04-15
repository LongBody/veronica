import setScreen from '../index.js'
import screen from "./register.js"
import { login } from "../controllers/auth.js"
import logScreen from "./logout.js"
const backLogin = `<div class="container">
<div class="row">
<div class="col-lg-4"></div>
        <div class="col-lg-3 card shadow" style="padding: 20px 25px; border: 1px solid black ;border-radius: 10px;">
            <form class="form-group" id="js-formLogin">
                <label for="email">Email :</label>
                <input type="email" class="form-control" name="" id="email"  aria-describedby="emailHelpId" placeholder="" required>

                <div class="form-group">
                <label for="password">Password :</label>
                <input type="password" class="form-control" name="" id="password" aria-describedby="helpId" placeholder="" required>
                </div>
                <p style="display:nones;color:red" id="err"></p>
                
                <button type="submit" class="btn btn-success">Login</button>
                <button type="button" id="js-res" class="btn btn-secondary">Register</button>
                </form>
        </div>
    </div>
    </div>
   
    
    `
var db = firebase.firestore();
var ten = document.getElementById('ten')



function onload() {
    // let name
    document.getElementById('js-res').addEventListener('click', function() { /// Back To Register
        setScreen(screen)

    })
    const formLogin = document.getElementById("js-formLogin");


    formLogin.addEventListener("submit", async function(event) { //// Login when true account
        event.preventDefault();
        var email = formLogin.email.value;
        const password = formLogin.password.value;
        const user = { email: email, password: password };



        try {
            const success = await login(user);
            if (success) {



                await db.collection("Users").get().then((querySnapshot) => {
                    console.log(querySnapshot)
                    querySnapshot.forEach((doc) => {
                        var email = `${doc.data().email}`
                            // console.log(`${doc.id} => ${doc.data().email}`);
                        console.log(typeof user.email)
                        console.log(email)
                        if (email === user.email) {
                            name = ` ${doc.data().name}`
                            ten.style.display = "block"
                            ten.innerHTML = name
                            console.log(name)
                            localStorage.setItem("users", name);
                        }

                    });
                });



                // await setScreen(logScreen)

                window.location = "../index.html"



            }
        } catch (err) {
            alert(err.message);
        }


    });




}



export default {
    content: backLogin,
    onload: onload,
    // name: function onload() {
    //     name = name
    // }
}