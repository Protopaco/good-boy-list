import React, { Component } from 'react'
import fetch from 'superagent';
import GoodBoyGallery from './GoodBoyGallery.js'

export default class App extends Component {

  state = {
    goodBoyData: {},
    loading: true,
  }

  componentDidMount = async () => {


    const url = 'https://protected-fortress-51085.herokuapp.com/dogs/';
    const goodBoyData = await fetch.get(url);

    await this.setState({
      goodBoyData: goodBoyData.body,
      loading: false,
    })
  }


  render() {
    return (
      <>
        { this.state.loading
          ?
          <img alt="loading" src="https://i.giphy.com/media/3og0ID5AW1SmPuG3u0/giphy.gif?cid=ecf05e47b5b0ex9wqs3i8hteisz4h9a4fccgal6ncy1szb5v&rid=giphy.gif" />
          :
          <GoodBoyGallery
            goodBoyData={this.state.goodBoyData}
          />
        }
      </>
    )
  }
}
