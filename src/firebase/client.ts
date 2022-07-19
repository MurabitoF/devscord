import { initializeApp } from 'firebase/app'
import { getAuth, getRedirectResult, GithubAuthProvider, signInWithRedirect, User } from 'firebase/auth'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'devscord-1c632.firebaseapp.com',
  projectId: 'devscord-1c632',
  storageBucket: 'devscord-1c632.appspot.com',
  messagingSenderId: '873374326862',
  appId: '1:873374326862:web:c4baf38542504fadbd231f',
  measurementId: 'G-P83D0B27TD'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const signInWithGithub = () => {
  const provider = new GithubAuthProvider()
  signInWithRedirect(auth, provider)
  return getRedirectResult(auth)
}

export const firestore = getFirestore(app)

export const addNewMessage = async (message:string, user:Partial<User>|null, roomId: string) => {
  try {
    const newMessageRef = doc(collection(firestore, 'chat-rooms', roomId, 'messages'))
    await setDoc(newMessageRef, {
      user,
      text: message,
      timestamp: Date.now()
    })
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
