<template>
    <div class="memento">
        <div class="landing">
            <div class="content">
                <router-link to="/"><i class="material-icons">keyboard_arrow_left</i></router-link>
                <h1>INSOMNIA</h1>
                <h3>2002</h3>
                <p>In the small fishing town of&nbsp;Nightmute, Alaska, 17-year-old Kay Connell is found murdered. LAPD
                    detectives Will Dormer and Hap Eckhart are sent to assist the local police with their investigation,
                    at the request of police chief Nyback, an old colleague of Dormer's. Ellie Burr, a young local
                    detective who is also a fan of Dormer's investigative work, picks them up when they arrive. Back in
                    LA,&nbsp;Internal Affairs&nbsp;is investigating Dormer. Flying to Alaska, Eckhart reveals that he is
                    going to provide testimony against Dormer in exchange for immunity, to which Dormer responds that
                    many criminals whom he helped to convict using&nbsp;questionable evidence&nbsp;could go free if
                    their cases are reopened.</p>
                <p>Dormer attracts the murderer to the scene of the crime, but the suspect flees into the fog, shooting
                    one of the police officers through the leg. Dormer spots a figure in the fog and fires with his
                    backup weapon. Rushing to the fallen figure, Dormer picks up a .38 pistol the suspect has dropped.
                    He then discovers that he has shot Eckhart. Because of Eckhart's pending testimony, Dormer thinks
                    that Internal Affairs will never believe the shooting was an accident, so he claims that Eckhart was
                    shot by the suspect. He doesn't mention he has the .38 pistol. Burr is put in charge of the shooting
                    investigation, and her team finds the .38 caliber bullet that hit the officer. That night, Dormer
                    walks to an alley and fires the .38 pistol into an animal carcass, then retrieves and cleans the
                    bullet. At the morgue, the staffer hands him the bagged bullet retrieved from Eckhart's body but she
                    is unfamiliar with its type. Dormer leaves and switches the .38 bullet for the 9mm slug from
                    Eckhart's body.</p>
                <p>Over the next few days, Dormer is plagued by insomnia, brought on by his guilt over killing Eckhart
                    and exacerbated by the&nbsp;perpetual daylight. Dormer starts receiving anonymous phone calls from
                    the killer, who claims to have witnessed Dormer kill his partner. When the police learn that Kay was
                    a fan of local crime writer Walter Finch, Dormer breaks into Finch's apartment in the nearby village
                    of&nbsp;Umkumiut. Finch arrives home, realizes the police are present, and evades Dormer after a
                    chase. Dormer returns to Finch's apartment and plants the .38 to frame Finch.</p>
                <p>Finch contacts Dormer and arranges a meeting on a ferry. Finch wants help in shifting suspicion to
                    Kay's abusive boyfriend Randy Stetz and will stay silent about the Eckhart shooting in return.
                    Dormer gives advice on handling police questioning. After Finch leaves Dormer on the ferry, he shows
                    the detective a tape recorder he used to record the conversation.</p>
                <p>Finch calls Dormer and tells him that Kay's death was "an accident"&ndash;he beat her to death in a
                    fit of rage after she rejected his advances. The next day, Finch gives false testimony at the police
                    station. When Finch claims Randy has a gun, Dormer realizes Finch has discovered his plant, and has
                    hidden it at Randy's home. Randy is arrested when the gun is found at his house. Finch asks Burr to
                    come to his lake house the next day, to collect letters indicating that Randy abused Kay.</p>
                <p>Burr returns to the scene of Eckhart's death and finds a 9mm shell casing, which conflicts with the
                    bullet type from Eckhart's body. She reads old case files from investigations Dormer was involved in
                    and learns he has carried a 9mm, leading her to suspect that he shot Eckhart. Meanwhile, Dormer
                    confides in the hotel owner, Rachel Clement, about the Internal Affairs investigation: he fabricated
                    evidence to help convict a pedophile he was certain was guilty of murdering a child.</p>
                <p>Dormer learns that Burr has gone to Finch's. He finds Kay's letters in Finch's apartment and realizes
                    that Finch intends to kill Burr. He learns of Finch's lake house and rushes there. At the house,
                    Finch knocks Burr unconscious just as Dormer arrives. Dormer is too disoriented from lack of sleep
                    to fight off Finch. Burr revives and saves Dormer, while Finch escapes. Burr reveals she knows
                    Dormer shot Eckhart, and he admits that he is no longer certain if it was an accident. From his
                    shed, Finch shoots at them with a shotgun, and Burr returns fire while Dormer sneaks around to
                    Finch's location. After a scuffle in which the men inadvertently exchange weapons, Finch shoots
                    Dormer with the 9mm pistol, and Dormer shoots and kills Finch with the shotgun. Burr rushes to the
                    fatally wounded Dormer and comforts him by affirming that Eckhart's shooting was accidental, then
                    moves to throw away the 9mm shell casing to preserve Dormer's secret. Dormer stops Burr, however,
                    telling her not to lose her way and asks her to let him sleep.</p>
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
        background-image: url('../assets/insomniaBG.jpg');
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