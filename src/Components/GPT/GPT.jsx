import React, { Component } from 'react';
import './GPT.css'

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  

  componentDidMount() {
    this.intervalId = setInterval(this.nextSlide, 9000); // Avança para o próximo slide a cada 3 segundos
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % this.props.slides.length,
    }));
  };

  nextSlideb = (dd) => {
    if(dd !== 0){
      this.setState((prevState) => ({
        currentSlide: (prevState.currentSlide - 1) % this.props.slides.length,
      }));
    }
  };

  render() {
    const { slides } = this.props;
    const { currentSlide } = this.state;
    var ArrayLinks = this.props.linkId

    const getSlide = (data)=>{
      window.location.replace(`/atualidade/${ArrayLinks[data]}`);
    }

    return (
      <div className="contDivPencepal">
        <div className="slide-show" onClick={()=>getSlide(currentSlide)}>
          <img src={slides[currentSlide]} alt={`Carregando...`} className='imgCardSlideNovo' />
          {/* <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className='imgCardSlideNovo' /> */}
        </div>
        <button className="butGoSlide" onClick={this.nextSlide}>Próximo</button>
        <button className="butGoSlideb" onClick={()=>this.nextSlideb(currentSlide)}>Anterior</button>
      </div>
    );
  }
}

export default SlideShow;
