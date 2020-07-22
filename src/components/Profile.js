import React from 'react'
import {connect} from 'react-redux'
import {createNames} from '../redux/action'

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ' ',
            surname: ' '
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name:event.target.value,
            surname:event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createNames(); 
        console.log( this.state.name);

    }

    

    render() {
        return(
            <div> 
                <div className="FormsContainer">
                    <div className="formWrapp">
                        <form className="formUserProfile" onSubmit={this.handleSubmit}>
                            <label>Names</label>
                            <br />
                            <input type="text" value={this.state.name} onChange={this.handleChange}/>
                            <br />
                            <label type="text" value={this.state.surname} onChange={this.handleChange}>Surname</label>
                            <br />
                            <input />
                            <div class="SomeDiv">
                            <input type="file" /> 
                            </div>
                            <button id="AddDataUser">Save Data</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    createNames
}
export default connect(null,mapDispatchToProps)(Profile)