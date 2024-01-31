import React from "react";
import DataTable  from 'react-data-table-component';

const Table = ({ rows, deleteRow, editRow }) => {
const columns =[
{
    name:'User Name',
    selector: row => row.username
},
{
    name:'Email Address',
    selector: row => row.email
},
{
    name:'Status',
    selector: row => row.status
},
{
    name:'Role',
    selector: row => row.role
},
{
    name:'Activity',
    selector: row => row.activity
},
{
    name:'Action',
    selector: row => row.action
}
]

const data = [
    {
    username:'Aster Aweke',
    email:'aster.aweke@gmail.com',
    status:'Active',
    role:'Admin',
    activity:'Loged in',
    },
    {
    username:'Robe Getachew',
    email:'robe.getachew@gmail.com',
    status:'Active',
    role:'user',
    activity:'update profile',
    },
   {
    username:'Abebe Kebede',
    email:'abebe.kenede@gmail.com',
    status:'Inactive',
    role:'user',
    activity:'update location',
    },
    {
    username:'Eden Tesfaye',
    email:'eden.tesfaye@gmail.com',
    status:'Active',
    role:'user',
    activity:'changed password',
    },
    {
    username:'kebede Abebe',
    email:'kebede.abebe@gmail.com',
    status:'Active',
    role:'user',
    activity:'logged out',
    },


]
  return (
    <div className="containe3r mt-5">
      <DataTable

      columns={columns}
      data={data}
      ></DataTable>
    </div>
  );
};

export default Table;