import { useEffect } from 'react'
import { useRef } from 'react'

export default function useKey(key: any, callback: any) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  })
  useEffect(() => {

    function handle(event: any) {
      if(event.code === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle) 
  }, [key])
}
