import classes from './HeaderStyles.module.css'
import YoutubeEmbedder from '../../../components/youtubeembedder/YoutubeEmbedder'

const TetrisBuddiesHeader = () => {

  return (
    <div className={classes.headerContainer}>
      <h1>Tetris Buddies</h1>
      <div className={classes.tetrisHeaderContainer}>
        <YoutubeEmbedder embedId={'eWcCxjcXugg'}/>

      </div>

    </div>
  )
}
export default TetrisBuddiesHeader
