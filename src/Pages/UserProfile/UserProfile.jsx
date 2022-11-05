import React from 'react';
import Image from "../../images/SOTW-SOTW.jpg"
import "./UserProfile.css";
import {useSelector, useDispatch} from "react-redux";
import { AuthContext } from "../../Contexts/AuthProvider";

const UserProfile = () => {
  const profile = useSelector((state) => state.Id.Id);
  return (
    <main className="user-main">
    <div className="text">User Profile</div>
      <div className="user-holder">
      <article className="user-info">
        <div className='user-info-div'>
          <img className='user-image' src={profile.image} alt="" />
          <div className="user-detail">
            <p className="user-name">Name: {profile.name}</p>
            <p className='user-talk'>Email: {profile.email}</p>
            {/* <p className='user-talk'>Phone: {profile.phone}</p> */}
            <p className='user-talk'>Stack: {profile.stack}</p>
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
            <th>PERSONAL DEFENCE</th>
            <th>AV. TOTAL 100%</th>
          </tr>
          <tr>
            <td>1</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>49%</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>49%</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>6</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>7</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>8</td>
            <td>49%</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>10</td>
            <td>49%</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>11</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>12</td>
            <td>49%</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>13</td>
            <td>49%</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>14</td>
            <td>49%</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>15</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>16</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>17</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>18</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>19</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>20</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>21</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>22</td>
            <td>49%</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>23</td>
            <td>49%</td>
            <td>49%</td>
            <td>20%</td>
            <td>20%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>24</td>
            <td>49%</td>
            <td>20%</td>
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