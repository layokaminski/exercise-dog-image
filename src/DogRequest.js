import React from 'react';

class DogRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: undefined,
    };
    this.fethImageDog = this.fethImageDog.bind(this);
  }
  
  async fethImageDog() {
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestObject = await requestReturn.json();
    this.setState({
      dog: requestObject
    })
  }

  componentDidMount() {
    this.fethImageDog();
  }
  
  render() {
    const { dog } = this.state;
    const loading = <span>Loading...</span>
    if (!this.state.dog) return loading;
    return(
      <div>
        <img src={dog.message} alt="Random dog" />
        <div>
          <button onClick={ this.fethImageDog }>Novo Dog!</button>
        </div>
      </div>
    );
  }
}

export default DogRequest;
