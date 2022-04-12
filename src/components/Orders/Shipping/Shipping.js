import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate();



    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleAddress = (event) => {
        setAddress(event.target.value)
    }
    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleCreateUser = (event) => {
        event.preventDefault();

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="password">Your Name</label>
                        <input onBlur={handleName} type="text" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddress} type="text" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Phone</label>
                        <input onBlur={handlePhone} type="text" name="" id="" required />
                    </div>
                    <p style={{ color: 'red' }}
                    >{error}</p>
                    <input className='form-submit' type="submit" value="Shipping" required />
                </form>
            </div>
        </div>
    );
};

export default Shipping;