import reactImage from './assets/react.png'
import logoSVG from './assets/react.svg'
import classes from './app.module.css'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <img
          src={reactImage}
          width="400"
          height="400"
          className={classes.Logo}
          alt="react logo"
        />
        <img
          src={logoSVG}
          width="400"
          height="400"
          className={classes.LogoSVG}
          alt="react logo svg"
        />
      </header>
      <main className={classes.Main}>
        <h1>React TS Babel Template</h1>
        <ClickCounter />
      </main>
    </div>
  )
}
