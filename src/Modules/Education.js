import React from "react";
import './style2.scss';

export default function Education() {
  return (
    <div className="container">
      <div className="ssc-education">
        {/* <span className="dot">My Education</span> */}
      <h3>My Education</h3>
        <table class="table" style={{marginTop:"200px"}}>
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Board</th>
              <th scope="col">Marks</th>
              <th scope="col">School/University Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>SSC</td>
              <td>96%</td>
              <td>Balmohan Vidyamandir</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Diploma</td>
              <td>93%</td>
              <td>Governmant Ploytechnic Mumbai</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
