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

  shouldComponentUpdate(nextProps, nextState) {
    const { message } = nextState.dog;
    if (message.includes('terrier')) return false;
    return true;
  }

  componentDidUpdate() {
    const { message } = this.state.dog;
    localStorage.setItem('URL', message);
    const dogBreed = message.split('/')[4];
    alert(dogBreed);
  }

  render() {
    const { dog } = this.state;
    const loading = <span>Loading...</span>
    return(
      <div>
      {!dog ? loading : (<img src={dog.message} alt="Random dog" />)}
        <div>
          <button onClick={ this.fethImageDog }>Novo Dog!</button>
        </div>
      </div>
    );
  }
}

export default DogRequest;
