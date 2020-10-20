/*
  Finished pages are stacked to enter routing 
  only add full pages no components
*/
import React from 'react';
// components
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//pages
import Main_Page from './pages/MainPage'
import Contact_us_Page from './pages/ContactUs'
import Outreach_Page from './pages/Outreach'
import Research_Page from './pages/Research'
import Dementia_Information_Page from './pages/DementiaInformation'
import Community_Resources_Page from './pages/CommunityResources'
import Paget_Not_Found_Page from './pages/PageNotFound'
//admins
import Admin_Home from './admin_pages/Admin_Home'
import Admin_Contact_us_Page from './admin_pages/Admin_ContactUs'
import Admin_Outreach_Page from './admin_pages/Admin_Outreach'
import Admin_Research_Page from './admin_pages/Admin_Research'
import Admin_Dementia_Information_Page from './admin_pages/AdminDementiaInformation/Admin_DementiaInformation'
import Admin_Community_Resources_Page from './admin_pages/AdminCommunityResources/Admin_CommunityResources'
import Admin_login from './admin_pages/Admin_login'
import LanguagePopUp from './components/LanguagePopUp'

import  firebase from './components/firebase';







function  App(){
  



  firebase.auth().onAuthStateChanged( user => {
    if (user) {
        console.log("logedin")
        sessionStorage.setItem('user',user.uid)
        }
    else
      {
        sessionStorage.clear("user")
      }
    })
    
  
   function  getAuth() {
    if(sessionStorage.getItem("user")==='6GlRm12v5gbheHzYP9jXq38bNjf2')
    {
       return true
    }
    else
    {
      return false
    }
   }
  
  

   function islang(){
    if(sessionStorage.getItem("lang"))
    {
       return true
    }
    else
    {
      return false
    }
   }
   



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} 
    render={props =>
      getAuth()? (
        <Component/>
      ) : (
        <Redirect
          to={{
            pathname: "/admin_login"
          }}
        />
      )
    }
  />
);



const LangCheck = ({ component: Component, ...rest }) => (
  <Route
    {...rest} 
    render={props =>
      islang()? (
        <Component/>
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);


   return(    
         <Router>
            <Switch>
               <Route exact path="/" component={LanguagePopUp}/>
               <LangCheck exact path="/home" component={Main_Page} />
               <LangCheck exact path="/Community_Resources" component={Community_Resources_Page} />
               <LangCheck exact path="/Dementia_Information" component={Dementia_Information_Page} />
               <LangCheck exact path="/Research" component={Research_Page} />
               <LangCheck exact path="/Outreach" component={Outreach_Page} />
               <LangCheck exact path="/Contact_us" component={Contact_us_Page} />
               <LangCheck exact path ="/Admin_login" component={Admin_login} />
               <PrivateRoute exact path ="/Admin_Home" component={Admin_Home} />
               <PrivateRoute exact path="/Admin_Community_Resources" component={Admin_Community_Resources_Page} />
               <PrivateRoute exact path="/Admin_Dementia_Information" component={Admin_Dementia_Information_Page} />
               <PrivateRoute exact path="/Admin_Research" component={Admin_Research_Page} />
               <PrivateRoute exact path="/Admin_Outreach" component={Admin_Outreach_Page} />
               <PrivateRoute exact path="/Admin_Contact_us" component={Admin_Contact_us_Page} />
      
               <Route exact path ="/404" component={Paget_Not_Found_Page} />
               <Redirect to ="/404"/>
            </Switch>
            
         </Router>
      
      );
   }
export default App