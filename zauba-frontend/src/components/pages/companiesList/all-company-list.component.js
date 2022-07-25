import React from "react";
import { getCompanies } from "../../../services/company.service";
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';


var columns = [
    { title: "CIN", field: "company_id" },
    { title: "Name", field: "company_name" },
]
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function AllCompanyListComponent() {
    let navigate = useNavigate();

    const [allCompanies, setAllCompanies] = React.useState([]);
   
    
    const setUpCompanyList = async () => {
        let res;
        try {
            res = await getCompanies();
            if (res.data.error === false) {
                setAllCompanies(res.data.data);
            } else {
                setAllCompanies([]);
            }
        } catch (error) {
            console.error(error);
        }
    };


    React.useEffect(() => {
        setUpCompanyList();
    }, []);

  

    const defaultMaterialTheme = createTheme();

    const goHome = async ()=>{
        navigate('/', {replace: true});
    }

    return (

            <div>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success" endIcon={<AddIcon />} onClick={goHome}>
                        Add Company
                    </Button>
                </Stack>
                <br />
                <ThemeProvider theme={defaultMaterialTheme}>
                    <MaterialTable
                     
                        title="Company Details"
                        columns={columns}
                        data={allCompanies}
                        icons={tableIcons}
                        options={{
                            headerStyle: { size: '80px' }
                        }}
                                      
                    />
                </ThemeProvider>
            </div>


    )
}

