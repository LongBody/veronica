import backLogin from './login.js'
import setScreen from '../index.js'
import { register } from '../controllers/auth.js'

const screen = `<div class="container">
<div class="row">
<div class="col-lg-4"></div>
    <div class="col-lg-3 card shadow"  style="padding: 20px 25px; border: 1px solid black;border-radius: 10px;">
        <form class="form-group" id="js-formres">
            <label for="email">Email :</label>
            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="" required>
            <div class="form-group">
                <label for="name">Name :</label>
                <input type="text" class="form-control" name="name"  id="name" aria-describedby="helpId" placeholder="" required>
            </div>
            <div class="form-group">
                <label for="Password">Password :</label>
                <input type="password" class="form-control" name="" id="Password" aria-describedby="helpId" placeholder="" required>
            </div>
            <div class="form-group">
                <label for="RetypePassword">RetypePassword :</label>
                <input type="password" class="form-control" name="" id="RetypePassword" aria-describedby="helpId" placeholder="" required>
                <p style="display:nones;color:red" id="error"></p>
            </div>
            <button type="submit" class="btn btn-secondary">Register</button>
            <button type="submit" class="btn btn-success" id="js-login">Back To Login</button>
        </form>
    </div>
</div>
</div>


`

var db = firebase.firestore();


function onload() {
    document.getElementById('js-login').addEventListener('click', function() { /// back to login
        setScreen(backLogin)

    });

    const form = document.getElementById('js-formres'); /////register account
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        let user = {
            email: form.email.value,
            name: form.name.value,
            password: form.Password.value,
            RetypePassword: form.RetypePassword.value,

        }

        const result = await register(user);
        if (result) alert("Register successfully!")
        setScreen(backLogin)

        db.collection("Users").add({
                email: user.email,
                name: user.name,
                password: user.password
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

    });


}

export default {
    content: screen,
    onload: onload,
}