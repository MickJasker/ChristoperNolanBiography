<template>
    <div class="interstellar">
        <div class="landing">
            <div class="content">
                <router-link to="/"><i class="material-icons">keyboard_arrow_left</i></router-link>
                <h1>INTERSTELLAR</h1>
                <h3>2014</h3>
                <p>
                    Interstellar is a 2014 epic science fiction film directed, co-written, and co-produced by Christopher
                    Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael
                    Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of
                    astronauts who travel through a wormhole in search of a new home for humanity. <br><br>

                    Brothers Christopher and Jonathan Nolan wrote the screenplay, which had its origins in a script Jonathan
                    developed in 2007. Nolan produced Interstellar with his wife, Emma Thomas, through their production
                    company Syncopy, and with Lynda Obst through Lynda Obst Productions. Caltech theoretical physicist Kip Thorne
                    was an executive producer, acted as scientific consultant, and wrote a tie-in book, The Science of
                    Interstellar. Paramount Pictures, Warner Bros., and Legendary Pictures co-financed the film. Cinematographer Hoyte van
                    Hoytema shot it on 35 mm in anamorphic format and IMAX 70 mm. Principal photography began in late 2013
                    and took place in Alberta (Canada), Iceland and Los Angeles. Interstellar uses extensive practical and
                    miniature effects and the company Double Negative created additional digital effects. <br><br>

                    Interstellar premiered on October 26, 2014, in Los Angeles, California. In the United States, it was
                    first released on film stock, expanding to venues using digital projectors. The film had a worldwide gross of
                    over $677 million, making it the tenth-highest-grossing film of 2014. The film received critical praise for
                    its themes, visual effects, score and performances. Reception from the scientific community was mixed,
                    although the film's depiction of wormholes and black holes was praised. At the 87th Academy Awards, the film won
                    the Academy Award for Best Visual Effects, and was nominated for Best Original Score, Best Sound Mixing,
                    Best Sound Editing and Best Production Design.
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2LqzF5WauAw?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "interstellar"
    }
</script>

<style scoped>
    .landing {
        background-image: url('../assets/interstellarBG.jpg');
        min-height: 100vh;
        background-size: cover;
        background-attachment: fixed;
    }

    .content {
        padding: 60px;
        color: white;
        width: 90vw;
        max-width: 800px;
        background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, #111 100%);
        min-height: 100vh;
    }

    h1 {
        margin: 0;
    }

    h3 {
        font-weight: 200;
    }

    a {
        color: #CC281B;
        text-decoration: none;
    }
    a i {
        font-size: 48px;
        transition: 0.3s ease;
    }
    a i:hover {
        transform: scale(1.5);
    }
</style>