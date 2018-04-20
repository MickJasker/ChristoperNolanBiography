<template>
    <div class="memento">
        <div class="landing">
            <div class="content">
                <router-link to="/"><i class="material-icons">keyboard_arrow_left</i></router-link>
                <h1>INCEPTION</h1>
                <h3>2010</h3>
                <p>nception&nbsp;is a 2010&nbsp;neo-noir&nbsp;science fiction&nbsp;heist film&nbsp;written, co-produced,
                    and directed by&nbsp;Christopher Nolan, and co-produced by&nbsp;Emma Thomas. The film stars&nbsp;Leonardo
                    DiCaprio&nbsp;as a professional thief who&nbsp;steals information&nbsp;by infiltrating the&nbsp;subconscious,
                    and is offered a chance to have his criminal history erased as payment for the implantation of
                    another person's idea into a target's subconscious.[4]&nbsp;The&nbsp;ensemble cast&nbsp;additionally
                    includes&nbsp;Ken Watanabe,&nbsp;Joseph Gordon-Levitt,&nbsp;Marion Cotillard,&nbsp;Ellen Page,&nbsp;Tom
                    Hardy,&nbsp;Dileep Rao,&nbsp;Cillian Murphy,&nbsp;Tom Berenger, and&nbsp;Michael Caine.</p>
                <p>After the 2002 completion of&nbsp;Insomnia, Nolan presented to&nbsp;Warner Bros.&nbsp;a written
                    80-page&nbsp;treatment&nbsp;about a&nbsp;horror film&nbsp;envisioning "dream stealers" based on&nbsp;lucid
                    dreaming.[5]&nbsp;Deciding he needed more experience before tackling a production of this magnitude
                    and complexity, Nolan retired the project and instead worked on 2005's&nbsp;Batman Begins, 2006's&nbsp;The
                    Prestige, and&nbsp;The Dark Knight&nbsp;in 2008.[6]&nbsp;The treatment was revised over 6 months and
                    was purchased by Warner in February 2009.[7]&nbsp;Inception&nbsp;was filmed in six countries,
                    beginning in Tokyo on June 19 and ending in Canada on November 22.[8]&nbsp;Its official budget was
                    $160&nbsp;million, split between&nbsp;Warner Brosand&nbsp;Legendary.[9]&nbsp;Nolan's reputation and
                    success with&nbsp;The Dark Knight&nbsp;helped secure the film's $100&nbsp;million in advertising
                    expenditure.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YoHD9XEInc0?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
        background-image: url('../assets/inceptionBG.jpg');
        min-height: 100vh;
        background-size: cover;
        background-attachment: fixed;
    }

    iframe {
        width: auto;
        height: auto;
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