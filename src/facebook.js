import React from 'react'
import firebase from './config/firebase'

function Facebook() {

    const fbsubmit =(() => {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                let create_user = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref("/").child("USERDETAILS").push(create_user)
                console.log(create_user)
                alert("user login")

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.

                // ...
            })
            .catch((error) => {
                alert(error.message)
             
            });

    })


    const googlesubmit =(() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
          var user = result.user;
          let create_user = {
              name: user.displayName,
              email: user.email,
              profile: user.photoURL,
              uid: user.uid
          }
          firebase.database().ref("/").child("GMAILDETAILS").push(create_user)
         console.log(result)

          // ...
        }).catch((error) => {
      
            console.log(error.message)
        });
    })

    return (
        <div>
            <button onClick={fbsubmit} >Facebook login</button>
            <button onClick={googlesubmit} >Google login</button>
        </div>
    )
}

export default Facebook
