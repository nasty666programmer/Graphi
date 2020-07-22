import React from 'react'
import DataUsers from './DataUsers'
import Menu from './Menu'

class Main extends React.Component {

    render() {
        return(
            <div>
                <DataUsers />
                <Menu />
            </div>
        )
    }
}

export default Main;