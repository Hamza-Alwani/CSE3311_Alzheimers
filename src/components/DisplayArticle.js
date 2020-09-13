import React, {Component} from 'react';
import styled from 'styled-components'

// components
import Article from '../components/Article'

// css
import '../css/main.css'; 


// add more functions to display article so it can pull data from firebase and give it to article cell
class DisplayArticle extends Component {

    constructor()
   {
      super()
      this.state = { 
         string: "",
         number: 0
      }
   }

   // convert below to pull articles 
   componentDidMount()
   {

    //   var keys = []
    //   var i;

    //   firebase
    //   .database()
    //   .ref("/contact_us")
    //   .on('value', (snapshot)=>{
    //      snapshot.forEach((childsnapshot)=>{
    //         var childKey = childsnapshot.key;
    //         keys[i]=childKey;
    //         i++

    //         // proper way to update an object's array
    //         var joined = this.state.emails.concat(childKey);
    //         this.setState({ emails: joined })
    //      });
    //   });
   }
   

    
    render(){
        return (
            <div className="all-content">
                <div className="main-component">
                    <DisplayArticleContainer>
                        <div className = "article-display-style">
                            <Article></Article>
                        </div>
                    </DisplayArticleContainer>
                </div>
            </div>
        );
    }
}


export default DisplayArticle;

const DisplayArticleContainer = styled.div`

.article-display-style
{
    ${'' /* somehow css it in a way to list the articles in a cool way */}
}

`;