/*
  Finished pages are stacked to enter routing 
  only add full pages no components
*/
import React from 'react';
// components
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//pages
import Homepage from './pages/Homepage'
import Contact_us_Page from './pages/ContactUs'
import Outreach_Page from './pages/Outreach'
import Research_Page from './pages/Research'
import Dementia_Information_Page from './pages/DementiaInformation'
import Community_Resources_Page from './pages/CommunityResources'
import About_Us_Page from './pages/AboutUs'


//Shared pages
import Paget_Not_Found_Page from './shared_page/PageNotFound'
import LanguageSelection from './shared_page/LanguageSelection'

//admins
import Admin_Login from './Admin/Admin_Login'
import Admin_Home from './Admin/AdminHome/Admin_Home'
import Admin_Announcements from './Admin/AdminAnnouncements/Admin_Announcements'
import Admin_Community_Resources_Page from './Admin/AdminCommunityResources/Admin_CommunityResources'
import Admin_Places_Page from './Admin/AdminPlaces/Admin_Places'
import Admin_Dementia_Information_Page from './Admin/AdminDementiaInformation/Admin_DementiaInformation'

import Admin_Outreach_Page from './Admin/AdminOutreach/Admin_Outreach'


import  firebase from './shared_comps/firebase';



function  App(){

  // Upon loading up website, if first time, set language to english 
  if(localStorage.getItem("Language") == null)
  {
    localStorage.setItem("Language", "en");
  }

  // Authicate users
  firebase.auth().onAuthStateChanged( user => {
    if (user) {
        console.log("logedin")
        sessionStorage.setItem('user',user.uid)
        }
    else
      {
        sessionStorage.removeItem("user")
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
  // Authicate users




  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest} 
      render={props =>
        getAuth()? (
          <Component/>
        ) : (
          <Redirect
            to={{
              pathname: "/Admin_Login"
            }}
          />
        )
      }
    />
  );

  return(    
        <Router>
          <Switch>
              <Route exact path="/" component={LanguageSelection}/>

              <Route exact path="/home" component={Homepage} />
              <Route exact path="/Community_Resources" component={Community_Resources_Page} />
              <Route exact path="/Dementia_Information" component={Dementia_Information_Page} />
              <Route exact path="/Research" component={Research_Page} />
              <Route exact path="/Outreach" component={Outreach_Page} />
              <Route exact path="/Contact_us" component={Contact_us_Page} />
              <Route exact path="/About_Us" component={About_Us_Page} />

              <Route exact path ="/Admin_Login" component={Admin_Login} />
              
              <PrivateRoute exact path ="/Admin_Home" component={Admin_Home} />
              <PrivateRoute exact path ="/Admin_Announcements" component={Admin_Announcements} />
              <PrivateRoute exact path="/Admin_Community_Resources" component={Admin_Community_Resources_Page} />
              <PrivateRoute exact path="/Admin_Places" component={Admin_Places_Page} />
              <PrivateRoute exact path="/Admin_Dementia_Information" component={Admin_Dementia_Information_Page} />
              <PrivateRoute exact path="/Admin_Outreach" component={Admin_Outreach_Page} />

              <Route exact path ="/404" component={Paget_Not_Found_Page} />
              <Redirect to ="/404"/>
          </Switch>
          
        </Router>
    );
  }
export default App