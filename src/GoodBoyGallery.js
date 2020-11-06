import React, { Component } from 'react'
import { Card, Paper, CardContent, Typography, Button } from '@material-ui/core';
import Boolean from './Boolean.js'
import { fetchGetDogs } from './fetch-suite.js';
import { Link } from 'react-router-dom';
import { cardStyling, paperStyling, cardContentStyling, divImageStyling } from './constants.js'


export default class GoodBoyGallery extends Component {
    state = {
        goodBoyData: {},
        loading: true,
    }

    componentDidMount = async () => {

        const goodBoyData = await fetchGetDogs();

        await this.setState({
            goodBoyData: goodBoyData.body,
            loading: false,
        })
    }


    render() {
        return (
            <>
                {
                    this.state.loading
                        ?
                        <img alt="loading" src="https://i.giphy.com/media/3og0ID5AW1SmPuG3u0/giphy.gif?cid=ecf05e47b5b0ex9wqs3i8hteisz4h9a4fccgal6ncy1szb5v&rid=giphy.gif" />
                        :
                        <Paper style={paperStyling}>
                            <Button variant="contained" component={Link} to='/create'>Create Boy</Button>
                            {this.state.goodBoyData.map((goodBoy) => {
                                return <Card key={goodBoy.id} style={cardStyling}>
                                    <CardContent style={cardContentStyling}>
                                        <div style={{ ...divImageStyling, backgroundImage: `url(${goodBoy.img_src})` }}></div>
                                        {/* <img src={goodBoy.img_src} alt='Beng' /> */}
                                        <div></div>
                                        <div>
                                            <Typography variant="h4">{goodBoy.name}</Typography>
                                            <Typography variant="h6">
                                                {`breed: ${goodBoy.breed}`}
                                            </Typography>
                                            <Typography variant="h6">
                                                {`age: ${goodBoy.age}`}
                                            </Typography>
                                            <Typography variant="h6">
                                                {`weight: ${goodBoy.weight}`}
                                            </Typography>
                                            <Boolean good_boy={goodBoy.good_boy}></Boolean>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                component={Link}
                                                to={`/edit/${goodBoy.id}`}
                                            >
                                                Edit
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            })}
                        </Paper>
                }
            </>
        )
    }
}
