import '../firebase/config'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { ref } from 'vue'

const auth = getAuth()
const error = ref(null)

const signup = async (email, password, displayName) => {
  error.value = null
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    await updateProfile(auth.currentUser, { displayName })
    error.value = null
    return res
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
