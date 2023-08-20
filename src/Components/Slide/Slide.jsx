import React from 'react'
import './Slide.css'

export default function Slide() {
  return (
    <div className='Slide'>
      <div className="slideFull">{/* slide com 100% */}
        <div className="imgContentVida">{/* Cada Slide */}
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide first">
              <img src="./droga.jpg" alt="" />
            </div>
            <div className="slide">
              <img src="./droga1.jpg" alt="" />
            </div>            
            <div className="slide">
              <img src="./droga2.jpg" alt="" />
            </div>
            <div className="slide">
              <img src="./dg.jpg" alt="" />
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>

          <div className="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
          </div>
        </div>
        </div>
      </div>
      
      
    </div>
  )
}
