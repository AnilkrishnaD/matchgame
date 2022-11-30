import './index.css'

const NavBar = props => {
  const {navBarDetails} = props
  const {presentScore, remainingTime} = navBarDetails

  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <div className="score-container">
        <p className="score">
          Score: <span className="variables">{presentScore}</span>
        </p>
        <div className="Timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="variables">{remainingTime} sec</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
