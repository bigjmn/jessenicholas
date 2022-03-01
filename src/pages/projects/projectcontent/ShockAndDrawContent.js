import classes from './ContentStyles.module.css'

const ShockAndDrawContent = () => {

  return (
    <div className={classes.outerContainer}>


        <div className={classes.sectionWrapper}>
          <div className={classes.sectionName}>
            <h2>the project</h2>
          </div>
          <div className={classes.sectionContent}>
            <p>
              Shock and Draw is a head to head team drawing-and-guessing game. Each round, each team has a ‘drawer’ who tries to get their teammates to guess (via chat window) the given prompt. If they do, the team gets a point, the drawer is given a new prompt and the game continues. Both teams play at once, but players only see the canvas and chat window for their own team. Essentially it’s like two games of Pictionary going on simultaneously. Now for the fun part.


            </p>
            <p>Each team has a ‘bonus timer’ that resets with every new word. If the word is guessed before the timer runs out, the opposing team is hit with a random ‘attack’ which hinders them in some way. Check out the demo to see what I mean.</p>
            <p><strong><i>Note: The above preview is not mobile compatible, sorry.</i></strong></p>
            <p> There are currently 8 different attacks:</p>
            <ul>
              <li><span style={{fontWeight:'bold'}}>50 Shades:</span> The team’s drawer is unable to use colors.</li>
              <li><span style={{fontWeight:'bold'}}>Hidden Mouse:</span> The team’s drawer is unable to see the cursor. </li>
              <li><span style={{fontWeight:'bold'}}>Johnny Fat-Hands:</span> The team’s drawer can only use the thickest brush size.</li>
              <li><span style={{fontWeight:'bold'}}>Fadin’ Frank:</span> New drawings immediately start to fade. </li>
              <li><span style={{fontWeight:'bold'}}>esreveR:</span> Guesses come in backwards.</li>
              <li><span style={{fontWeight:'bold'}}>Classified:</span> Guesses can’t be seen by anyone on the team (they are shown as ‘REDACTED’).</li>
              <li><span style={{fontWeight:'bold'}}>Peeping Tom:</span> Guessers have their view of the canvas blocked by a black filter. Clicking the filter creates a small ‘window’ which the guesser can then drag around to view different parts of the canvas.</li>
              <li><span style={{fontWeight:'bold'}}>Pointillism:</span> drawer can’t make brush strokes, only dots.</li>
            </ul>
            <p>Attacks last 20 seconds or until the end of the round, and can overlap. Drawers also have the option of passing on a word, but doing so hits their own team with an attack. </p>
            <p>You can play the game <a href="https://shock-and-draw.herokuapp.com/">here</a>. Or, check out the <a href="https://github.com/bigjmn/shock-and-draw">GitHub repo.</a> </p>
          </div>
        </div>

        <div className={classes.sectionWrapper}>
          <div className={classes.sectionName}>
            <h2>what I used</h2>
          </div>
          <div className={classes.sectionContent}>
            <p>I used Node JS on the backend, with React as the frontend framework and SocketIO for real time communications. I compiled my list of drawing prompts from a few different pictionary word lists. I made sure to take the ‘easy’ words - I learned from a very early play test that the attacks - particularly the drawer attacks - make harder words nearly impossible.</p>
<p>Configuring the backend was tougher than I had anticipated. React applications are usually served as the homepage, and use a ‘browser router’ to navigate via URL. But I needed the routing to be handled by express, so I could use the request parameters to join the user to the right game session (or start a new game, serve an error page, etc.) and so that the server socket could use the separate namespaces for event-handling. In the end I found the easiest thing was to serve the React build only after express successfully reroutes the client to the appropriate namespace</p>


          </div>
        </div>

        <div className={classes.sectionWrapper}>
          <div className={classes.sectionName}>
            <h2>thoughts</h2>
          </div>
          <div className={classes.sectionContent}>
            <p>The game is pretty fun! It’s not easy, especially when the attacks stack up. Attacks against the drawer are definitely harder to deal with than the ones against the guessers, and Johnny Fat-Hands is probably the toughest in the game. </p>
            <p>The biggest issue is probably the layout. It’s not responsive, which is an issue because there are a lot of components. Ideally the canvas would shrink with the browser. The problem is that resizing the canvas element causes the canvas to clear, so I’ll need a separate offscreen canvas element to copy the drawing to, and then copy it back to the original after the resize appropriately scaled. Shouldn’t be too tough, but may take some time. </p>


          </div>
        </div>

        <div className={classes.sectionWrapper}>
          <div className={classes.sectionName}>
            <h2>next steps</h2>
          </div>
          <div className={classes.sectionContent}>
            <p>I want to find a way to handle mid-game disconnections and reconnections. Right now, a guesser disconnecting mid-game won’t ruin the session, but they won’t be able to rejoin. A drawer quitting is worse, but there’s only so much that can be done in that scenario. I’ll probably make that just trigger the end of the round.</p>
            <p>Beyond that, it’s all about CSS. Making the layout responsive, but also just prettier in general. I’ve been using framer-motion to style some of the in-game transitions, which has helped. </p>
            <p>And of course, if the game really starts blowing up I’ll have to scale up the number of nodes, and that will involve using Redis and enabling sticky sessions, etc. </p>


          </div>
        </div>
    </div>
  )
}
export default ShockAndDrawContent
