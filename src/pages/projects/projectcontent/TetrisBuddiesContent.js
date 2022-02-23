import classes from './ContentStyles.module.css'

const TetrisBuddiesContent = () => {

  return (
    <div className={classes.outerContainer}>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>the project</h2>
        </div>
        <div className={classes.sectionContent}>

          <p>  Tetris Buddies is an asymmetrical co-op Tetris variant. The usual tetris controls (shift left, shift right rotate) are distributed randomly amongst the team members, who then have to work together to maneuver the piece the way they want. With every new piece, the controls are re-assigned. There are three game modes:</p> <br/>

            <p><strong>Classic Mode:</strong> Perfect information - everyone on the team can how the controls are distributed.</p>
            <p><strong>Self View:</strong> Each player can see only his or her own controls.</p>
            <p><strong>
              Buddy View:</strong> Each player can see everyone else’s controls, but not their own. This is the version being played in the video.</p>
            <p>If you want to play Tetris Buddies, you can do that <a href="https://tetris-buddies.herokuapp.com/">here</a>. Or, check out the <a href="https://github.com/bigjmn/tetris-buddies">GitHub repo.</a></p>

        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>what I used</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>
            On the back end I used NodeJs and Express, with SocketIO to enable
            realtime communications. The back end was definitely the hardest part.
          </p>
          <p>
            The real challenge was creating unique game sessions. I wanted each session to be accessible by a unique URL so that the host could just send out a link. But I also wanted users to enter their username before actually joining the game (in case they’re joining a game already in progress) which made me think a form submission containing the players username and a unique four-character game ID was the way to go. I ended up deciding on a combination of both: if a player tries to join the game room directly, they’re redirected to the join form with the room code already filled in. Basically it involved a lot of custom middleware.
          </p>
          <p>
            I used Firebase to manage the high scores. I did consider using Firebase for the entire backend, using the realtime database instead of SocketIO, but in the end it didn’t give me the flexibility I wanted. Or at least I’m not yet comfortable enough with the cloud functions to use them effectively for event-handling.
          </p>
          <p>
            The front end was simpler. I mostly used vanilla javascript, and handlebars as the view engine.

          </p>



        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>thoughts</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>
            Buddy View seems to be the most fun. It’s super hard, but I’m actually okay with that. There are people who are really, really good at tetris. I would love to see how a team of elite tetris players approached this game. They would probably have signals, and maybe a predetermined priority order in the case of players with overlapping controls.
          </p>
          <p>
            There are currently no restrictions on the number of players per team, but you need at least three to submit a high score. You could play by yourself, although this would just be standard tetris. Two player games also aren’t that interesting, regardless of the game mode. It’s just too common for one player to have all the controls, at which point the natural thing to do is to have that player handle the piece on their own. Three players is much harder, and much more fun. I actually haven’t played with more than three yet, but I’m guessing the games become more chaotic (and much shorter) the higher you go. I also assume that at a certain point it becomes impossible to play without some kind of pregame strategy - but who knows!
          </p>


        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>next steps</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>
            First of all, I’m definitely going to add some more CSS to make it look nicer. I could also make the layout more responsive, and even add some control buttons to the bottom to make it mobile compatible. It could be a tight squeeze to fit in the game, the stats, and the other player controls though - it’ll definitely take some figuring out.
          </p>
          <p>
            I’ve also thought about using PeerJS to add built-in audio chat, though to be honest that’s not a high priority.
          </p>
          <p>
            As usual, I’ve got one eye on ML. I think it would be interesting to try to design/train a team of bots that can play Tetris Buddies (in particular, Buddy View.) There’s definitely a lot of fun math to explore there.
          </p>


        </div>
      </div>






    </div>
  )
}
export default TetrisBuddiesContent
