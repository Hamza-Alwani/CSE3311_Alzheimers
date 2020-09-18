import React, { Component } from 'react';

// components
import Nav from '../components/Admin_nav';
import Footer from '../components/Footer'; 
//import  '../components/EmailViewerBundler';
import  firebase from '../components/firebase';
import  Admin_DemInfoViewer from '../components/DemInfoViewer';
import { Button } from 'react-bootstrap';
//css
import '../css/main.css'
import '../css/email_viewer.css'



class Admin_Dementia_Information_Page extends Component 
{

   constructor()
   {
      super()
      this.state = { 
         ref:[],
         title:[],
         pic: [],
         disc: [],
         website: [],
      }
   }


   componentDidMount()
   {
      const listref=firebase.database().ref().child('Article').orderByKey();
      
      listref.once('value', snapshot => {
         snapshot.forEach(child =>{
            this.setState({
               ref:this.state.ref.concat([child.key]),
               disc: this.state.disc.concat(child.val().disc),
               pic: this.state.pic.concat(child.val().pic),
               title: this.state.title.concat(child.val().title),
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
               <ul><input type="text" id="title"          placeholder="title"        /></ul>
               <ul><input type="text" id="description" placeholder="Description"/></ul>
               <ul><input type="text" id="pic"    placeholder="pic url"  /></ul>
               <ul><input type="text" id="website"    placeholder="web url"  /></ul>
               <Button onClick={() => add_button_pressed()}>add</Button>
            </div>
            
           <body>
                 {
              this.state.ref.map((dataList,index)=>
              <div>
              <Admin_DemInfoViewer
              id= {this.state.ref[index]}
               disc={this.state.disc[index]}
               pic={this.state.pic[index]}
               title={this.state.title[index]}
               website={this.state.website[index]}
              />
              </div>
              )
           } 
            </body>       
         <Footer/>
         </div>
      )
   }
}

export default Admin_Dementia_Information_Page

function add_button_pressed(){ 

   if(document.getElementById("title").value && 
    document.getElementById("description").value &&
     document.getElementById("pic").value &&
      document.getElementById("website").value)
      {
         var key=firebase.database().ref('Article').push().key;
         firebase.database().ref('Article/'+key).set({
            title:document.getElementById("title").value,
            disc:document.getElementById("description").value,
            pic:document.getElementById("pic").value,
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