import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Radio from "@mui/material/Radio";

const rows = [
  { id: 1, casenumber: 111116, title: 'Incidence', product: "Air Conditioner",substatus:"Cancelled", status:"Closed",technician:"Mohan Mahalotra",
  technicianStatus:"New",techniciandatetime:"28-01-2023 3:30pm",accountNumber:"Ok limited",contactName:"Jai Mal",mobile:9086754321,phone:6543218,address:"K.K 333",
  package:"",billable:"",amount:"",priority:"High",agent:"Andrew Wiston",channel:"Primary",remarks:"",comments:""
},
{ id: 2, casenumber: 111117, title: 'Reparement', product: "Cooking range",substatus:"Cancelled", status:"Open",technician:"Mohan Mahalotra",
technicianStatus:"New",techniciandatetime:"28-01-2023 3:30pm",accountNumber:"Ok limited",contactName:"Jai Mal",mobile:8986754321,phone:6543218,address:"K.K 333",
package:"",billable:"",amount:"",priority:"High",agent:"Andrew Wiston",channel:"Primary",remarks:"",comments:""
},{ id: 3, casenumber: 111118, title: 'repare', product: "Air Conditioner",substatus:"Cancelled", status:"Closed",technician:"Mohan Mahalotra",
technicianStatus:"New",techniciandatetime:"28-01-2023 3:30pm",accountNumber:"Ok limited",contactName:"Jai Mal",mobile:9186754321,phone:6543218,address:"K.K 333",
package:"",billable:"",amount:"",priority:"High",agent:"Andrew Wiston",channel:"Primary",remarks:"",comments:""
},{ id: 4, casenumber: 111119, title: 'Incidence', product: "Sofa set",substatus:"Cancelled", status:"Open",technician:"Mohan Mahalotra",
technicianStatus:"New",techniciandatetime:"28-01-2023 3:30pm",accountNumber:"Ok limited",contactName:"Jai Mal",mobile:9286754321,phone:6543218,address:"K.K 333",
package:"",billable:"",amount:"",priority:"High",agent:"Andrew Wiston",channel:"Primary",remarks:"",comments:""
},{ id: 5, casenumber: 111110, title: 'Incidence', product: "Air Conditioner",substatus:"Cancelled", status:"Closed",technician:"Mohan Mahalotra",
technicianStatus:"New",techniciandatetime:"28-01-2023 3:30pm",accountNumber:"Ok limited",contactName:"Open",mobile:9386754321,phone:6543218,address:"K.K 333",
package:"",billable:"",amount:"",priority:"High",agent:"Andrew Wiston",channel:"Primary",remarks:"",comments:""
},{ id: 6, casenumber: 111111, title: 'Incidence', product: "no selected",substatus:"Cancelled", status:"Closed",technician:"Mohan Mahalotra",
technicianStatus:"New",techniciandatetime:"28-01-2023 3:30pm",accountNumber:"Ok limited",contactName:"Jai Mal",mobile:9486754321,phone:6543218,address:"K.K 333",
package:"",billable:"",amount:"",priority:"High",agent:"Andrew Wiston",channel:"Primary",remarks:"",comments:""
},{ id: 7, casenumber: 111121, title: 'Incidence', product: "Air Conditioner",substatus:"Cancelled", status:"Closed",technician:"Mohan Mahalotra",
technicianStatus:"New",techniciandatetime:"28-01-2023 3:30pm",accountNumber:"Ok limited",contactName:"Jai Mal",mobile:9586754321,phone:6543218,address:"K.K 333",
package:"",billable:"",amount:"",priority:"High",agent:"Andrew Wiston",channel:"Primary",remarks:"",comments:""
},{ id: 8, casenumber: 111122, title: 'Incidence', product: "Air Conditioner",substatus:"Cancelled", status:"Closed",technician:"Mohan Mahalotra",
technicianStatus:"New",techniciandatetime:"28-01-2023 3:30pm",accountNumber:"Ok limited",contactName:"Jai Mal",mobile:9686754321,phone:6543218,address:"K.K 333",
package:"",billable:"",amount:"",priority:"High",agent:"Andrew Wiston",channel:"Primary",remarks:"",comments:""
},
 
];
let radioChecked = [rows[0].id];
const columns = [
  {
    field: "radiobutton",
    headerName: "",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Radio checked={radioChecked[0] === params.id} value={params.id} />
    )
  },
  { field: 'casenumber', headerName: 'Case Number', width: 130 },
  { field: 'title', headerName: 'Title', width: 130 },
  {field:"product",headerName:"Product",width:130},
  {field:"substatus", headerName:"Sub Status", width:130},
  {field:"status", headerName:"Status", width:130},
  {field:"technician", headerName:"Technician", width:130},
  {field:"technicianStatus", headerName:"Technician Status", width:130},
  {field:"techniciandatetime", headerName:"Technician date Time", width:130},

  {field:"accountNumber", headerName:"AccountNumber", width:130},
  {field:"contactName", headerName:"Contact Name", width:130},
  {field:"mobile", headerName:"Mobile", width:130},
  {field:"phone", headerName:"Phone", width:130},
  {field:"address", headerName:"Address", width:130},
  {field:"package", headerName:"Package", width:130},

  {field:"billable", headerName:"Billable", width:130},
  {field:"amount", headerName:"Amount", width:130},
  {field:"priority", headerName:"Priority", width:130},
  {field:"agent", headerName:"Agent", width:130},
  {field:"channel", headerName:"Channel", width:130},
  {field:"remarks", headerName:"Remarks", width:130},
  {field:"comments", headerName:"Comments", width:130},
];


export const Tables = () => {
  const [selectionModel, setSelectionModel] = useState(radioChecked);
  radioChecked = selectionModel;

  const selectedRow = rows.filter((item) => {
    return item.id === selectionModel[0];
  });

  return (
    <div style={{ height: 400, width: '100%',marginTop:"15px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        
      />
    </div>
  )
}
