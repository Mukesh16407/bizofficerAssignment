import { Table } from '@mui/material'
import React from 'react'


export const Tables = () => {
  return (
    <div>
       <Table >
      <thead>
        <tr>
          <th ></th>
          <th>#</th>
          <th>Case Number</th>
          <th>Title</th>
          <th>Product</th>
          <th>Sub status</th>
          <th>Status</th>
          <th>Technician</th>
          <th>Technician Status</th>
          <th>Technician date Time</th>
          <th>AccountNumber</th>
          <th>Contact Name</th>
          <th>Mobile</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frozen yoghurt</td>
          <td>159</td>
          <td>6</td>
          <td>24</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Ice cream sandwich</td>
          <td>237</td>
          <td>9</td>
          <td>37</td>
          <td>4.3</td>
        </tr>
        <tr>
          <td>Eclair</td>
          <td>262</td>
          <td>16</td>
          <td>24</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Cupcake</td>
          <td>305</td>
          <td>3.7</td>
          <td>67</td>
          <td>4.3</td>
        </tr>
        <tr>
          <td>Gingerbread</td>
          <td>356</td>
          <td>16</td>
          <td>49</td>
          <td>3.9</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}
