import classes from './ContentStyles.module.css'

const WelpContent = () => {

  return (
    <div className={classes.outerContainer}>
      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>the project</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>
            Welp is a restaurant-finder for the indecisive. You put in your address and (optionally) the type of cuisine you want, as well as if if you need the food delivered. You’re then given one result, and welp - that’s what you’re having!


          </p>
          <p>
            I wish I had thought of this idea because it’s kind of genius, but the credit belongs to my cousin, hence the ‘Noah Madoff Presents’ on the title page. Still, I’m glad I was able to bring it to life.
          </p>
        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>what I used</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>I used Node and Express as the back end framework, with Handlebars as the view engine. There wasn’t much of a front end, but I used Bootstrap to style the pages. </p>
          <p>The restaurant data actually comes from Yelp, who as it turns out are quite generous when it comes to sharing their data with new developers. I did have to register the app with them to get the API key; I’m guessing they don’t look to closely at all the apps that register with them, but I assume that if Welp started blowing up and consistently maxed out it’s daily API call limit, it might trigger someone at Yelp to investigate.</p>


        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>thoughts</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>Welp, it works! Admittedly I myself am too picky to really get much use out of Welp, but I know people who for whom it would definitely save a lot of time and energy. I can especially see it being used to avoid drawn-out debates among groups of friends over where to get dinner.</p>


        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>next steps</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>Since this was my cousins brain-child, I’m going to let him take the lead on this one. In my opinion, this is one of those ‘less is more’ situations - adding more user options would be betraying the core concept of Welp. </p>
          <p>The one thing I definitely want to work in is geolocation. That way the user doesn’t even have to put in their address if they don’t want - one click, one restaurant. Okay, technically they’d also have to click the button giving Welp permission to use their location, but you get the idea.</p>


        </div>
      </div>

    </div>
  )
}
export default WelpContent
