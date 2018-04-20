<template>
    <div class="memento">
        <div class="landing">
            <div class="content">
                <router-link to="/"><i class="material-icons">keyboard_arrow_left</i></router-link>
                <h1>MEMENTO</h1>
                <h3>2000</h3>
                <p>Memento is a 2000 American neo-noir psychological thriller film written and directed by Christopher
                    Nolan, and produced by Suzanne and Jennifer Todd. The film's script was based on a pitch by Jonathan
                    Nolan, who later wrote the story "Memento Mori" from the concept. It stars Guy Pearce, Carrie-Anne
                    Moss, and Joe Pantoliano.</p>
                <p>Pearce stars as a man who, as a result of a past trauma, has anterograde amnesia (the inability to
                    form new memories) and has short-term memory loss approximately every five minutes. He is searching
                    for the persons who attacked him and killed his wife, using an intricate system of Polaroid
                    photographs and tattoos to track information he cannot remember. Memento is presented as two
                    different sequences of scenes interspersed during the film: a series in black-and-white that is
                    shown chronologically, and a series of color sequences shown in reverse order (simulating for the
                    audience the mental state of the protagonist). The two sequences meet at the end of the film,
                    producing one complete and cohesive narrative.</p>
                <p>Memento premiered on September 5, 2000, at the Venice International Film Festival and was released in
                    European theaters starting in October. It became a blockbuster success, being acclaimed by critics
                    who praised its nonlinear narrative structure and motifs of memory, perception, grief, and
                    self-deception, and earning $39.7 million over a $9 million budget. It received numerous accolades,
                    including Academy Award nominations for Best Original Screenplay and Best Film Editing. The film
                    was subsequently ranked one of the best films of the 2000s by several critics and media outlets.
                    Memento was considered "culturally, historically or aesthetically" significant by the US Library of
                    Congress and was selected for preservation in the National Film Registry in 2017.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0vS0E9bBSL0?rel=0&amp;showinfo=0"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
        background-image: url('../assets/memento.jpg');
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