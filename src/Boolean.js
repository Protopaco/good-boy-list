import { Typography } from '@material-ui/core'
import React, { Component } from 'react'

export default class Boolean extends Component {
    render() {
        return (
            <div>
                {this.props.good_boy
                    ?
                    <Typography variant="h6">good boy: true</Typography>
                    :
                    <Typography variant="h6">good boy: false</Typography>
                }
            </div>
        )
    }
}
