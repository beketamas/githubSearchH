import './userdata.css'
import { userDataType } from '../../type/userdata'
import Pin from './Pin';
import Link from './Link';
import Twitter from './Twitter';
import Github from './Github';

type userdataprops ={
  userdata:userDataType;
}

const UserData = ({userdata}:userdataprops) => {

  const convertDate = (datetime?: string) => {
    if(!datetime){
      return 'unknown date'
    }

    const date = new Date(datetime)
    const day  = date.getDate()
    const month = date.toLocaleString("default", {month:"short"})
    const year = date.getFullYear();
    return `${day} ${month} ${year}`
  }

  return (
    <div className='user-card'>
      <div className='user-top'>
          <img className='avatar' src={userdata.avatar_url} alt="" />
          <div className='user-info'>
            <div className='user-info-inner'>
                <h2 className='name'>{userdata.name ? userdata.name : userdata.login}</h2>
                <a className='login' href="">{userdata.login}</a>
            </div>
            <p className='joined'>{convertDate(userdata.created_at)}</p>
          </div>
      </div>
      <div className='user-middle'>
        <p className={`bio ${!userdata.bio ? 'not-available' : ''}`}>{userdata.bio ? userdata.bio : "This profile has no bio."}</p>
        <div className='stats'>
          <div className='stat'>
            <h3 className='stat-title'>Repos</h3>
            <p className='stat-number'>{userdata.public_repos}</p>
          </div>

          <div className='stat'>
            <h3 className='stat-title'>Followers</h3>
            <p className='stat-number'>{userdata.followers}</p>
          </div>

          <div className='stat'>
            <h3 className='stat-title'>Following</h3>
            <p className='stat-number'>{userdata.following}</p>
          </div>
        </div>
      </div>
      <div className='user-bottom'>
          <div className='links'>
              <div className={`link-wrap ${!userdata.location ? 'not-available' : ''}`}>
                <Pin></Pin>
                <p>{!userdata.location?'Not available' : userdata.location}</p>
              </div>

              <div className={`link-wrap ${!userdata.blog ? 'Not available' : ''}`}>
                <Link></Link>
                {!userdata.blog ? (
                  <p>Not available</p>
                ) : (<a href={`https://github.com/${userdata.login}`} target='_blank'>{userdata.blog}</a>)}
              </div>

          </div>

          <div className='links'>
            <div className={`link-wrap ${!userdata.twitter_username ? 'not-available' : ''}`}>
                <Twitter></Twitter>
                {!userdata.twitter_username ? (
                  <p>Not available</p>
                ) : (<a href={`https://twitter.com/${userdata.twitter_username}`} target='_blank'>{userdata.twitter_username}</a>)}
            </div>
            
            <div className={`link-wrap ${!userdata.company ? 'not-available' : ''}`}>
              <Github></Github>
              <p>{!userdata.company?'Not available' : userdata.company}</p>
            </div>


          </div>
      </div>

    </div>
  )
}

export default UserData