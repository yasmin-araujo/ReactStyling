import PropTypes from 'prop-types'
import React from 'react'

import './styles/slide.css';

function Slide(props) {
  return (
    <article className='dft__slide' style={props.style}>
      <img src={props.image} alt={props.title} />
      <footer className='dft__slide__footer'>
        <h2 className='dft__slide__footer__title'>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  )
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string
}

export default Slide
