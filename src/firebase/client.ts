import { initializeApp } from 'firebase/app'
import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth'

initializeApp({
  apiKey: 'AIzaSyDCSNhC6AYUk11WP1EB8HlUPMukHORg2Cs',
  authDomain: 'devscord-1c632.firebaseapp.com',
  projectId: 'devscord-1c632',
  storageBucket: 'devscord-1c632.appspot.com',
  messagingSenderId: '873374326862',
  appId: '1:873374326862:web:c4baf38542504fadbd231f',
  measurementId: 'G-P83D0B27TD'
})

const auth = getAuth()

export const signInWithGithub = () => {
  const provider = new GithubAuthProvider()
  return signInWithPopup(auth, provider)
}
