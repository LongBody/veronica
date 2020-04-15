async function register(user) {
    for (let key in user) {
        var err = document.getElementById("error")
        if (user[key].length === 0) {
            throw new Error(`${key} cannot be empty`);
        }
        if (user.password !== user.RetypePassword) {
            err.innerHTML = "Password not matched"
            throw new Error("Password not matched");
        }
        if (user.password.length && user.RetypePassword.length < 6) {
            err.innerHTML = "Password must be more than 6 characters"
            throw new Error("Password must be more than 6 characters");
        }

    }
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    firebase.auth().currentUser.sendEmailVerification();
    return true;

}

async function login(user) {
    if (user.email.length === 0 || user.password === 0) {
        throw new Error("Email and password cannot be empty!");
    }
    const loginResult = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    if (!loginResult.user.emailVerified) {
        throw new Error(document.getElementById("err").innerHTML = "User is not verified! Please check your email box!");
    }
    return true;
}

export { register, login }