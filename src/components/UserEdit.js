import React from 'react';



function UserEdit() {

    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <label>Name</label>
                <input type={'text'} className = "form-control"/>
            </div>

            <div className='col-lg-6'>
                <label>Position</label>
                <input type={'text'} className = "form-control"/>
            </div>

            <div className='col-lg-6'>
                <label>Office</label>
                <input type={'text'} className = "form-control"/>
            </div>

            <div className='col-lg-6'>
                <label>Age</label>
                <input type={'number'} className = "form-control"/>
            </div>

            <div className='col-lg-6'>
                <label>Startdate</label>
                <input type={'date'} className = "form-control"/>
            </div>

            <div className='col-lg-6'>
                <label>Salary</label>
                <input type={'number'} className = "form-control"/>
            </div>

            <div className='col-lg-2'>
                
                <input type={'submit'} className = "btn btn-primary form-control mt-3"/>
            </div>
        </div>
    </div>
  )
}

export default UserEdit