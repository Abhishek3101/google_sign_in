import {db} from "./firebase_config"
import "firebase/compat/firestore"

db.collection("users").doc("Abhishek").collection("details").doc("ps").set({
    name: "Abhishek Agrawal",
    age: 19,
    College: "IIT KGP",
    interests: {
        core: "Aero",
        noncore: "ML"
    }
}).then(function(){
    console.log("Abhishek created");
});

