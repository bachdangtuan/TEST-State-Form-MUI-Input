import React, { Component } from 'react'
import TextField from '@mui/material/TextField';


export default class UserProfile extends Component {
    render() {
        return (
            <div className='bg-light' style={{
                width: '50%',
                margin: 'auto'
            }}>
                <h1 className='text-center'>Form Control</h1>
                <form className='pb-5' >
                    <div className="row container-fluid">
                        <div className="col-6 pb-4">
                            <TextField id="outlined-basic" name='firstName' label="firstName" variant="standard" fullWidth='100' />
                            <span className='text-danger'>Please input requiment</span>
                        </div>
                        <div className="col-6 pb-4">
                            <TextField id="outlined-basic" name='lastName' label="lastName" variant="standard" fullWidth='100' />
                            <span className='text-danger'>Please input requiment</span>
                        </div>
                        <div className="col-12 pb-4">
                            <TextField id="outlined-b
                            asic" name='username' label="username" variant="standard" fullWidth='100' />
                              <span className='text-danger'>Please input requiment</span>
                        </div>
                        <div className="col-12 pb-4">
                            <TextField id="outlined-basic" name='email' label="email" variant="standard" fullWidth='100' />
                            <span className='text-danger'>Please input requiment</span>
                        </div>
                        <div className="col-6 pb-4">
                            <TextField id="outlined-basic" name='password' label="password" variant="standard" fullWidth='100' />
                            <span className='text-danger'>Please input requiment</span>
                        </div>
                        <div className="col-6 pb-4">
                            <TextField id="outlined-basic" name='passwordConfirm' label="passwordConfirm" variant="standard" fullWidth='100' />
                            <span className='text-danger'>Please input requiment</span>
                        </div>
                    </div>
                    <div className="col-12 pt-4">
                          <button className='btn text-light btn-primary w-100'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
