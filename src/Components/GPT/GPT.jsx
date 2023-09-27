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

    console.log(slides[currentSlide])

    return (
      <>
        {slides[currentSlide] ? (
          <div className="contDivPencepal">
            <div className="slide-show" onClick={()=>getSlide(currentSlide)}>
              <img src={slides[currentSlide] ? slides[currentSlide] : "https://scdesign.org.br/wp-content/uploads/2021/04/fundo-branco-png-1024x576.png"} alt={`Carregando...`} className='imgCardSlideNovo' />
              {/* <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className='imgCardSlideNovo' /> */}
            </div>
            <button className="butGoSlide" onClick={this.nextSlide}>Próximo</button>
            <button className="butGoSlideb" onClick={()=>this.nextSlideb(currentSlide)}>Anterior</button>
          </div>
        ):(
          <div className='carregarText'>Carregando ....</div>
        )}
      </>
    );
  }
}

export default SlideShow;
