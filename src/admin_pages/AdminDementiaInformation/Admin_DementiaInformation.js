/// summary
///   In development - admin page where the admin can create, delete, edit features fpr DementiaInformation Page.
/// summary


import React, { Component } from 'react';

// components
import Nav from '../../components/Admin_nav';
import Footer from '../../components/Footer'; 

//import  '../components/EmailViewerBundler';
import  firebase from '../../components/firebase';
// import  Admin_DemInfoViewer from '../../components/DemInfoViewer';

// bootstrap
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Button } from 'react-bootstrap';

//css
import '../../css/main.css'
// import '../../css/email_viewer.css' // delete the file later

import AdminAddDementia from './AdminDementiaComponents/AdminAddDementia';
import AdminUpdateDementia from './AdminDementiaComponents/AdminUpdateDementia';
import AdminDeleteDementia from './AdminDementiaComponents/AdminDeleteDementia';



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

         <div className="main-component">
         
         <Nav/>

         {/* Header */}
         <div className="gen_header">
                  Admin Powers Dementia Information
         </div>
         <Tabs defaultActiveKey="add" id="uncontrolled-tab-example">
            <Tab eventKey="add" title="Add">
               <AdminAddDementia />
            </Tab>
            <Tab eventKey="update" title="Update">
               <AdminUpdateDementia />
            </Tab>
            <Tab eventKey="delete" title="Delete">
               {/* <AdminDeleteDementia /> */}
            </Tab>
         </Tabs>
                     
      </div>
        
         // <div>
            /* <Nav/>
          
            <div>
               <ul><input type="text" id="title"          placeholder="title"        /></ul>
               <ul><input type="text" id="description" placeholder="Description"/></ul>
               <ul><input type="text" id="pic"    placeholder="pic url"  /></ul>
               <ul><input type="text" id="website"    placeholder="web url"  /></ul>
               <Button onClick={() => add_button_pressed()}>add</Button>
            </div>
            
           {/* <body>
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
            </body>        */
         // <Footer/>
         // </div> */}
      )
   }
}

export default Admin_Dementia_Information_Page
