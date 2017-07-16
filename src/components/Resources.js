
import React from 'react';
import '../scss/resources.css';

import ShowMore from '../icons/ShowMore.svg';

/*import data*/
import resourcesData from '../data/resourcesData';
import resourcesSubNav from '../data/resourcesSubNav';


class Resources extends React.Component{
    state={
      topicState:{name:null,status:"close"}

    };
    onSubHeadingClick = (props)=>{
        let prevTopicStateName = this.state.topicState.name;
        let newTopicStateName = props;
        let newTopicStatus= (prevTopicStateName===newTopicStateName ||prevTopicStateName ===null) && this.state.topicState.status === "open" ? "close" : "open";
        this.setState({
            topicState:{name: newTopicStateName,status: newTopicStatus}

        })
    };

    onContentsLoad=(props)=>{
        console.log(props);



    };

    render() {

       let headings = new Set();
       resourcesSubNav.map((props)=>{
           headings.add(props.name);
       });

       let subHeadings =[...headings].map((props)=>{
           return(
               <div key ={props} onLoad={this.onContentsLoad(props)}>
                   <div className="sub-heading"  onClick = {(e)=>{e.preventDefault();this.onSubHeadingClick(props)}}>
                       <span>{props}</span>
                       <span className="show-more"><img src={ShowMore} /></span>
                   </div>
                   {(this.state.topicState.name === props && this.state.topicState.status ==="open") ?
                   <div>
                       <div className="sub-heading">
                           <span> Hello World</span>
                           <span> Bye World</span>
                       </div>
                       <div className="sub-heading">
                           <span> Hello World</span>
                           <span> Bye World</span>
                       </div>
                   </div>
                       :
                       null
                   }
               </div>
           );

       });
       return(
           <div className="resources">
               {subHeadings}
           </div>

       )


    }
}

export default Resources