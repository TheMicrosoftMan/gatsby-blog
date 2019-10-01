import React from "react"

const helloTo = ["world", "bob", "users", "everybody"]

const Hello = () => {
  return (
    <div className="hello">
      <p>Hello,</p>
      <div className="scroller">
        <div className="inner">
          {helloTo.map(item => {
            return <span>{item}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default Hello
