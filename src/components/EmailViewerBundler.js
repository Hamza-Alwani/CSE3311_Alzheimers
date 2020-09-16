import React, { Component } from 'react';
// components
import Nav from '../components/NavigationBar';
import Footer from '../components/Footer'; 
import EmailViewer from '../components/EmailViewer';
import  '../components/EmailViewerBundler';
import  firebase from '../components/firebase';
//css
import '../css/main.css'


class ClassAdminPage extends Component{
  
   constructor(props){
      super(props);
      this.state={
         ref:[],
         name:[],
         emailaddress:[],
         emailbody:[],
         post: '',
      };
   }

componentDidMount()  
{
   const rootRef = firebase.database().ref("contact_us");
   const post = rootRef.child().orderByKey();
        post.once('value', snap => {
          snap.forEach(child => {
              this.setState({
                  ref:   this.state.name.concat([child.key]),
                  name:  this.state.name.concat([child.val().name]),
                  emailaddress: this.state.title.concat([child.val().email_address]),
                  emailbody: this.state.story.concat([child.val().email_body])
              })
                 const postList = this.state.date.map((dataList, index) =>
                 <p>
                  {dataList}
                  {this.state.name[index]},
                  {this.state.emailaddress[index]},
                  {this.state.emailbody[index]}
                  </p>
               )
   
               this.setState({
                   post: postList
               });
          });
      }); 
   };

}