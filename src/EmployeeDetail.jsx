import React from 'react';
const EmployeeDetail = props => {
    return (<div>
        emp_no : {props.emp_no} <br />
        Name : {`${props.first_name} ${props.last_name}`} <br />
        Birth date : {props.birth_date} <br />
        Gender : {props.gender} <br /> <br />
    </div>  );
}
 
export default EmployeeDetail;