import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
   const [state, setState] = useState(() => {
      const storageValue = localStorage.getItem(key)

      if (storageValue) {
         return JSON.parse(atob(storageValue))
      }

      return initialState
   })

   useEffect(() => {
      const themeJSON = JSON.stringify(state)
      const themeB64 = Buffer.from(themeJSON).toString('base64')
      localStorage.setItem(key, themeB64)
   }, [key, state])

   return [state, setState]
}

export default usePersistedState
