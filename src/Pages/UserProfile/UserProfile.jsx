import React from 'react';
import Image from "../../images/SOTW-SOTW.jpg"
import "./UserProfile.css"

const UserProfile = () => {
  return (
    <main className="user-main">
    <div className="text">User Profile</div>
      <div className="user-holder">
      <article className="user-info">
        <div className='user-info-div'>
          <img className='user-image' src={Image} alt="" />
          <div className="user-detail">
            <p className="user-name">Name: Rosemary Obineche</p>
            <p className='user-talk'>Email: RosemaryObineche@gmail.com</p>
            <p className='user-talk'>Phone: +2340904567898</p>
            <p className='user-talk'>Stack: Frontend Development</p>
          </div>
        </div>
      </article>
      <article className='user-assessment'>
        <p>Your Assessment History</p>
        <table style={{width: "100%"}}>
          <tr className="user-table-head">
            <th>#</th>
            <th>PUNCTUALITY</th>
            <th>ASSIGNMENTS</th>
            <th>ACTIVE PARTICIPATION</th>
            <th>AV. TOTAL 100%</th>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
        </table>
      </article>
      </div>
    </main>
  )
}

export default UserProfile