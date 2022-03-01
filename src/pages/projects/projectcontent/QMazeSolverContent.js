import classes from './ContentStyles.module.css'

const QMazeSolverContent = () => {

  return (
    <div className={classes.outerContainer}>


      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>the project</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>The best way to understand this particular project is to mess around with it for a couple minutes. Hit 'run' to start.</p>
          <p><strong><i>Note: May not work on mobile. Sorry.</i></strong></p>
          <p>Q Mazebot is an AI that solves mazes using reinforcement learning techniques. The user creates the maze (or picks on from a bank of random mazes) and Q Mazebot sets off, updating the ‘value’ of each square as it searches for the finish line. Every move Q Mazebot moves to the adjacent square with the highest value (closest to zero, as all values are negative) with ties broken randomly. The value of the square it leaves is updated to be one less than its highest-rated neighbor. You can see how Mazebot values each square by the square’s color - the darker the red, the worse Mazebot values that square. When Mazebot finds the finish line, he starts over from the beginning, but the square values don’t reset. Eventually Mazebot will be able to solve the maze the fastest possible way. The maze can also feature a key that must be picked up to open a corresponding gate.</p>
          <p>The graph tracks the number of steps it takes Mazebot to complete the maze. Mazebot will usually get worse before he gets better. Eventually Mazebot will complete the maze the same way every time - the fastest way. Use the slider to set Mazebot’s step speed. For big mazes (and even not so big mazes) you’ll want this set pretty high.</p>
          <p>Check out the <a id='gitlink' href="http://github.com/bigjmn/q-maze-bot">Github repo.</a> </p>

        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>what I used</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>For the basic interface I used a lot of JQuery. The actual maze is an array of buttons - I used some mouse down/up/move listeners to enable the user to essentially ‘draw’ the maze they want rather than have to toggle the buttons one at a time. The buttons were given ids dynamically corresponding to their positions in the DOM tree. This made it easier to translate the user-selected inputs of the GUI maze to a more abstract layer that the program could manipulate more easily.</p>
          <p>This abstract layer is created only when the user ‘locks in’ the maze and runs the simulation. The elements of the abstract layer - maze squares and Mazebot - each have as a property a JQuery selector that accesses their corresponding GUI components. For graphing the progress, I used Plotly.</p>


        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>thoughts</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>Mazebot solves mazes - there’s no denying that. There’s also something oddly satisfying (and slightly hypnotic) about watching it at work. At the same time, there’s something about it that really bugs me.</p>
          <p>It's slow.</p>
          <p>It’s true that my algorithm is slow, but I actually like my algorithm. It’s very similar to Bellman Ford or Djikstra or any other greedy BFS shortest path algorithm, but pared down to fit within the parameters of what the AI knows. This is an important distinction - when we see Mazebot solve the maze, we’re seeing the entire environment at once. Mazebot can only ‘see’ the squares immediately around him, and can only update square values when he visits them. It’s much harder to solve a maze from the inside. Still, the algorithm is ‘complete’ - one can show with a neat little proof by induction (similar to the proof for Djikstra and others) that the optimal path will always be found. All in all, my main concern is not with the maze-solving methodology.</p>
          <p>
            The AI is slow because it's designed to be slow.
            It's tethered to the animation.
            Mazebot's learning process - updating square values and traversing the virtual maze - is wrapped up in the callback
            of the JQuery animation. This massively throttles the learning rate, and that's what has to happen for us to watch Mazebot learn.
            Essentially I'm denying the computer it's greatest asset: computing. Running thousands of simpulations per second.
            That's why watching Mazebot take a few minutes to solve a maze feels unnaturally slow - because it IS unnaturally slow.

          </p>





        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>next steps</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>There’s a few directions I could go with this.</p>
          <p>One is to make the actual mazes more interesting. I could integrate one-way gates, teleporting spaces that go to different places with varying probability, moving walls, etc. Since the basic algorithm should work for any graph, I could offer maze templates to just a square grid. Any pattern that tessellates could theoretically work, albeit with some modifications to the UI.</p>
          <p>The other approach is one that Im much more excited about, and involved genetic algorithms. Instead of just one Mazebot, I want a dozen or so. Each one will have its own initial maze-solving strategy in the form of a Markov adjacency matrix. They’ll all solve the maze, and then the worst ones will be dropped, and the best ones will… well I don’t want to say ‘mate’, but that’s essentially what it is.</p>
          <p>For more details and to follow my progress, check out the <a href="https://colab.research.google.com/drive/1npJplBzKTKqzHt_qoV2OW4jr0OiKkmR5?usp=sharing">project notebook.</a> </p>


        </div>
      </div>
    </div>
  )
}
export default QMazeSolverContent
