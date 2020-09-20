import React, { Component } from 'react';

// components
import Nav from '../components/Admin_nav';
import Footer from '../components/Footer'; 
//import  '../components/EmailViewerBundler';
import  firebase from '../components/firebase';
import { Button } from 'react-bootstrap';
//css
import '../css/main.css'
import '../css/email_viewer.css'





class Admin_Community_Resources_Page extends Component 
{

   constructor()
   {
      super()
      this.state = { 
         ref:[],
         name:[],
         address: [],
         city: [],
         languages:[],
         number:[],
         website:[],  
      }
   }


   componentDidMount()
   {
      const listref=firebase.database().ref().child('location').orderByKey();
      
      listref.once('value', snapshot => {
         snapshot.forEach(child =>{
            this.setState({
                ref:this.state.ref.concat([child.key]),
                name: this.state.name.concat(child.val().name),
                address: this.state.address.concat(child.val().address),
                city: this.state.city.concat(child.val().city),
                languages: this.state.languages.concat(child.val().languages),
                number: this.state.number.concat(child.val().number),
                website: this.state.website.concat(child.val().website),

               })
         });
  
      });
     
      
   }

  
   render()
   {
      return (
        
         <div>
            <Nav/>
          
            <div>
               <ul><input type="text" id="name"          placeholder="name"        /></ul>
               <ul><input type="text" id="address" placeholder="address"/></ul>
               <ul><input type="text" id="city"    placeholder="city"  /></ul>
               <ul><input type="text" id="languages"    placeholder="languages"  /></ul>
               <ul><input type="text" id="number"    placeholder="number"  /></ul>
               <ul><input type="text" id="website"    placeholder="web url"  /></ul>
               <Button onClick={() => add_button_pressed()}>add</Button>
            </div>
            
           <body>
              {
              this.state.ref.map((dataList,index)=>

              <div className="boundry">
              <div className="body">
              <p>
                 id= {this.state.ref[index]}
                 <br></br>
                name={this.state.name[index]}
                <br></br>
                address={this.state.address[index]}
                <br></br>
                city={this.state.city[index]}
                <br></br>
                languages={this.state.languages[index]}
                <br></br>
                number={this.state.number[index]}
                <br></br>
                website={this.state.website[index]}
                <br></br>
              </p>     
               <Button onClick={() => delete_button_pressed(this.state.ref[index])}>Delete</Button>
               </div>            
              </div>
              )
              }

            </body>       
         <Footer/>
         </div>
      )
   }
}

export default Admin_Community_Resources_Page

function add_button_pressed(){ 
  if(document.getElementById("name").value && 
     document.getElementById("address").value &&
     document.getElementById("city").value &&
     document.getElementById("languages").value &&
     document.getElementById("number").value &&
     document.getElementById("website").value )
     {
        var key=firebase.database().ref('location').push().key;
        firebase.database().ref('location/'+key).set({
          name:document.getElementById("name").value,
          address:document.getElementById("address").value,
          city:document.getElementById("city").value,
          languages:document.getElementById("languages").value,
          number:document.getElementById("number").value,
          website:document.getElementById("website").value,
        },function(error){
           if(error){
              window.alert("failed");
           }else{
              window.alert("yes");
              window.location.reload(false);


           }
        });
     }
     else
     {
        window.alert("failed. Make sure all fields are full");
     }
 
 }

 function delete_button_pressed(obj){
   
  firebase.database().ref('location').child(obj).remove().then(function(){
      window.alert("Message Deleted");
      window.location.reload(false);
   }).catch(function(error){
   });
}