import React, { Component } from 'react'
import GoodBoyForm from './GoodBoyForm.js';
import { fetchPostDog, fetchGetBreeds } from './fetch-suite.js';


export default class GoodBoyCreation extends Component {


    state = {
        breedsData: [],
        loading: true,
        name: '',
        age: '',
        weight: '',
        img_src: '',
        owner_id: '',
        good_boy: true,
        breedName: ''
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();

        let entered_breed = this.state.breedsData.find(breed => breed.name === this.state.breedName);


        const objectToSend = {
            name: this.state.name,
            age: this.state.age,
            weight: this.state.weight,
            good_boy: this.state.good_boy,
            breed_id: entered_breed.id,
            img_src: this.state.img_src,
            owner_id: 1
        }

        try {
            await fetchPostDog(objectToSend);
        } catch (e) {
            alert(e.message);
        }
        this.props.history.push('/');
    };


    handleUpdateStateFromForm = (object) => {
        this.setState(object);
    }

    componentDidMount = async () => {

        const breedsData = await fetchGetBreeds();

        await this.setState({
            breedsData: breedsData.body,
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
