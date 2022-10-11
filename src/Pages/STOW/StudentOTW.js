import React from 'react';
import "./StudentOTW.css";
import {FaGraduationCap} from "react-icons/fa";
import {FaChalkboardTeacher} from "react-icons/fa"
import {HiOutlineUserGroup} from "react-icons/hi"
import SOTW from "../../images/SOTW-SOTW.jpg"

const StudentOTW = () => {
  return (
    <div className="sotw-main">
      <main className="sotw-container">
      <h2>Dashboard</h2>
        <section className="sotw-top">
          <div className="sotw-navs">
            <div className="sotw-boxes">
              <div className="sotw-circle-1"><HiOutlineUserGroup/></div>
              <div className="sotw-info">
                <div>24</div>
                <span>All Users</span>
              </div>
            </div>
          </div>
          <div className="sotw-navs">
            <div className="sotw-boxes">
              <div className="sotw-circle-2"><FaGraduationCap/></div>
              <div className="sotw-info">
                <div>20</div>
                <span>Students</span>
              </div>
            </div>
          </div>
          <div className="sotw-navs">
            <div className="sotw-boxes">
              <div className="sotw-circle-3"><FaChalkboardTeacher/></div>
              <div className="sotw-info">
                <div>4</div>
                <span>Instructors</span>
              </div>
            </div>
          </div>
        </section>
        <section className="sotw-middle">
          <div className="sotw-sotw">
            <img className="sotw-image" src={SOTW} alt="img"/>
            <div className= "sotw-image-info">
            <p className="sotw-image-info-h4">STUDENT OF THE WEEK</p>
            <p className="sotw-image-info-h3">MARY OBINECHE</p>
            <p className="sotw-image-info-p">Frontend Developer</p>
            </div>
          </div>
          <div className="sotw-history">
            <p>Student of the week History</p>
            <table style={{width: "100%"}}>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>WEEK</th>
                <th>DATE</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rosemary Obineche</td>
                <td>One</td>
                <td>22/09/2022</td>
              </tr>
            </table>
            

          </div>
        </section>
        <section></section>
      </main>
    </div>
  )
}

export default StudentOTW