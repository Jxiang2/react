import { useState } from 'react';
import styles from './Signup.module.css';


export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, displayName)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>Signup</h2>

            <label>
                <span>display name:</span>
                <input type="text"
                 onChange={(e)=>setDisplayName(e.target.value)}
                 value={displayName}/>
            </label>

            <label>
                <span>email:</span>
                <input type="email"
                 onChange={(e)=>setEmail(e.target.value)}
                 value ={email}/>
            </label>

            <label>
                <span>password:</span>
                <input type="password"
                 onChange={(e)=>SetPassword(e.target.value)}
                 value={password}/>
            </label>

            <button className='btn'>Sign Up</button>
        </form>
        </div>
    )
}