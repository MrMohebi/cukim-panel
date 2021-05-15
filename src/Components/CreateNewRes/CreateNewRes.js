import React from 'react';
import {TextField} from "@material-ui/core"
import "./css/style.css"

const CreateNewRes = () => {
    return (
        <div>
            <TextField className={"textField-r"} label="اسم کافه" />
        </div>
    );
};

export default CreateNewRes;