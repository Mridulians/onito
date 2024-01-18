import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';
import DataTable from 'react-data-table-component'
const Table = () => {
    const formData1 = useSelector((state: RootState) => state.form.formData1);
    const formData2 = useSelector((state: RootState) => state.form.formData2);


    const combinedFormData = [...formData1, ...formData2];
    const columns=[
        {
            name: 'fullName',
            selector: (row:any) => row.fullName,
            sortable:true,
        },
        
        {
            name: 'age',
            selector: (row: any) => row.age,
            sortable:true,
        },
        
        {
            name: 'number',
            selector: (row:any) => row.number,
            sortable:true,
        },

        {
            name: 'sex',
            selector: (row:any) => row.sex,
            sortable:true,
        },

        {
            name: 'aadhar',
            selector: (row:any) => row.aadhar,
            sortable:true,
        },

        {
            name: 'pan',
            selector:  (row:any)  => row.pan,
            sortable:true,
        },

        {
            name: 'address',
            selector:  (row:any)  => row.address,
            sortable:true,
        },

        {
            name: 'pincode',
            selector:  (row:any)  => row.pincode,
            sortable:true,
        },
        
        {
            name: 'state/city',
            selector: (row:any) => row.state,
            sortable:true,
        },

        {
            name: 'country',
            selector:  (row:any)  => row.country,
            sortable:true,
        },
        
    ]

  return (
    <div style={{border:'2px solid black' , color:'red'}}>
    <DataTable columns={columns} data={combinedFormData}>
        
    </DataTable>
    </div>
  )
}

export default Table