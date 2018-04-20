<template>
    <div class="memento">
        <div class="landing">
            <div class="content">
                <router-link to="/"><i class="material-icons">keyboard_arrow_left</i></router-link>
                <h1>THE PRESTIGE</h1>
                <h3>2006</h3>
                <p>The Prestige&nbsp;is a 2006 British-American&nbsp;mystery&nbsp;thriller film&nbsp;directed by&nbsp;Christopher
                    Nolan&nbsp;from a screenplay adapted by his brother&nbsp;Jonathan&nbsp;from&nbsp;Christopher
                    Priest's 1995 novel&nbsp;The Prestige. Its story follows Robert Angier and Alfred Borden, rival
                    stage magicians in&nbsp;London&nbsp;at the end of the&nbsp;19th century. Obsessed with creating the
                    best stage&nbsp;illusion, they engage in competitive one-upmanship with tragic results.</p>
                <p>The film stars&nbsp;Hugh Jackman&nbsp;as Robert Angier,&nbsp;Christian Bale&nbsp;as Alfred Borden,
                    and&nbsp;David Bowie&nbsp;as&nbsp;Nikola Tesla. It also stars&nbsp;Scarlett Johansson,&nbsp;Michael
                    Caine,&nbsp;Piper Perabo,&nbsp;Andy Serkis, and&nbsp;Rebecca Hall. The film reunites Nolan with
                    actors Bale and Caine from&nbsp;Batman Begins&nbsp;and returning cinematographer&nbsp;Wally Pfister,
                    production designer Nathan Crowley, film score composer&nbsp;David Julyan, and editor&nbsp;Lee
                    Smith.</p>
                <p>The film was released on October 20, 2006, receiving positive reviews and strong box office results,
                    and received&nbsp;Academy Award&nbsp;nominations for&nbsp;Best Cinematography&nbsp;and&nbsp;Best Art
                    Direction. Along with&nbsp;The Illusionist&nbsp;and&nbsp;Scoop,&nbsp;The Prestige&nbsp;was one of
                    three films released in 2006 to explore the world of stage magicians.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9n2B5WW4SKk?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
        background-image: url('../assets/prestigeBg.jpg');
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