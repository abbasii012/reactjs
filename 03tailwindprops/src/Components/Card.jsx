import React from 'react'

function Card(props) {
const {username,btn} = props
console.log(props.value.username2);



  
  
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{username}</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto impedit eligendi assumenda rerum perferendis maiores.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{btn}</button>
    </div>
  </div>
</div>
  )
}

export default Card