/// summary
///
/// The component should be able to be inserted into the community page
/// 
/// summary


import React, {useState, useEffect } from 'react';
import styled from 'styled-components'

// firebase imports
 import firebase from '../../shared_comps/firebase';

// bootstrap components
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import DisplayPlaces from  './DisplayPlaces'

// css
import '../../css/main.css'; 

// translations
import strings from '../../translation/CommunityLang.js'
strings.setLanguage(localStorage.getItem("Language"));

function CommunityComponent() {

  // Data from firebase once the pull is complete 
  const [googleMap, setGoogleMap] = useState('Error: No website pulled'); // doing the hard way because the normal google maps api cost money
  const [stateList, setStateList] = useState([]); // list of all states in firebase
  const [cityList, setCityList] = useState([]); // list of all city based on state in firebase
  const [uniqueCityList, setUniqueCityList] = useState([]); // used to filter out duplicate cities
  const [uniqueStateList, setUniqueStateList] = useState([]); // used to filter out duplicate states

  // Data selected by user
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState(''); // Bug - list doesn't load up if 'Dallas' doesn't exist anymore in firebase 

  // language can only be 'ALL' 'KO' 'ZH'
  const [selectedLang, setSelectedLang] = useState('ALL');
  const handleChange = (val) => setSelectedLang(val); // use with id='lang-buttons' to select the correct language on the website

  // Pulls a list of all the U.S States AND Cities that are ALL, KO, or CH
  useEffect(() => {
    const database = firebase.database()
    const rootRef = database.ref("community");

    // Queries for any 'ALL' Subtrees in firebase, if yes then it will compile a new list of States
    if(selectedLang === 'ALL')
    {
      // Redoes the state dropdown list, when ALL is selected
      setStateList([]);
      setUniqueStateList([]);
      rootRef.on('value', snap => {
        snap.forEach(function(state) {
          state.forEach(function(city) {
            city.forEach(function(id){
              if(id.hasChild("ALL")){
                setStateList(stateList => [...stateList, state.key]);
              }
            })
          })
        });
      });
    }

    // // Queries for any 'KO' Subtrees in firebase, if yes then it will compile a new list of States
    else if(selectedLang === 'KO')
    {

      // Redoes the state dropdown list, when KO is selected
      setStateList([]);
      setUniqueStateList([]);
      rootRef.on('value', snap => {
        snap.forEach(function(state) {
          state.forEach(function(city) {
            city.forEach(function(id){
              if(id.hasChild("KO")){
                setStateList(stateList => [...stateList, state.key]);
              }
            })
          })
        });
      });
    }

    // // Queries for any Chinese Subtrees in firebase, if yes then it will compile a new list of States
    else if(selectedLang === 'CH')
    {
      setStateList([]);
      setUniqueStateList([]);
      rootRef.on('value', snap => {
        snap.forEach(function(state) {
          state.forEach(function(city) {
            city.forEach(function(id){
              if(id.hasChild("CH")){
                setStateList(stateList => [...stateList, state.key]);
              }
            })
          })
        });
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [selectedLang])
  

  // Filter the state list for duplicates 
  useEffect(() => {
    const tempUniqueStateList = stateList.filter((val, id, array) => {
      return array.indexOf(val) === id;  
    });
    setUniqueStateList(tempUniqueStateList);
    setSelectedState(tempUniqueStateList[0]);
  }, [stateList])


  // Create city list based on the selected state
  useEffect(() => {
    setCityList([]);
    setUniqueCityList([]);  
    const database = firebase.database()
    const rootRef = database.ref("community");

    if(selectedState !== null && selectedState !== '' && selectedState !== undefined) 
    {
      rootRef.on('value', snap => {
        snap.child(selectedState).forEach(function(city){
            city.forEach(function(id){
            if(id.hasChild(selectedLang)){
              setCityList(cityList => [...cityList, city.key]);
            }
          })
        })
      });
    }
  }, [selectedState])


  // Filter the city list for duplicates 
  useEffect(() => {
    const tempUniqueCityList = cityList.filter((val, id, array) => {
      return array.indexOf(val) === id;  
    });
    setUniqueCityList(tempUniqueCityList);
    setSelectedCity(tempUniqueCityList[0]);
  }, [cityList])


  // When State, City, or Language is changed, pull a new embeded map
  useEffect(() => {
    if(selectedState !== null && selectedState !== '' && selectedState !== undefined) 
    {
      const database = firebase.database()
      const rootRef = database.ref("community/" + selectedState );
      
      rootRef.on('value', snap => {
        snap.child(selectedCity).forEach(id => {
          if(id.hasChild(selectedLang))
          {
            setGoogleMap(id.child(selectedLang).child("googleMap").val());
          }
        })
      }); 
    }
  }, [selectedState, selectedCity, selectedLang])





  // Dropdown of all states based on language
  const DropdownStates = ({ nameList }) => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedState}</Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          {nameList.map((state, index) => (
            <Dropdown.Item onClick={() => {setSelectedState(state);}}  key={index}>{state}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  // Dropdown of all the cities of the selected state
  const DropdownCity = ({ nameList }) => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="dropdown-button">{selectedCity}</Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          {nameList.map((city, index) => (
            <Dropdown.Item onClick={() => setSelectedCity(city)} key={index}>{city}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }


  
///////////////////////////////////////////////////////////////////////////////////////
  
  // HTML
  return (
    <div className="main-component">

      {/* Header */}
      <CommunityContainer>
      <div>
        <div className="gen_header">{strings.Header}</div>
        <div className="lang-buttons-div">
          <ToggleButtonGroup className="lang-buttons" type="radio" name="lang-button-name" value={selectedLang} onChange={handleChange}>
            <ToggleButton variant="light" value={'ALL'}><b> All</b> </ToggleButton>
            <ToggleButton variant="light" value={'KO'}><b> Korean</b> </ToggleButton>
            <ToggleButton variant="light" value={'CH'}><b> Chinese</b></ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>

        {/* Drop down to pick citys */}
        <Table striped bordered hover className="state-city-dropdown-table">
          <thead>
            <tr>
            
              <th>
                <DropdownStates nameList={uniqueStateList} />
              </th>
              <th>
                <DropdownCity nameList={uniqueCityList} />
              </th>
            </tr>
          </thead>
        </Table>

        {/* Information about the city */}
        <Table striped bordered hover className="google-map-table">
          <thead>

          </thead>
          <tbody>
            <tr>
              <td >
                {/* yolo */}
                <div className="iframe-google-map" dangerouslySetInnerHTML={{ __html:googleMap}}></div>
              </td>
            </tr>
          </tbody>
        </Table>
      </CommunityContainer>
      <DisplayPlaces></DisplayPlaces>
    </div>
  );
}

export default CommunityComponent;

// Opening Drop down: CSS of dropdown
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="/"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));
CustomToggle.propTypes = 
{
  // children: String,
  // onClick, I don't know what type this is 
}
CustomToggle.displayName="CustomDropdownToggle";

// 'style-component package used for infile css'
const CommunityContainer = styled.div`

/* Maybe we're use it - centers the table and makes the drop down smaller */
/* .state-city-dropdown-table
{
  width: 25%;
  margin: 0 auto;
  margin-bottom: 1rem;
} */

/* General */
.community-div
{
  flex: 1;
}

.gen_header
{
  float: left;
}

.lang-buttons-div
{
  float: right;
  margin-bottom: 1rem;
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
  height:45rem;
}

th
{
  width: 50%;
}

.iframe-google-map
{
  height:100%;
}

iframe
{
  height:100%;
  width:100%;
}
/* End Table */

/* On screens that are 600px or less, set the background color to blue */
@media only screen and (max-width: 600px) {
  
  .gen_header
  {
    text-alignment: center;
  }

  .lang-buttons-div
  {
    float: left;
    width: 100%;
    position: relative;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .lang-buttons
  {
    position:absolute;
    left:50%;
    top:50%;

    transform: translate(-50%,-50%);
  }

  .state-city-dropdown-table
  {
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  .google-map-table
  {
    height: 30rem;
  }
}

`;
