import {React, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Notfound.css'

export default function Notfound() {
    const [ redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRedirect(true), 3000); // 3 seconds delay
        return () => clearTimeout(timer); //Cleanup timer if components unmounts
    }, []);

    return redirect ? (
         <Navigate to='/' replace />
        ) : (
            <div className='not-found'>
            <img src="https://i.ibb.co/Sds98BP/Oops.jpg" alt="" />
            <h1>Page Not Found. Redirecting...</h1>
            </div>
        );
}
