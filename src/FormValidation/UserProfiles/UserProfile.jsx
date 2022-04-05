import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'

export default class UserProfile extends Component {
    state = {
        values: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        errors: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        }
    }

    handleChangValue = (event) => {
        let { name, value, type } = event.target
        console.log(name, value);

        let newValue = { ...this.state.values, [name]: value };
        let newerros = { ...this.state.errors };


        if (value.trim() === '') {
            newerros[name] = name + 'is required !'
        } else {
            newerros[name] = '';
        }
        // Kiểm tra Email
        if (type === 'email') {
            console.log('emailvalue', value);
            const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (!regexEmail.test(value)) {
                newerros[name] = name + " "+'invalidate'
            }else{
                newerros[name] = ''
            }

        }
        // Kiểm tra mật khẩu
        if (name === 'passwordConfirm') {
           if (value === newValue['password']) {
               newerros[name]= '';
           }else{
               newerros[name]= name + 'is invaild'
           }
        }

        this.setState({
            values: newValue,
            errors: newerros
        })

        // this.setState({
        //     values:{...this.state.values, [name]:value}
        // })
        // if (value ==='') {
        //     this.setState({
        //         errors:{...this.state.errors, [name]:'Please input on area'}
        //     })
        // }else{
        //     this.setState({
        //         errors:{...this.state.errors, [name]:''}
        //     })
        // }


        // this.setState({
        //     [name]: value
        // }, () => {
        //     console.log(this.state);
        // })
    }

    handleSubmit = (event) =>{
        event.preventDefault(); //Cản trình duyệt load lại trang
        // Xét điều kiện khi submit
        let {values, errors} =this.state;
        let  valid = true
        for (const key in values) {
           if (values[key] === '') {
               valid = false;
           }
        }
        for (const key in errors) {
          if (errors[key] !== '') {
                valid = false
          }
        }
        if (!valid) {
            alert('Không thành công ')
            return ;
        }
        Swal.fire({
            title: 'Information User',
            html: '<span class="text-danger"> hello anh em </span>',
            icon: 'success',
            confirmButtonText: 'Cool'
        })

    }

    render() {
        return (
            <div className='bg-light' style={{
                width: '50%',
                margin: 'auto'
            }}>
                <h1 className='text-center'>Form Control</h1>
                <form className='pb-5' onSubmit={this.handleSubmit} >
                    <div className="row container-fluid">
                        <div className="col-6 pb-4">
                            <TextField id="outlined-basic" name='firstName' label="firstName" variant="standard" fullWidth='100' type="text" onChange={this.handleChangValue} value={this.state.values.firstName} />
                            <span className='text-danger'>{this.state.errors.firstName}</span>
                        </div>
                        <div className="col-6 pb-4">
                            <TextField id="outlined-basic" name='lastName' label="lastName" variant="standard" fullWidth='100' type="text" onChange={this.handleChangValue} value={this.state.values.lastName} />
                            <span className='text-danger'>{this.state.errors.lastName}</span>
                        </div>
                        <div className="col-12 pb-4">
                            <TextField id="outlined-b
                            asic" name='username' type="text" label="username" variant="standard" fullWidth='100' onChange={this.handleChangValue} value={this.state.values.username} />
                            <span className='text-danger'>{this.state.errors.username}</span>
                        </div>
                        <div className="col-12 pb-4">
                            <TextField id="outlined-basic" type="email" name='email' label="email" variant="standard" fullWidth='100' onChange={this.handleChangValue} value={this.state.values.email} />
                            <span className='text-danger'>{this.state.errors.email}</span>
                        </div>
                        <div className="col-6 pb-4">
                            <TextField id="outlined-basic" type="password" name='password' label="password" variant="standard" fullWidth='100' onChange={this.handleChangValue} value={this.state.values.password} />
                            <span className='text-danger'>{this.state.errors.password}</span>
                        </div>
                        <div className="col-6 pb-4">
                            <TextField id="outlined-basic" type="password" name='passwordConfirm' label="passwordConfirm" variant="standard" fullWidth='100' onChange={this.handleChangValue} value={this.state.values.passwordConfirm} />
                            <span className='text-danger'>{this.state.errors.passwordConfirm}</span>
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
