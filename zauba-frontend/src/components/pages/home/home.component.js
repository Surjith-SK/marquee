import React from 'react';
import { searchCompanies, addCompany } from "../../../services/company.service";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
export default function HomeComponent() {

    const [options, setOptions] = React.useState([]);
    const [changeRoute, setChangeRoute] = React.useState(false);
    const [value, setValue] = React.useState({});
    const previousController = React.useRef();
    const alert = useAlert();
    let navigate = useNavigate();

    const getData = async (searchTerm) => {
        if (previousController.current) {
            previousController.current.abort();
        }
        const controller = new AbortController();
        const signal = controller.signal;
        previousController.current = controller;

        let res;
        try {
            res = await searchCompanies(searchTerm, signal);

            if (!res.data.error) {
                setOptions(res.data.data);
            } else {
                setOptions([]);
            }
        } catch (error) {
            console.error(error);
        }


    };

    const onInputChange = async (event, value, reason) => {
        if (value) {
            console.log(reason)
            getData(value);
        } else {
            setOptions([]);
        }
    };

    const onAddCompany = async () => {
        if (value) {
            try {
                let res;

                if (value['company_name'] !== undefined) {
                    res = await addCompany(value);

                    if (!res.data.error) {
                        !res.data.data.isNewRecord ? alert.error(`${res.data.data.company_name} is already present!`) :  navigate('../all-companies', {'company_name':'', 'size': 5, 'page': 0, replace: true});
                    } else {
                        console.log('onadd')
                        setChangeRoute(res.data.isNewRecord);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }
        else {
            setChangeRoute(false)
        }
    }

    const onValueChange = async (value) => {
        if(value){
            setValue(value);
            setChangeRoute(true);
        }
    }



    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={options}
                onInputChange={onInputChange}
                isOptionEqualToValue={(option, value) => option.company_id === value.company_id}
                getOptionLabel={(option) => option.company_name}
                style={{ width: 300 }}
                onChange={(e, value) => { value  ? onValueChange(value)  : setChangeRoute(false) }}
                renderInput={(params) => (
                    <TextField {...params} label="Search for Companies" variant="outlined" />
                )}
            />
            <br />
            <div>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success" startIcon={<AddIcon />} disabled={!changeRoute} onClick={onAddCompany}>
                        Submit
                    </Button>
                </Stack>


            </div>
        </div>

    )

}