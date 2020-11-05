import React, { Component } from 'react'
import fetch from 'superagent';
import { Button, Paper, TextField, Typography, InputAdornment, Select, MenuItem, Card } from '@material-ui/core'


export default class GoodBoyCreation extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        alert(this.state.name)
    }

    render() {
        return (
            <Paper style={{ display: 'flex', justifyContent: 'center', height: '90vh' }}>
                <Card style={{ width: '200px', height: '450px', padding: '25px' }}>
                    <Typography variant="h6">Want to add a good boy?!</Typography>
                    <form
                        onSubmit={this.handleFormSubmit}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '400px' }}>

                        <TextField id="name-field" label="name"
                            onChange={(e) => { this.setState({ name: e.target.value }) }}
                            required />
                        <TextField
                            id="age"
                            label="age"
                            onChange={(e) => { this.setState({ age: e.target.value }) }}
                            type='number'
                            required />
                        <TextField id="weight" label="weight"
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
                        <Select
                            labelId='good boy?'
                            id='good_boy'
                            required >
                            <MenuItem value='true' >Of Course!</MenuItem>

                            <MenuItem value='true'>The Best Boy!</MenuItem>
                            <MenuItem value='true'>An AMAZING Boy!</MenuItem>

                        </Select>

                        <Button variant='contained' type='submit' color='primary'>Submit</Button>
                    </form>
                </Card>
            </Paper >
        )
    }
}
