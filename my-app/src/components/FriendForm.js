import React from 'react'

export default function FriendForm(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Username
              <input 
                type="text"
                name="username"
                value={values.username}
                placeholder="Type a username..."
                maxLength="30"
                onChange={onChange}

              />
        </label>

        <label>Email
          <input
              type="email"
              name="email"
              value={values.email}
              placeholder="Type your email..."
              onChange={onChange}
          />
        </label>

        <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">--Select a Role --</option>
            <option value="Student"> Student</option>
            <option value="Instructor"> Instructor</option>
            <option value="Alumni"> Alumni</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
