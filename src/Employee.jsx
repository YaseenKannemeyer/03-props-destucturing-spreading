import React from "react";

const Employee = (props) => {
    
    const { firstname, lastname, age: employeeAge } = props;
    return (
        <div>

            <h6>
                Employee Name: {firstname} {lastname} Whos is age: {employeeAge}
            </h6>

        </div>
    );
}

export default Employee;