import { initializeApp } from 'firebase/app'
import { getAuth, GithubAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { addDoc, collection, getDocs, getFirestore, Timestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDCSNhC6AYUk11WP1EB8HlUPMukHORg2Cs',
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
  return signInWithPopup(auth, provider)
}

export const firestore = getFirestore(app)

export const addNewMessage = async (message:string, user:Partial<User>|null) => {
  try {
    const docRef = await addDoc(collection(firestore, 'message'), {
      message,
      user,
      createdAt: Timestamp.now()
    })
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const fetchLastMessages = async () => {
  try {
    const lastMessages = await getDocs(collection(firestore, 'messages'))
    console.log(lastMessages)
  } catch (error) {
    console.log(error)
  }
}
