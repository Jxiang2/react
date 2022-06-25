import axios from 'axios'
import { useEffect, useReducer, useState } from 'react'

let initialState = {
  data: null,
  isPending: false,
  error: null,
  success: false,
}

const axiosReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, data: null, success: false, error: null }
    case 'ERROR':
      return { isPending: false, data: null, success: false, error: action.payload }
    case 'CREATED':
      return { isPending: false, data: action.payload, success: true, error: null }
    case 'UPDATED':
      return { isPending: false, data: action.payload, success: true, error: null }
    case 'DELETED':
      return { isPending: false, data: action.payload, success: true, error: null }
    default:
      return state
  }
}

export const useAxios = () => {
  const [response, dispatch] = useReducer(axiosReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  const axiosCreate = async (url, options = {}) => {
    try {
      const axiosResponse = await axios({
        method: 'POST',
        url: url,
        headers: options.headers ? { ...options.headers } : {},
        data: options.data ? { ...options.data } : {},
      })

      const axiosResponseOk = axiosResponse && axiosResponse.status < 400
      if (!axiosResponseOk) {
        throw new Error(axiosResponse.statusText)
      }

      const axiosData = await axiosResponse.data
      dispatchIfNotCancelled({ type: 'CREATED', payload: axiosData })
      return
    } catch (error) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: error.message })
      return
    }
  }

  const axiosUpdate = async (url, methodName, options = {}) => {
    try {
      const axiosResponse = await axios({
        method: methodName,
        url: url,
        headers: options.headers ? { ...options.headers } : {},
        data: options.data ? { ...options.data } : {},
      })

      const axiosResponseOk = axiosResponse && axiosResponse.status < 400
      if (!axiosResponseOk) {
        throw new Error(axiosResponse.statusText)
      }

      const axiosData = await axiosResponse.data
      dispatchIfNotCancelled({ type: 'UPDATED', payload: axiosData })
      return
    } catch (error) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: error.message })
      return
    }
  }

  const axiosDelete = async (url, options = {}) => {
    try {
      const axiosResponse = await axios({
        method: 'DELETE',
        url: url,
        headers: { ...options },
      })

      const axiosResponseOk = axiosResponse && axiosResponse.status < 400
      if (!axiosResponseOk) {
        throw new Error(axiosResponse.statusText)
      }

      const axiosData = await axiosResponse.data
      dispatchIfNotCancelled({ type: 'DELETED', payload: axiosData })
      return
    } catch (error) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: error.message })
      return
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { axiosCreate, axiosUpdate, axiosDelete, response }
}
