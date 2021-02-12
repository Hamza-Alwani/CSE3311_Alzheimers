import React from 'react';
import styled from 'styled-components'


// css
import '../../css/main.css'; 
import '../../css/announcement.css'


import strings from '../../translation/CommunityLang.js'
strings.setLanguage(localStorage.getItem("Language"));


function Places() {


	return (
        <LegendContainer >
            <div class='my-legend'>
                <div class='legend-title'>Legend</div>
                <div class='legend-scale'>
                <ul class='legend-labels'>
                    <li><span style={{background: "#000080"}}></span>Korean</li>
                    <li><span style={{background: "#800000"}}></span>Chinese</li>
                </ul>
                </div>
            </div>
        </LegendContainer>
    );
}
export default Places;

const LegendContainer = styled.div`
  .my-legend .legend-title {
    text-align: left;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 90%;
    }
  .my-legend .legend-scale ul {
    margin: 0;
    margin-bottom: 5px;
    padding: 0;
    float: left;
    list-style: none;
    }
  .my-legend .legend-scale ul li {
    font-size: 80%;
    list-style: none;
    margin-left: 0;
    line-height: 18px;
    margin-bottom: 2px;
    }
  .my-legend ul.legend-labels li span {
    display: block;
    float: left;
    height: 16px;
    width: 30px;
    margin-right: 5px;
    margin-left: 0;
    border: 1px solid #999;
    }
  .my-legend .legend-source {
    font-size: 70%;
    color: #999;
    clear: both;
    }
  .my-legend a {
    color: #777;
  }

`;
