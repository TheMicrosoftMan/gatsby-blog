import React from "react"

const Preloader = props => {
  return (
    <div className="preloader" style={props.style}>
      <div class="chars">
        <span class="char brace">{"{"}</span>
        <span class="dots">
          <span class="char dot _dot-1">.</span>
          <span class="char dot _dot-2">.</span>
          <span class="char dot _dot-3">.</span>
          <span class="char dot _dot-4">.</span>
          <span class="char dot _dot-5">.</span>
        </span>
        <span class="char brace">{"}"}</span>
      </div>
    </div>
  )
}

export default Preloader
