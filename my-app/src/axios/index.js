import { v4 as uuid } from 'uuid'

const initialFriendsList = [
  {
    id: uuid(), 
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
  },
]

export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialFriendsList })
  },
  post(url, { username, email, role }) {
    const newFriend = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newFriend })
  }
}
