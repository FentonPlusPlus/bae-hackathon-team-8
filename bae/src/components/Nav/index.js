import './index.css'

function Nav() {
  return (
    <nav>
      <div className='title'>
        <h1>Planet Points</h1>
      </div>
      <div className='navigation'>
        <button>Menu</button>
        <button>Sign In</button>
        <button className='sign-out'>Sign Out</button>
      </div>
    </nav>
  )
}

export default Nav
