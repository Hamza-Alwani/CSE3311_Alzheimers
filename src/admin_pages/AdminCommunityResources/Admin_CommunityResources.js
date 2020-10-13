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
import Nav from '../../components/Admin_nav';
import AdminAdd from '../AdminCommunityResources/AdminCommunityComponents/AdminAddCommunity';
import AdminUpdate from './AdminCommunityComponents/AdminUpdateCommunity';
import AdminDelete from './AdminCommunityComponents/AdminDeleteCommunity';



//css
import '../../css/main.css'



function Admin_Community_Resources_Page() {

   
   return (
      <div className="main-component">
         
         <Nav/>

         {/* Header */}
         <div className="gen_header">
                  Admin Powers on Community Resources
         </div>
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
                     
      </div>
   );
 }
 export default Admin_Community_Resources_Page;


const AdminCommunityResourcesContainer = styled.nav`

  

`