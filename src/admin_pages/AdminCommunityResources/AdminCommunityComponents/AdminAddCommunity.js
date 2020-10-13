/// summary
///   In development - admin page where the admin can create, delete, edit features fpr CommunityResources Page.
/// summary

// import React, { Component } from 'react';
import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// components
import  firebase from '../../../components/firebase';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

//css
import '../../../css/main.css'

// maybe think of a better way of doing this
const stateDropDownList = [
   'Alabama',
   'Alaska',
   'Arizona',
   'Arkansas',
   'California',
   'Colorado',
   'Connecticut',
   'Delaware',
   'Florida',
   'Georgia',
   'Hawaii',
   'Idaho',
   'Illinois',
   'Indiana',
   'Iowa',
   'Kansas',
   'Kentucky',
   'Louisiana',
   'Maine',
   'Maryland',
   'Massachusetts',
   'Michigan',
   'Minnesota',
   'Mississippi',
   'Missouri',
   'Montana',
   'Nebraska',
   'Nevada',
   'New Hampshire',
   'New Jersey',
   'New Mexico',
   'New York',
   'North Carolina',
   'North Dakota',
   'Ohio',
   'Oklahoma',
   'Oregon',
   'Pennsylvania',
   'Rhode Island',
   'South Carolina',
   'South Dakota',
   'Tennessee',
   'Texas',
   'Utah',
   'Vermont',
   'Virginia',
   'Washington',
   'West Virginia',
   'Wisconsin',
   'Wyoming',
 ] 

function AdminAddCommunity() {

   // Data selected by user
   const [selectedState, setSelectedState] = useState('Texas');

   // Pulls all the U.S States on firebase that exist and creates a dropdown list to select from
   const DropdownStates = ({ nameList }) => {
     return (
       <Dropdown>
         <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedState}</Dropdown.Toggle>
         <Dropdown.Menu className="dropdown-menu">
           {nameList.map((state, index) => (
             <Dropdown.Item  onClick={() => {setSelectedState(state)}} key={index}>{state}</Dropdown.Item>
           ))}
         </Dropdown.Menu>
       </Dropdown>
     );
   };
   

 ///////////////////////////////////////////////////////////////////////////////////////
   
   // HTML
   return (
      <div className="PLACEHOLDER-CLASSNAME">
 
         <CommunityContainer>

            {/* Drop down to pick citys */}
            <Form onSubmit={add_button_pressed} className="contact-us-form">
                  <Form.Group>
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="name" id="name" placeholder="name" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Address</Form.Label>
                     <Form.Control type="name" id="address" placeholder="address" />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>State</Form.Label>
                     <Table striped bordered hover className="state-city-dropdown-table">
                        <thead>
                           <tr>
                              <th>
                                 <DropdownStates nameList={stateDropDownList} />
                              </th>
                           </tr>
                        </thead>
                     </Table>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>City</Form.Label>
                     <Form.Control type="name" id="city"  placeholder="city"/>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Google Map</Form.Label>
                     <Form.Control type="name" id="googleMap" placeholder="<iframe>Long Link</iframe>"/>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Phone</Form.Label>
                     <Form.Control type="name" id="phone" placeholder="phone"/>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Website</Form.Label>
                     <Form.Control type="name" id="website" placeholder="web url"/>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="submit">Add</Button>
               </Form>
         </CommunityContainer>
      </div>
   );
 }
 export default AdminAddCommunity;

 const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a href="/" ref={ref} onClick={(e) => {e.preventDefault();onClick(e);}}>
     <div id="state">{children}</div>
   </a>
 ));
 CustomToggle.propTypes = 
 {
   // children: Array,
   // onClick, I don't know what type this is 
 }
 CustomToggle.displayName="CustomDropdownToggle";
 


//  Style-components
 const CommunityContainer = styled.div`
 
/* General */
.community-div
{
  flex: 1;
}

/* Downdown */
.dropdown a
{
  color: var(--mainBlack);
  margin: 0 auto;
}

/* Table */
.google-map-table
{
  height:30rem;
}

th
{
  width: 50%;
}



`;

 
// class Admin_Community_Resources_Page extends Component 
// {

