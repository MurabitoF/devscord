import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/client'

export default () => {
  const [user] = useAuthState(auth)

  if (user === null || user === undefined) return null

  const { displayName, photoURL } = user

  return {
    displayName,
    photoURL
  }
}
