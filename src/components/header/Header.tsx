import './header.css'
import lightIcon from '/images/lightIcon.svg'
import darkIcon from '/images/darkIcon.svg'

type headerprops={
  darkmode:boolean;
  toggleDarkmode:()=>void
}

const Header = (props:headerprops) => {
  return (
    <div className='header'>
      <h1 className='websiteName'>devfinder</h1>
      <button className='toggleButton' onClick={props.toggleDarkmode}>
        {props.darkmode?'LIGHT':'DARK'}
        {props.darkmode?(
          <img src={lightIcon} alt="" />
        ):(
          <img src={darkIcon} alt="" />
        )}
        
      </button>
    </div>
  )
}

export default Header