import React, {Component} from 'react';

class Result extends Component{
    render(){
        return (
            <table>
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th>Date</th>
              </tr>
            </thead>
    
            <tbody>
              <tr id="newestResult">
                <td className="resultName"></td>
                <td className="resultEmail"></td>
                <td className="resultAction"></td>
                <td className="resultDate"></td>
              </tr>
              <tr id="secondNewResult">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        )
    }
}

export default Result;
