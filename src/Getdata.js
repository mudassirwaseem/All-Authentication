import React, { useEffect , useState } from 'react'
import firebase from './config/firebase'

function Getdata() {

const [data2,setdata] = useState([])

 useEffect(()=>{
     firebase.database().ref("URL").on("value",
     data1=>{
      setdata( Object.values( data1.val()))    
     }
     
     )
 },[])


    return (
        <div>
    
         {
             data2.map((val ,index)=>{
              return  <div style={{display:"flex"}}>
               <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src={val} alt="Card image cap" style={{height:200,width:200,border: 1}} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick examplep the bulk of the card's content.</p>
              </div>
            </div>
            </div>
             })
         }
     

        </div>
    )
}

export default Getdata
