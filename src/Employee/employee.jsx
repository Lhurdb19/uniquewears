import React from 'react';
import Employees from '../Json/Employees';

export default function Employee() {

  return (

    <div className='employee'>
      {Employees.map((employee) => {
        const {Name, Age, PhoneNumber, Status, Position, BasicSalary,  ImageUrl} = employee;

        return (
            <div className="info">
                <h2>{Name}</h2>
                <p>{Age}</p>
                <p>{PhoneNumber}</p>
                <p>{Status}</p>
                <p>{Position}</p>
                <p>{BasicSalary}</p>
                <img src={ImageUrl} alt="/" />
            </div>
        )
      })}
    </div>
  )
}
