/*
  Finished pages are stacked to enter routing 
  only add full pages no components
*/
import React from 'react';
// components
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//pages-English
import Main_Page_en from './pages_en/MainPage_en'
import Contact_us_Page_en from './pages_en/ContactUs_en'
import Outreach_Page_en from './pages_en/Outreach_en'
import Research_Page_en from './pages_en/Research_en'
import Dementia_Information_Page_en from './pages_en/DementiaInformation_en'
import Community_Resources_Page_en from './pages_en/CommunityResources_en'
import About_Us_Page_en from './pages_en/AboutUs_en'

//pages-Ch
import Main_Page_ch from './pages_ch/MainPage_ch'
import Contact_us_Page_ch from './pages_ch/ContactUs_ch'
import Outreach_Page_ch from './pages_ch/Outreach_ch'
import Research_Page_ch from './pages_ch/Research_ch'
import Dementia_Information_Page_ch from './pages_ch/DementiaInformation_ch'
import Community_Resources_Page_ch from './pages_ch/CommunityResources_ch'
import About_Us_Page_ch from './pages_ch/AboutUs_ch'

//

//pages-Korean
import Main_Page_ko from './pages_ko/MainPage_ko'
import Contact_us_Page_ko from './pages_ko/ContactUs_ko'
import Outreach_Page_ko from './pages_ko/Outreach_ko'
import Research_Page_ko from './pages_ko/Research_ko'
import Dementia_Information_Page_ko from './pages_ko/DementiaInformation_ko'
import Community_Resources_Page_ko from './pages_ko/CommunityResources_ko'
import About_Us_Page_ko from './pages_ko/AboutUs_ko'

//Shared pages
import Paget_Not_Found_Page from './shared_page/PageNotFound'
import LanguagePopUp from './shared_comps/LanguagePopUp'

//admins
import Admin_Home from './admin_pages/Admin_Home'
import Admin_Outreach_Page from './admin_pages/Admin_Outreach'
import Admin_Research_Page from './admin_pages/Admin_Research'
import Admin_Dementia_Information_Page from './admin_pages/AdminDementiaInformation/Admin_DementiaInformation'
import Admin_Community_Resources_Page from './admin_pages/AdminCommunityResources/Admin_CommunityResources'
import Admin_login from './admin_pages/Admin_login'

import  firebase from './shared_comps/firebase';



function  App(){
  


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


               <LangCheck exact path="/home_en" component={Main_Page_en} />
               <LangCheck exact path="/Community_Resources_en" component={Community_Resources_Page_en} />
               <LangCheck exact path="/Dementia_Information_en" component={Dementia_Information_Page_en} />
               <LangCheck exact path="/Research_en" component={Research_Page_en} />
               <LangCheck exact path="/Outreach_en" component={Outreach_Page_en} />
               <LangCheck exact path="/Contact_us_en" component={Contact_us_Page_en} />
               <LangCheck exact path="/About_Us_en" component={About_Us_Page_en} />

               <LangCheck exact path="/home_ch" component={Main_Page_ch} />
               <LangCheck exact path="/Community_Resources_ch" component={Community_Resources_Page_ch} />
               <LangCheck exact path="/Dementia_Information_ch" component={Dementia_Information_Page_ch} />
               <LangCheck exact path="/Research_ch" component={Research_Page_ch} />
               <LangCheck exact path="/Outreach_ch" component={Outreach_Page_ch} />
               <LangCheck exact path="/Contact_us_ch" component={Contact_us_Page_ch} />
               <LangCheck exact path="/About_Us_ch" component={About_Us_Page_ch} />
               


               <LangCheck exact path="/home_ko" component={Main_Page_ko} />
               <LangCheck exact path="/Community_Resources_ko" component={Community_Resources_Page_ko} />
               <LangCheck exact path="/Dementia_Information_ko" component={Dementia_Information_Page_ko} />
               <LangCheck exact path="/Research_ko" component={Research_Page_ko} />
               <LangCheck exact path="/Outreach_ko" component={Outreach_Page_ko} />
               <LangCheck exact path="/Contact_us_ko" component={Contact_us_Page_ko} />
               <LangCheck exact path="/About_Us_ko" component={About_Us_Page_ko} />
               


               <Route exact path ="/Admin_login" component={Admin_login} />
               <PrivateRoute exact path ="/Admin_Home" component={Admin_Home} />
               <PrivateRoute exact path="/Admin_Community_Resources" component={Admin_Community_Resources_Page} />
               <PrivateRoute exact path="/Admin_Dementia_Information" component={Admin_Dementia_Information_Page} />
               <PrivateRoute exact path="/Admin_Research" component={Admin_Research_Page} />
               <PrivateRoute exact path="/Admin_Outreach" component={Admin_Outreach_Page} />


               <Route exact path ="/404" component={Paget_Not_Found_Page} />
               <Redirect to ="/404"/>
            </Switch>
            
         </Router>
      
      );
   }
export default App