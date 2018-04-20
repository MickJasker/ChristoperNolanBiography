<template>
    <div class="memento">
        <div class="landing">
            <div class="content">
                <router-link to="/"><i class="material-icons">keyboard_arrow_left</i></router-link>
                <h1>THE DARK KNIGHT</h1>
                <h3>2008</h3>
                <p>The Dark Knight&nbsp;is a 2008&nbsp;superhero film&nbsp;directed, produced, and co-written by&nbsp;Christopher
                    Nolan. Featuring the&nbsp;DC Comics&nbsp;character&nbsp;Batman, the film is the second part of&nbsp;Nolan's&nbsp;The
                    Dark Knight Trilogy&nbsp;and a sequel to 2005's&nbsp;Batman Begins, starring an&nbsp;ensemble cast&nbsp;including&nbsp;Christian
                    Bale,&nbsp;Michael Caine,&nbsp;Heath Ledger,&nbsp;Gary Oldman,&nbsp;Aaron Eckhart,&nbsp;Maggie
                    Gyllenhaal&nbsp;and&nbsp;Morgan Freeman. In the film, Bruce Wayne/Batman (Bale), Police Lieutenant&nbsp;James
                    Gordon&nbsp;(Oldman) and District Attorney&nbsp;Harvey Dent&nbsp;(Eckhart) form an alliance to
                    dismantle organized crime in&nbsp;Gotham City, but are menaced by a criminal mastermind known as the&nbsp;Joker&nbsp;(Ledger)
                    who seeks to undermine Batman's influence and create chaos.</p>
                <p>Nolan's inspiration for the film was the Joker's comic book debut in 1940, the 1988 graphic novel&nbsp;The
                    Killing Joke, and the 1996 series&nbsp;The Long Halloween, which retold&nbsp;Two-Face's origin. The&nbsp;"Dark
                    Knight" nickname&nbsp;was first applied to Batman in&nbsp;Batman&nbsp;#1 (1940), in a story written
                    by&nbsp;Bill Finger.[4][5]&nbsp;The Dark Knight&nbsp;was filmed primarily in&nbsp;Chicago, as well
                    as in several other locations in the United States, the United Kingdom, and Hong Kong. Nolan used&nbsp;IMAX&nbsp;70&nbsp;mm
                    film cameras to film some sequences, including the Joker's first appearance in the film.&nbsp;Warner
                    Bros.&nbsp;initially created a&nbsp;viral marketing&nbsp;campaign for&nbsp;The Dark Knight,
                    developing promotional websites and trailers highlighting screenshots of Ledger as the Joker. Ledger
                    died on January 22, 2008, some months after the completed filming and six months before the film's
                    release from a&nbsp;toxic combination of prescription drugs, leading to intense attention from the
                    press and movie-going public.</p>
                <p>A co-production of the United States and the United Kingdom,&nbsp;The Dark Knight&nbsp;was released
                    on July 16, 2008 in Australia, on July 18, 2008, in North America, and on July 25, 2008, in the
                    United Kingdom. Considered by&nbsp;film critics&nbsp;to be one of the best films of the 2000s and
                    one of the&nbsp;best superhero films&nbsp;ever,[6][7]&nbsp;the film received highly positive
                    reviews, particularly for its screenplay, performances (particularly Ledger's), visual effects, and
                    direction, and set numerous records during its theatrical run.[8]&nbsp;The Dark Knight&nbsp;appeared
                    on more critics' top ten lists (287) than any other film of 2008 with the exception of&nbsp;WALL-E,
                    and more critics (77) named&nbsp;The Dark Knight&nbsp;the best film of 2008 than any other film
                    released that year.[9]&nbsp;With over $1&nbsp;billion in revenue worldwide, it became the&nbsp;highest-grossing
                    film of 2008&nbsp;and is the&nbsp;33rd highest-grossing film&nbsp;of all time, unadjusted for
                    inflation (4th at the time of release).[10]&nbsp;The film received eight&nbsp;Academy Award&nbsp;nominations;
                    it won the award for&nbsp;Best Sound Editing&nbsp;and Ledger was posthumously awarded&nbsp;Best
                    Supporting Actor.[11]&nbsp;The Dark Knight Rises, the final film in the trilogy, was released on
                    July 20, 2012.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EXeTwQWrcwY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "momento"
    }
</script>

<style scoped>
    .landing {
        background-image: url('../assets/darkKnightBg.jpg');
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