//    constructor()
//    {
//       super()
//       this.state = { 
//          ref:[],
//          name:[],
//          address: [],
//          city: [],
//          stateLocation: [],
//          languages:[],
//          phone:[],
//          website:[],  
//       }
//    }


//    // Lists all the location's children
//    // Store in this.state
//    componentDidMount()
//    {
//       const listref = firebase.database().ref().child('location').orderByKey();
      
//       listref.once('value', snapshot => {
//          snapshot.forEach(child =>{
//             this.setState({
//                 ref:this.state.ref.concat([child.key]),
//                 name: this.state.name.concat(child.val().name),
//                 address: this.state.address.concat(child.val().address),
//                 city: this.state.city.concat(child.val().city),
//                 languages: this.state.languages.concat(child.val().languages),
//                 phone: this.state.phone.concat(child.val().phone),
//                 website: this.state.website.concat(child.val().website),
//                })
//          });
//       });
//    }

  
//    render()
//    {
//       return (
        
//          <div>
//             <Nav/>

//             <Form onSubmit={add_button_pressed} className="contact-us-form">
//                <Form.Group>
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control type="name" id="name" placeholder="name" />
//                </Form.Group>
//                <Form.Group>
//                   <Form.Label>Address</Form.Label>
//                   <Form.Control type="name" id="address" placeholder="address" />
//                </Form.Group>
//                <Form.Group>
//                   <Form.Label>City</Form.Label>
//                   <Form.Control type="name" id="city"  placeholder="city"/>
//                </Form.Group>
//                <Form.Group>
//                   <Form.Label>Languages</Form.Label>
//                   <Form.Control type="name" id="languages" placeholder="languages"/>
//                </Form.Group>
//                <Form.Group>
//                   <Form.Label>phone</Form.Label>
//                   <Form.Control type="name" id="phone" placeholder="phone"/>
//                </Form.Group>
//                <Form.Group>
//                   <Form.Label>Website</Form.Label>
//                   <Form.Control type="name" id="website" placeholder="web url"/>
//                </Form.Group>
//                <Button variant="primary" type="submit" className="submit">Submit</Button>
//             </Form>
            
//             <body>
//               {
//               this.state.ref.map((dataList,index)=>
//                <div key={index} className="boundry">
//                   <div className="body">
//                      <p>
//                         id= {this.state.ref[index]}
//                         <br></br>
//                         name={this.state.name[index]}
//                         <br></br>
//                         address={this.state.address[index]}
//                         <br></br>
//                         city={this.state.city[index]}
//                         <br></br>
//                         languages={this.state.languages[index]}
//                         <br></br>
//                         phone={this.state.phone[index]}
//                         <br></br>
//                         website={this.state.website[index]}
//                         <br></br>
//                      </p>     
//                      <Button onClick={() => delete_button_pressed(this.state.ref[index])}>Delete</Button>
//                   </div>            
//                </div>
//               )}
//             </body>       
//          </div>
//       )
//    }
// }

// export default Admin_Community_Resources_Page

function add_button_pressed(){ 
  if(document.getElementById("name").value && 
     document.getElementById("address").value &&
     document.getElementById("city").value &&
     document.getElementById("googleMap").value &&
     document.getElementById("phone").value &&
     document.getElementById("website").value )
     {
        var key = firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value).push().key;

        firebase.database().ref('community/'+document.getElementById("state").innerHTML+'/'+document.getElementById("city").value+'/'+key).set({
          name:      document.getElementById("name").value,
          address:   document.getElementById("address").value,
          googleMap: document.getElementById("googleMap").value,
          phone:    document.getElementById("phone").value,
          website:   document.getElementById("website").value,
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
        window.alert("Failed. Make sure all fields are full");
     }
 
 }

function delete_button_pressed(obj){
  firebase.database().ref('location').child(obj).remove().then(function(){
      window.alert("Message Deleted");
      window.location.reload(false);
   }).catch(function(error){
   });
}

// 'style-component package used for infile css'
const AdminCommunityResourcesContainer = styled.nav`

  

`