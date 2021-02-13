import React ,{ useState} from 'react'
import firebase from './config/firebase'
function Home() {
const [ email, setemail] =useState("")
const [ password, setpassword] =useState("")

const Set = (()=>{
    console.log({email,password})
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
         alert(user.email , "user already sign")

          var uid = user.uid;
          // ...
        } else {
          // User is signed 
          alert("user is not sign in")
          // ...
        }
      });

    
})
const Login = (()=>{
    console.log({email,password})
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert("user login")

    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error)
  });

    
})



const SignUp = (()=>{
    console.log({email,password})
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert("User Sign In")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Sign in Error", error)
    // ..
  });


    
})
const Logout =(()=>{
  firebase.auth().signOut()
alert("Sign out")
})

    return (
        <div>
            <input type="email" name="" id="" onChange={e => setemail(e.target.value)}  />
            <input type="password" name="" id="" onChange={e => setpassword (e.target.value)} />
            <button onClick={Login}>Login</button>
            <br></br>

            <input type="email" name="" id="" onChange={e => setemail(e.target.value)} />
            <input type="password" name="" id="" onChange={e => setpassword(e.target.value)}/>
            <button onClick={SignUp}>Sign UP</button>
            <br></br>

            <input type="email" name="" id="" onChange={e => setemail(e.target.value)} />
            <input type="password" name="" id="" onChange={e => setpassword(e.target.value)} />
            <button onClick={Set}>Check sign in</button>
            <button onClick={Logout}>Log out</button>
        </div>
    )
}

export default Home
