<template>
	<div>
		<div class = "page">
			<section class = "landing">
				<div class="video">
					<iframe width = "1920" height = "1080"
					        src = "https://www.youtube.com/embed/Q2vz54Ov6UQ?rel=0&controls=0&showinfo=0&autoplay=1&loop=1&playlist=Q2vz54Ov6UQ"
					        frameborder = "0" allow = "autoplay; encrypted-media" allowfullscreen></iframe>
				</div>

				<div class = "logo">
					<img class = "logo" src = "../assets/logo.svg" alt = "" id = "el1">
				</div>
				<h1>A STORY THROUGH TIME</h1>
			</section>
			<section class = "biography">
				<h1 data-aos = "fade-up">Who is <span style = "color: #CC281B;">Christopher Nolan</span>?</h1>
				<p data-aos = "fade-up">
					Best known for his cerebral, often nonlinear storytelling, acclaimed writer-director was born on
					July 30, 1970 in London, England. Over the course of 15 years of filmmaking, Nolan has gone from
					low-budget independent films to working on some of the biggest blockbusters ever made.<br><br>At 7
					years old, Nolan began making short movies with his father's Super-8 camera. While studying English
					Literature at University College London, he shot 16-millimetre films at U.C.L.'s film society, where
					he learned the guerrilla techniques he would later use to make his first feature, (1998), on a
					budget of around $6,000. The noir thriller was recognized at a number of international film
					festivals prior to its theatrical release, and gained Nolan enough credibility that he was able to
					gather substantial financing for his next film.<br><br>Nolan's second film was (2000), which he
					directed from his own screenplay based on a short story by his brother Jonathan. Starring , the film
					brought Nolan numerous honors, including Academy Award and Golden Globe Award nominations for Best
					Original Screenplay. Nolan went on to direct the critically acclaimed psychological thriller,
					(2002), starring , and .<br><br>The turning point in Nolan's career occurred when he was awarded the
					chance to revive the Batman franchise in 2005. In (2005), Nolan brought a level of gravitas back to
					the iconic hero, and his gritty, modern interpretation was greeted with praise from fans and critics
					alike. Before moving on to a Batman sequel, Nolan directed, cowrote and produced the mystery
					thriller (2006), starring and as magicians whose obsessive rivalry leads to tragedy and
					murder.<br><br>In 2008, Nolan directed, cowrote and produced (2008) which went on to gross more than
					a billion dollars at the worldwide box office. Nolan was nominated for a Directors Guild of America
					(D.G.A.) Award, Writers Guild of America (W.G.A.) Award and Producers Guild of America (P.G.A.)
					Award, and the film also received eight Academy Award nominations.<br><br>In 2010, Nolan captivated
					audiences with the sci-fi thriller (2010), which he directed and produced from his own original
					screenplay. The thought-provoking drama was a worldwide blockbuster, earning more than $800,000,000
					dollars and becoming one of the most discussed and debated films of the year. Among its many honors,
					Inception received four Academy Awards and eight nominations, including Best Picture and Best
					Screenplay. Nolan was recognized by his peers with D.G.A. and P.G.A. Award nominations, as well as a
					W.G.A. Award for his work on the film.<br><br>One of the best-reviewed and highest-grossing movies
					of 2012, (2012) concluded Nolan's Batman trilogy. Due to his success rebooting the Batman character,
					Warner Bros. enlisted Nolan to produce their revamped Superman movie (2013), which opened in the
					summer of 2013. In 2014, Nolan directed, wrote and produced the science fiction epic (2014),
					starring , and . Paramount Pictures and Warner Bros. released the film on November 5, 2014 to
					positive reviews and strong box-office results, grossing over $670 million dollars
					worldwide.<br><br>Nolan currently resides in Los Angeles, California with his wife, producer , and
					their children. Nolan and Thomas also have their own production company, Syncopy.<br>
				</p>
				<img data-aos = "fade-left" src = "../assets/christopher-nolan.png" alt = "">
			</section>
			<section class = "filmoghraphy">
				<h1 data-aos = "fade-up">2000-2017</h1>
				<div class = "films" data-aos = "fade-up">
					<router-link to = "Momento"><img src = "../assets/momento.jpg" alt = "Momento"><h4>Momento</h4>
					</router-link>
					<router-link to = "Momento"><img src = "../assets/insomnia.jpg" alt = "Insmonia"><h4>Insomnia</h4>
					</router-link>
					<router-link to = "/"><img src = "../assets/Batman_Begins.jpg" alt = "Batman Begins"><h4>Batman
					                                                                                         Begins</h4>
					</router-link>
					<router-link to = "/"><img src = "../assets/prestige.jpg" alt = "The Prestige"><h4>The Prestige</h4>
					</router-link>
					<router-link to = "/"><img src = "../assets/darkKnight.jpeg" alt = "The Dark knight"><h4>The Dark
					                                                                                         Knight</h4>
					</router-link>
					<router-link to = "/"><img src = "../assets/inception.jpg" alt = "Inception"><h4>Inception</h4>
					</router-link>
					<router-link to = "/"><img src = "../assets/darkKnightRises.jpeg" alt = "The Dark knight rises"><h4>
						The Dark Knight Rises</h4></router-link>
					<router-link to = "Interstellar"><img src = "../assets/interstellar.jpg" alt = "Interstellar"><h4>
						Interstellar</h4></router-link>
					<router-link to = "/"><img src = "../assets/dunkirk.jpg" alt = "Dunkirk"><h4>Dunkirk</h4>
					</router-link>
				</div>
			</section>
			<footer>
				<h4>Mick Jasker Media &copy; 2018</h4>
			</footer>
		</div>

	</div>
</template>

<script>
  import anime from 'animejs'
  import AOS from 'aos'

  export default {
    name: 'HelloWorld',

    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      logoDraw: function () {
        console.log('Start animation')
        anime({
          target: '.logo',
          translateX: 250,
          duration: 1500,
          direction: 'alternate',
          loop: true
        })
        console.log('Start animation 2')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

	.page
	{
		text-align: center;
	}

	.landing
	{
		line-height: 100vh;
		height:      100vh;
	}

	.logo
	{
		height:  200px;
		z-index: 100;
	}

	.video {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed;
		z-index:  -100;
		height:   100vh;
		opacity:  0.75;
		width:    100vw;
	}

	iframe
	{
		width: 100%;
		height: 100%;
	}

	.landing h1
	{
		color:          white;
		font-size:      36px;
		letter-spacing: 10px;
	}

	.biography
	{
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #111 100%);
		min-height: 1000px;
		text-align: left;
		padding:    50px;
	}

	h1
	{
		color:     white;
		font-size: 36px;
	}

	p
	{
		color:     white;
		font-size: 16px;
	}

	.biography p
	{
		max-width: 1000px;
		width:     70vw;
		float:     left;
	}

	.biography img
	{
		float: right;
		height: 630px;
	}

	.filmoghraphy
	{
		display:          inline-block;
		background-color: #111;
		padding-top:      50px;
		width:            100%;
	}

	.films a
	{
		width:           8vw;
		margin:          20px;
		display:         inline-block;
		transition:      0.3s ease;
		color:           white;
		text-decoration: none;
	}

	.films a:hover
	{
		transform: scale(1.2);
	}

	.films a img
	{
		width: 100%;
	}

	footer
	{
		color:            white;
		background-color: #111;
		margin:           0;
		padding:          0;
	}

	footer h4
	{
		padding: 20px;
		margin:  0;
	}
</style>