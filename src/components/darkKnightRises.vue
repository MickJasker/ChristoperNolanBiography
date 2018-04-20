<template>
    <div class="memento">
        <div class="landing">
            <div class="content">
                <router-link to="/"><i class="material-icons">keyboard_arrow_left</i></router-link>
                <h1>THE DARK KNIGHT RISES</h1>
                <h3>2012</h3>
                <p>The Dark Knight Rises&nbsp;is a 2012&nbsp;superhero film&nbsp;directed by&nbsp;Christopher Nolan, who
                    co-wrote the screenplay with his brother&nbsp;Jonathan Nolan, and the story with&nbsp;David S.
                    Goyer. Featuring the&nbsp;DC Comics&nbsp;character&nbsp;Batman, the film is the final installment in&nbsp;Nolan's&nbsp;The
                    Dark Knight Trilogy, and the sequel to&nbsp;The Dark Knight&nbsp;(2008).&nbsp;Christian Bale&nbsp;reprises
                    the lead role of Bruce Wayne/Batman, with a returning cast of allies:&nbsp;Michael Caine&nbsp;as&nbsp;Alfred
                    Pennyworth,&nbsp;Gary Oldman&nbsp;as&nbsp;James Gordon, and&nbsp;Morgan Freeman&nbsp;as&nbsp;Lucius
                    Fox. The film introduces&nbsp;Selina Kyle&nbsp;(Anne Hathaway) and&nbsp;Bane&nbsp;(Tom Hardy). Eight
                    years after the events of&nbsp;The Dark Knight, merciless revolutionary Bane forces an older Bruce
                    Wayne to resume his role as Batman and save&nbsp;Gotham City&nbsp;from nuclear destruction.</p>
                <p>Christopher Nolan was hesitant about returning to the series for a second time, but agreed after
                    developing a story with his brother and Goyer that he felt would conclude the series on a
                    satisfactory note. Nolan drew inspiration from Bane's comic book debut in the 1993 "Knightfall"
                    storyline, the 1986 series&nbsp;The Dark Knight Returns, and the 1999 storyline "No Man's Land".
                    Filming took place from May to November of 2011 in locations including&nbsp;Jodhpur, London,&nbsp;Nottingham,
                    Glasgow, Los Angeles, New York City,&nbsp;Newark, and&nbsp;Pittsburgh. Nolan used&nbsp;IMAX&nbsp;70&nbsp;mm
                    film cameras for much of the filming, including the first six minutes of the film, to optimize the
                    quality of the picture. A vehicle variation of the&nbsp;Batplane&nbsp;and&nbsp;Batcopter&nbsp;termed
                    the "Bat", an underground prison set, and a new&nbsp;Batcave&nbsp;set were created specifically for
                    the film. As with&nbsp;The Dark Knight,&nbsp;viral marketing&nbsp;campaigns began early during
                    production. When filming concluded, Warner Bros. refocused its campaign: developing promotional
                    websites, releasing the first six minutes of the film, screening theatrical trailers, and sending
                    out information regarding the film's plot.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GokKUqLcvD8?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "darkKnightRises"
    }
</script>

<style scoped>
    .landing {
        background-image: url('../assets/darkKnightRises.jpg');
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