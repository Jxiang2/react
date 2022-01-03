import { useState } from "react"
import  { projectAuth } from '../config/config'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            // sign up user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)
            if (!res) throw new Error('Could not complete sign up')
            
            // add displayName to user
            await res.user.updateProfile({displayName: displayName})
            setIsPending(false)
            setError(null)
        } catch (err) {
            console.log(err.message)
            
            // update states
            setError(err.message)
            setIsPending(false)
        }
    }

    return {error, isPending, signup}
}