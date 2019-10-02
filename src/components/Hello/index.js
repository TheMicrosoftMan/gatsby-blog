import React from "react"

const helloTo = ["world", "bob", "users", "everybody"]

const Hello = () => {
  return (
    <div className="hello">
      <p>Hello,</p>
      <div className="scroller">
        <div className="inner">
          {helloTo.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default Hello
