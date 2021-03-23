import React from 'react';

const Completed = () => {
  return(
    <div className=" table-completed px-1 py-2 my-4 mx-4 justify-content-center">
    <table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>Thornton</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  </div>
 );
}

export default Completed;