import React, { useMemo, useState, useEffect , Component} from "react";
import axios from "axios";
import { render } from 'react-dom';
import ReactTable from 'react-table';
import logo from './restoration-logo.png';
import us from './vendor-logo.PNG';


import Table from "./Table";
import "./App.css";

const Status = ({ value }) => {
  // Loop through the array and create a badge-like component instead of a comma-separated string
  return (
          <span key={value} className="badge">
          </span>

  );
};

function App() {

  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */


  const columns = useMemo(
    () => [

      {
        // first group - TV Show
        Header: "Inventory",
        // First group columns
        columns: [
          {
            Header: "Item",
            accessor: "item.name"
          },
          {
            Header: "Type",
            accessor: "item.type"
          },
          {
            Header: "QTY",
            accessor: "item.quantity"
          },
          {
            Header:"Unit Price",
            accessor:"item.price"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Order Details",
        // Second group columns
        columns: [
          {
            Header: "Order(s)",
            accessor: "item.orders",
            // Cell: ({ cell: { value } }) => <Orders values={value} />
          },
          {
            Header: "Status",
            accessor: "item.status",
          //   Cell: row => {
          //     row.styles["backgroundColor"] = row.value == "In Progress" ? "red" : "green";
          //     return row.value.toUpperCase();
          // }
          },
          {
            Header: "Last Updated",
            accessor: "item.update"
          }

        ]
      }
    ],
    []
  );

  const data = [
    {
      "item": {
        "id": 44813,
        "name": "Granny Smith Apple",
        "type": "Produce",
        "quantity": 20,
        "orders": 5,
        "status": "Complete",
        "update": "4/9/2021",
        "price": "$1.00",
        }
    },
    {
      "item": {
        "id": 44814,
        "name": "Red Anjou Pears",
        "type": "Produce",
        "quantity": 150,
        "orders": 14,
        "status": "In Progress",
        "update": "4/9/2021",
        "price": "$1.50",
        }
    },
    {
      "item": {
        "id": 448135,
        "name": "Nature's Valley Granola Bars",
        "type": "Snacks",
        "quantity": 100,
        "orders": 38,
        "status": "In Progress",
        "update": "4/9/2021",
        "price": "$2.50",
        },
    },
    {
      "item": {
        "id": 44816,
        "name": "Smartfood White Cheddar Popcorn",
        "type": "Snacks",
        "quantity": 50,
        "orders": 10,
        "status": "Complete",
        "update": "4/7/2021",
        "price": "$5.50",
        }
    },
    {
      "item": {
        "id": 44817,
        "name": "Monterey Jack Cheese",
        "type": "Dairy",
        "quantity": 12,
        "orders": 0,
        "status": "Not Applicable",
        "update": "4/9/2021",
        "price": "$4.50",
        }
    }
  ]
  //const logo = require('./restoration-logo.png');
  return (

    <div className="App">
      <img src={logo} width="150" height="100"/>
   
      <center> <h1>Welcome Back </h1> <h1color> Restoration Farms </h1color> </center>
      <Table columns={columns} data={data} />
      <br></br>

      <br></br>
      <br></br>      
      <br></br>
      <br></br>
     <p> Brought to you by </p><img src={us} width="100" style={{float : 'bottom'}} />
    </div>
  );
}

export default App;