import React, { Component } from 'react'
import fetch from 'superagent';
import { Button, Paper, TextField, Typography, InputAdornment, Select, MenuItem, Card, FormHelperText, FormControl } from '@material-ui/core';
import GoodBoyForm from './GoodBoyForm.js';


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
        breedName: ''
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        const postURL = this.state.API_URL + '/dogs/'

        let entered_breed_id = this.returnBreedID()

        const objectToSend = {
            name: this.state.name,
            age: this.state.age,
            weight: this.state.weight,
            good_boy: this.state.good_boy,
            breed_id: entered_breed_id,
            img_src: this.state.img_src,
            owner_id: 1
        }
            ;
        try {
            await fetch.post(postURL)
                .send(objectToSend);
        } catch (e) {
            alert(e.message);
        }
        this.props.history.push('/');
    };

    handleUpdateStateFromForm = (object) => {
        this.setState(object);
    }


    returnBreedID() {

        for (let breed of this.state.breedsData) {

            if (breed.name === this.state.breedName) {
                return breed.id;
            }
        }
    }


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
                    <GoodBoyForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleUpdateStateFromForm={this.handleUpdateStateFromForm}
                        formLabel="Want to add a good boy?!"
                        currentState={this.state}
                    />
                }
            </>
        )
    }
}
