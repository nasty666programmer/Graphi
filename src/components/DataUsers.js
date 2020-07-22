import React from 'react';
import '../css/main.css';
import {connect} from 'react-redux';
import Profile from './Profile';


class DataUsers extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            src: 'https://boostchiropractic.co.nz/wp-content/uploads/2016/09/default-user-img.jpg'
        }
    
    }
    

    render(nameInput){ 
        return(
        <div className="UserInfo">
            
            <div className="photoUser">
                <img src={this.state.src} height="100px" width="100px"/>
            </div>
            <div className="dataUser">
            <span>{nameInput}</span>
                <br/>
                <span>Surname</span>
            </div>
        </div>
    )
}
}

function mapStateToProps(state) {
    console.log(state.nameInput);
    return {
        nameInput:state.nameUser
    }
}



export default connect(mapStateToProps)(DataUsers);