/*
Finished pages are stacked to enter routing 
only add full pages no  components
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
import Admin_Contact_us_Page from './admin_pages/Admin_ContactUs'
import Admin_Outreach_Page from './admin_pages/Admin_Outreach'
import Admin_Research_Page from './admin_pages/Admin_Research'
import Admin_Dementia_Information_Page from './admin_pages/Admin_DementiaInformation'
import Admin_Community_Resources_Page from './admin_pages/AdminCommunityResources/Admin_CommunityResources'

import Admin_Page from './admin_pages/AdminPage'




function App() { 
   return(    
         <Router>
            <Switch>
               <Route exact path="/" component={Main_Page} />
               <Route exact path="/Community_Resources" component={Community_Resources_Page} />
               <Route exact path="/Dementia_Information" component={Dementia_Information_Page} />
               <Route exact path="/Research" component={Research_Page} />
               <Route exact path="/Outreach" component={Outreach_Page} />
               <Route exact path="/Contact_us" component={Contact_us_Page} />
               
               <Route exact path ="/Admin" component={Admin_Page} />

               <Route exact path="/Admin_Community_Resources" component={Admin_Community_Resources_Page} />
               <Route exact path="/Admin_Dementia_Information" component={Admin_Dementia_Information_Page} />
               <Route exact path="/Admin_Research" component={Admin_Research_Page} />
               <Route exact path="/Admin_Outreach" component={Admin_Outreach_Page} />
               <Route exact path="/Admin_Contact_us" component={Admin_Contact_us_Page} />
               
               <Route exact path ="/404" component={Paget_Not_Found_Page} />
               <Redirect to ="/404"/>
            </Switch>
            
         </Router>
      
      );
   }
export default App
