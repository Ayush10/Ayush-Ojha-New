import React from 'react'

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <h1
        className={`inline-block w-full text-dark font-bold text-8xl ${className}`}
      >
        {text.split('').map((word, index) => {
          // const style = { animationDelay: `${index * 0.1}s` }
          return (
            <span
              // key={`${word}-${index}`}
              key={word + '-' + index}
              className="inline-block"
              // style={style}
            >
              {word}&nbsp;
            </span>
          )
        })}
      </h1>
    </div>
  )
}

export default AnimatedText
