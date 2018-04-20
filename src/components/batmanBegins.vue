<template>
    <div class="memento">
        <div class="landing">
            <div class="content">
                <router-link to="/"><i class="material-icons">keyboard_arrow_left</i></router-link>
                <h1>BATMAN BEGINS</h1>
                <h3>2005</h3>
                <p>Batman Begins&nbsp;is a 2005&nbsp;superhero film&nbsp;based on the&nbsp;DC Comics&nbsp;character&nbsp;Batman,
                    directed by&nbsp;Christopher Nolan&nbsp;and written by Nolan and&nbsp;David S. Goyer. It stars&nbsp;Christian
                    Bale,&nbsp;Michael Caine,&nbsp;Liam Neeson,&nbsp;Katie Holmes,&nbsp;Gary Oldman,&nbsp;Cillian
                    Murphy,&nbsp;Tom Wilkinson,&nbsp;Rutger Hauer,&nbsp;Ken Watanabe, and&nbsp;Morgan Freeman. The film&nbsp;reboots&nbsp;the&nbsp;Batman&nbsp;film
                    series, telling the&nbsp;origin story&nbsp;of Bruce Wayne from the death of his parents to his
                    journey to become Batman and his fight to stop&nbsp;Ra's al Ghul&nbsp;and the&nbsp;Scarecrow&nbsp;from
                    plunging&nbsp;Gotham City&nbsp;into chaos.</p>
                <p>After a series of unsuccessful projects to resurrect Batman on screen following the critical failure
                    of&nbsp;Batman &amp; Robin&nbsp;(1997), Nolan and Goyer began work on the film in early 2003. Aiming
                    for a darker, more realistic tone compared to the previous films, a primary goal for their vision
                    was to have the audience care about both the Batman and Bruce Wayne identities of the lead
                    character. The film, which was primarily shot in the United Kingdom, Iceland and Chicago, relied
                    heavily on traditional&nbsp;stunts&nbsp;and&nbsp;miniature effects, with&nbsp;computer-generated
                    imagery&nbsp;being used in a minimal capacity compared to other action films. Comic book storylines
                    such as&nbsp;The Man Who Falls,&nbsp;Batman: Year One&nbsp;and&nbsp;Batman: The Long Halloween&nbsp;served
                    as inspiration.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/neY2xVmOfUM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "batman-begins"
    }
</script>

<style scoped>
    .landing {
        background-image: url('../assets/batmanBegins.jpg');
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