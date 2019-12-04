import React from 'react'

class Meme extends React.Component {
  topText: string = '';
  bottomText: string = '';

  constructor(params: any) {
    super(params);

    this.state = {
      topText: '',
      bottomText: ''
    }
  }
}
