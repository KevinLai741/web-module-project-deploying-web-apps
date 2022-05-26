import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';
import axios from '../axios';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App() {
  const [friends, setFriends] = useState([]);

  const [ formValues, setFormValues ] = useState(initialFormValues); 
  const [ formError, setFormError ] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue });
  }

  const submitForm = () => {

    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    
    if (!newFriend.username) return;
    setFormError("Missing username information!");
    return;
  } else if (!newFriend.email) {
    setFormError("Missing email information!");
    return;
  }
    axios.post("fakeapi.com", newFriend)
      .then(res => {
        setFriends([res.date, ...friends ])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))


  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setFriends(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Form App</h1>
      <p className="error">{formError} </p>
      <FriendForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )