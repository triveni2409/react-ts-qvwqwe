import * as React from 'react';

const data = [
  { id: 1, name: 'emp1', email: 'emp1@gmail.com' },
  { id: 2, name: 'emp2', email: 'emp2@gmail.com' },
  { id: 3, name: 'emp3', email: 'emp3@gmail.com' },
  { id: 4, name: 'emp4', email: 'emp4@gmail.com' },
  { id: 5, name: 'emp5', email: 'emp5@gmail.com' },
];

export default class App extends React.Component {
  render() {
    return (
      <div className="App_test">
        <table>
          <tr>
            <th>ID</th>
            <th>Name </th>
            <th>Email</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td> {val.id} </td>
                <td> {val.name} </td>
                <td> {val.email} </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
