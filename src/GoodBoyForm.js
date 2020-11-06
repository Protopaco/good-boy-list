import React, { Component } from 'react'
import { Button, Paper, TextField, Typography, InputAdornment, Select, MenuItem, Card, Link, FormHelperText, FormControl } from '@material-ui/core'


export default class GoodBoyForm extends Component {
    render() {
        return (
            <Paper style={{ display: 'flex', justifyContent: 'center', height: '90vh' }}>
                <Card style={{ width: '200px', height: '450px', padding: '25px' }}>
                    <Typography variant="h6">{this.props.formLabel}</Typography>
                    <form
                        onSubmit={this.props.handleFormSubmit}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '400px' }}>

                        <TextField id="name-field"
                            label="name"
                            value={this.props.currentState.name}
                            onChange={(e) => this.props.handleUpdateStateFromForm({ name: e.target.value })}
                            required />
                        <FormControl>
                            <Select
                                value={this.props.currentState.breedName}
                                id='breed'
                                required
                                onChange={(e) => this.props.handleUpdateStateFromForm({ breedName: e.target.value })}>
                                {this.props.currentState.breedsData.map((breed) => {

                                    return <MenuItem key={breed.id} value={breed.name}>{breed.name}</MenuItem>
                                })};
                            </Select>
                            <FormHelperText>breed</FormHelperText>
                        </FormControl>
                        <TextField
                            id="age"
                            label="age"
                            value={this.props.currentState.age}
                            onChange={(e) => this.props.handleUpdateStateFromForm({ age: e.target.value })}
                            type='number'
                            required />
                        <TextField
                            id="weight"
                            label="weight"
                            value={this.props.currentState.weight}
                            onChange={(e) => this.props.handleUpdateStateFromForm({ weight: e.target.value })}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">lbs</InputAdornment>
                            }}
                            type='number'
                            required
                        />
                        <TextField
                            id="img_src"
                            label="image source"
                            value={this.props.currentState.img_src}
                            onChange={(e) => this.props.handleUpdateStateFromForm({ img_src: e.target.value })}
                            required />
                        <FormControl>
                            <Select
                                id='good_boy'
                                label="is he a good boy?"
                                required
                                value={this.props.currentState.good_boy}
                                onChange={(e) => this.props.handleUpdateStateFromForm({ good_boy: e.target.value })}>
                                <MenuItem key='1' value='true'>of course!</MenuItem>

                            </Select>
                            <FormHelperText>is he a good boy?</FormHelperText>
                        </FormControl>

                        <Button variant='contained' type='submit' color='primary'>{this.props.currentState.formSubmitButtonLabel}</Button>
                        {this.props.currentState.deleteButton ?
                            <Button
                                variant='contained'
                                color='primary'
                                component={Link}
                                onClick={async () => {
                                    this.props.handleDeleteButton()
                                }}
                            >Delete
                        </Button>
                            : <> </>
                        }
                    </form>
                </Card>
            </Paper >

        )
    }
}
