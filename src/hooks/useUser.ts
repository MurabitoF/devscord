import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/client'

export default () => {
  const [user] = useAuthState(auth)

  if (user === null || user === undefined) return null

  const { displayName, photoURL, uid } = user

  return {
    uid,
    displayName,
    photoURL
  }
}
