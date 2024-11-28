import './userdata.css'
import { userDataType } from '../../type/userdata'

type userdataprops ={
  userdata:userDataType;
}

const UserData = ({userdata}:userdataprops) => {
  return (
    <div className='user-card'>
      <div className='user-top'>
          <img src={userdata.avatar_url} alt="" />
          <div className='user-info'>
            <h2>{userdata.name}</h2>
            <a href="">{userdata.login}</a>
          </div>
          <p>{userdata.created_at}</p>
      </div>
      <div className='user-middle'>

      </div>
      <div className='user_bottom'>

      </div>

    </div>
  )
}

export default UserData