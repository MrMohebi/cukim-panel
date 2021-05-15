import React from 'react';
import {TextField, Button} from "@material-ui/core"
import "./css/style.css"

const CreateNewRes = () => {
    return (
        <div className={"d-flex flex-column align-items-center mainContainer-createNewRes"}>
            <h5><span className={"header"}>ایجاد رستوران</span></h5>
            <div className={"d-flex flex-row w-100 flex-wrap justify-content-between"}>
                <TextField className={"pt-2 m-2"} label="اسم رستوران انگلیسی" />
                <TextField className={"pt-2 m-2 textField-rp"} label="اسم رستوران فارسی" />
            </div>
            <div className={"m-4"}/>
            <TextField className={"pt-2 m-2 textField-r"} label="نام کاربری" helperText="اعداد و حروف انگلیسی"/>
            <TextField className={"pt-2 m-2 textField-r"} label="رمز" />
            <Button className={'mt-auto  submit-button'} variant="contained" color="primary">ساخت</Button>
        </div>
    );
};

export default CreateNewRes;