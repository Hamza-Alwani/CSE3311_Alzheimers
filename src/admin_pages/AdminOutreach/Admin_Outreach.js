/// summary
///   Outreach information page to host the add, update, delete tabs for Outreach information data
/// summary


import React, { Component } from 'react';

// components
import Nav from '../../shared_comps/Admin_nav';

//import  '../components/EmailViewerBundler';
import  firebase from '../../shared_comps/firebase';
// import  Admin_DemInfoViewer from '../../components/DemInfoViewer';

// bootstrap
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

//css
import '../../css/main.css'

// components for add, delete, update.
import AdminAddOutreach from './AdminOutreachComponents/AdminAddOutreach';
import AdminUpdateOutreach from './AdminOutreachComponents/AdminUpdateOutreach';
import AdminDeleteOutreach from './AdminOutreachComponents/AdminDeleteOutreach';



class Admin_Outreach_Page extends Component 
{

   // constructor used to store data once an article is pulled
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

   // On loading up the page - this will create a list of articles from firebases
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

   
// main page to host the tabs 
   render()
   {
      return (

         <div className="main-component">
         
         <Nav/>

         {/* Header */}
         <div className="gen_header">
            Admin Powers Outreach Information
         </div>
         <Tabs defaultActiveKey="add" id="uncontrolled-tab-example">
            <Tab eventKey="add" title="Add">
               <AdminAddOutreach />
            </Tab>
            <Tab eventKey="update" title="Update">
               <AdminUpdateOutreach />
            </Tab>
            <Tab eventKey="delete" title="Delete">
               <AdminDeleteOutreach />
            </Tab>
         </Tabs>
                     
      </div>
        
      )
   }
}

export default Admin_Outreach_Page
