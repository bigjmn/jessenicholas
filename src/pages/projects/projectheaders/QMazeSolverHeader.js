import classes from './HeaderStyles.module.css'

const QMazeSolverHeader = () => {

  return (
    <div className={classes.headerContainer}>
    <h1>Q Maze Solver</h1>
    <div className={classes.mazeheaderContainer}>

      <iframe title='mazebot frame' className={classes.mazeframe} src="https://bigjmn.github.io/q-maze-bot/" ></iframe>

    </div>
    </div>
  )
}
export default QMazeSolverHeader
