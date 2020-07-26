import React, { useState } from 'react';
import '../css/main.css';
import {connect} from 'react-redux';
import Profile from './Profile';





function DataUsers({nameUser}) {
        const[userImg, setUserImg] = useState('https://boostchiropractic.co.nz/wp-content/uploads/2016/09/default-user-img.jpg')
        let Iss = nameUser.map(nameS => <h4 class="datName">{nameS.name}</h4>)
      
          return (
        <div className="UserInfo">
            <div className="photoUser">
                <img src={userImg} height="100px" width="100px"/>
            </div>
            <div className="dataUser">
            <span>{Iss}</span>
                <br/>
          <span>surname</span>
            </div>
        </div>
    )
}

function mapStateToProps(state) {

    return {
    nameUser: state.names.names
}
}




export default connect(mapStateToProps,null)(DataUsers);