import React, { Component } from 'react'
import { Card, Paper, CardContent, Typography } from '@material-ui/core';
import Boolean from './Boolean.js'
import { cardStyling, paperStyling, divImageStyling } from './constants.js'


export default class GoodBoyGallery extends Component {

    render() {
        return (
            <Paper style={paperStyling}>
                {this.props.goodBoyData.map((goodBoy) => {
                    return <Card key={goodBoy.id} style={cardStyling}>
                        <CardContent>
                            {/* <div style={{ ...divImageStyling, backgroundImage: goodBoy.img_src }}></div> */}
                            <img src={goodBoy.img_src} alt='Beng' />
                            <Typography variant="h4">{goodBoy.name}</Typography>
                            <Boolean good_boy={goodBoy.good_boy}></Boolean>
                            <Typography variant="h6">
                                {`age: ${goodBoy.age}`}
                            </Typography>
                            <Typography variant="h6">
                                {`weight: ${goodBoy.weight}`}
                            </Typography>
                        </CardContent>
                    </Card>
                })}
            </Paper>
        )
    }
}
