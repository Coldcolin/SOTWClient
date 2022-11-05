import React from 'react'
import "./AllUsers.css"

const AllUsers = () => {
  return (
    <div className="all-body">
      <div className="all-head">
        <div className="all-filter">All</div>
        <div className="all-search">Search</div>
      </div>
      <div className="all-title-head">
        <div className="all-title"></div>
        <div className="all-title">Name</div>
        <div className="all-title">STACK</div>
        <div className="all-title">EMAIL ADDRESS</div>
      </div>
      <div className="all-user-info">
        <div>Image</div>
        <div>Scot Clinton</div>
        <div>FrontEnd Development</div>
        <div>emmacynth@gmail.com</div>
      </div>

    </div>
  )
}

export default AllUsers