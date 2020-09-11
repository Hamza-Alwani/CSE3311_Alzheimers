import EmailViewer from '../components/EmailViewer'
import  firebase from '../components/firebase'

class EmailVieweBundler
{
   constructor(props){
      super(props);

      this.state={
         ref: []
      };
   };
}

   const ref=firebase.database().ref("/contact_us")
   ref.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
         var childKey = childSnapshot.key;
         this.setAtate({
            ref:this.state.ref.concat([childley.key]),
         })
      });
    });
    

/*
    var keys=[];
    var i=0;  
    const ref=firebase.database().ref("/contact_us")
    ref.once('value', function(snapshot) {
       snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          keys[i]=childKey;
          i++
       });
     });
    
     const list= keys.map((key)=>
           window.alert(key)
       );
*/
}

