import React, { Component } from 'react'
import fetch from 'superagent';
import { Button, Paper, TextField, Typography, InputAdornment, Select, MenuItem, Card, FormHelperText, FormControl } from '@material-ui/core'


export default class GoodBoyCreation extends Component {


    state = {
        API_URL: "https://protected-fortress-51085.herokuapp.com",
        breedsData: [],
        loading: true,
        name: '',
        age: 0,
        weight: 0,
        img_src: 0,
        owner_id: 0,
        good_boy: true,
        breed_id: 0,
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        const postURL = this.state.API_URL + '/dogs/'

        await fetch.post(postURL)
            .send({
                name: this.state.name,
                age: this.state.age,
                weight: this.state.weight,
                good_boy: this.state.good_boy,
                breed_id: this.state.breed_id,
                img_src: '',
                owner_id: 1
            });

    };

    componentDidMount = async () => {

        const breedsUrl = this.state.API_URL + '/breeds/';

        const newBreedsData = await fetch.get(breedsUrl);

        await this.setState({
            breedsData: newBreedsData.body,
            loading: false,
        })

    }


    render() {
        return (
            <>
                {this.state.loading
                    ?
                    <img alt="loading" src="https://i.giphy.com/media/3og0ID5AW1SmPuG3u0/giphy.gif?cid=ecf05e47b5b0ex9wqs3i8hteisz4h9a4fccgal6ncy1szb5v&rid=giphy.gif" />
                    :

                    <Paper style={{ display: 'flex', justifyContent: 'center', height: '90vh' }}>
                        <Card style={{ width: '200px', height: '450px', padding: '25px' }}>
                            <Typography variant="h6">Want to add a good boy?!</Typography>
                            <form
                                onSubmit={this.handleFormSubmit}
                                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '400px' }}>

                                <TextField id="name-field" label="name"
                                    onChange={(e) => { this.setState({ name: e.target.value }) }}
                                    required />
                                <FormControl>
                                    <Select
                                        value={this.state.breedsData[0].id}
                                        id='breed'
                                        required
                                        onChange={(e) => this.setState({ breed_id: e.target.value })}>
                                        {this.state.breedsData.map((breed) => {
                                            return <MenuItem key={breed.id} value={breed.id}>{breed.name}</MenuItem>
                                        })};
                                </Select>
                                    <FormHelperText>breed</FormHelperText>
                                </FormControl>
                                <TextField
                                    id="age"
                                    label="age"
                                    onChange={(e) => { this.setState({ age: e.target.value }) }}
                                    type='number'
                                    required />
                                <TextField
                                    id="weight"
                                    label="weight"
                                    onChange={(e) => { this.setState({ weight: e.target.value }) }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">lbs</InputAdornment>
                                    }}
                                    type='number'
                                    required
                                />
                                <TextField
                                    id="img_src"
                                    label="image source"
                                    onChange={(e) => { this.setState({ img_src: e.target.value }) }}
                                    required />
                                <FormControl>
                                    <Select
                                        id='good_boy'
                                        label="is he a good boy?"
                                        required
                                        value='true'
                                        onChange={(e) => { this.setState({ good_boy: e.target.value }) }}>
                                        <MenuItem key='1' value='true'>of course!</MenuItem>
                                        <MenuItem key='2' value='true'>the best boy!</MenuItem>
                                        <MenuItem key='3' value='true'>an AMAZING boy!</MenuItem>
                                    </Select>
                                    <FormHelperText>is he a good boy?</FormHelperText>
                                </FormControl>

                                <Button variant='contained' type='submit' color='primary'>Submit</Button>
                            </form>
                        </Card>
                    </Paper >
                }
            </>
        )
    }
}
