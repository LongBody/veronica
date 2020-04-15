const logout = `<div class="container">
<div class="row">
<div class="col-lg-4"></div>
        <div class="col-lg-3">
        <button type="button" class="btn btn-primary" onclick='log()'>Logout</button>
        <form class="form-group">
        <label>Search</label>
        <input type="text" id="infoSearch" placeholder="Searching" class="form-control">  
        <button type="button" class="btn btn-primary" id="search">Search</button>
        <p id="gia"></p>
        <p id="pri"></p>
        </form>
        </div>
    </div>
    </div>`

var db = firebase.firestore();

function onload() {
    document.getElementById('logout').style.display = "none"

    document.getElementById('search').addEventListener('click', function() {


        db.collection("product").get().then((querySnapshot) => {
            var input = document.getElementById("infoSearch").value
            querySnapshot.forEach((doc) => {
                var name = `${doc.data().name}`
                    // console.log(`${doc.id} => ${doc.data().email}`);

                if (input.toLowerCase() === name) {
                    document.getElementById('gia').innerHTML = name
                    document.getElementById('pri').innerHTML = ` ${doc.data().price}`

                }
                // if (input.toLowerCase() !== name) {
                //     document.getElementById('gia').innerHTML = "Not Have That Product"
                //     document.getElementById('pri').style.display = "none"
                // }

            });
        });
    })

}
export default {
    content: logout,
    onload: onload
}