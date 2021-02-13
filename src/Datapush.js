import React, { useState } from 'react'
import firebase from './config/firebase'


function Datapush() {

    const [image, setimage] = useState(null)

    const handlechange = ((e) => {
        if (e.target.files[0]) {
            setimage(e.target.files[0])
        }

    })

    const uploadImage = () => {
        if(image){
        firebase.storage().ref().child(`images/${image.name}`).put(image)
            .then((snapshot) => {
                snapshot.ref.getDownloadURL()
                    .then(url => firebase.database().ref("URL").push(url))
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }else{
        alert("plzzzz select")
    }}

    console.log("image", image)

    return (
        <div>


            <input type="file" onChange={handlechange} />
            <button onClick={uploadImage}> Sumbit</button>


        </div>
    )
}

export default Datapush
