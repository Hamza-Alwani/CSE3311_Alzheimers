/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React from 'react';
import styled from 'styled-components'

// bootstrap
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// components
import Nav from '../Admin_nav';
import AdminAdd from '../AdminPlaces/AdminPlacesComponents/AdminAddPlaces'
import AdminUpdate from '../AdminPlaces/AdminPlacesComponents/AdminUpdatePlaces';
import AdminDelete from '../AdminPlaces/AdminPlacesComponents/AdminDeletePlaces';

//css
import '../../css/main.css'

function Admin_Announcements_Page() {
   return (
      <div className="main-component">
         
         <Nav/>

         {/* Header */}
         <div className="gen_header">
                  Admin Powers Places
         </div>
         <AdminCommunityResourcesContainer>
            {/* Seperate tabs for add, update, delete */}
            <Tabs defaultActiveKey="add" id="uncontrolled-tab-example">
               <Tab eventKey="add" title="Add">
                  <AdminAdd />
               </Tab>
               <Tab eventKey="update" title="Update">
                  <AdminUpdate />
               </Tab>
               <Tab eventKey="delete" title="Delete">
                  <AdminDelete />
               </Tab>
            </Tabs>
         </AdminCommunityResourcesContainer>   
      </div>
   );
 }
 export default Admin_Announcements_Page;


const AdminCommunityResourcesContainer = styled.nav`

  

`