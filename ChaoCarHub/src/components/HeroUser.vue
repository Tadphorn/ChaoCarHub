<script>
export default{
    created() {
        this.showname = JSON.parse(localStorage.getItem("myname"))
        console.log(this.showname)
    }
}
</script>

<template>
    <section class="hero is-success is-halfheight is-gradient">
            <div class="hero-body">
                <div>
                    <p class="title">
                        {{showname}}
                    </p>
                    <p class="subtitle">
                        Track your rental status here!
                    </p>
                </div>
            </div>
        </section>

        <!-- status bar-->
            <section class="hero is-small border_td" style="background-color: var(--color-background);">
                <div class="hero-body">
                    <div class="columns is-5 has-text-centered">
                        <div class="column is-color-transgreen">
                            <a class="has-text-black ">
                                <img class="icon" src="https://media.discordapp.net/attachments/1072181252964233328/1076845329321824256/wallet.png" alt="">
                                <p>Check out</p>
                            </a>
                        </div>
                        <div class="column" id="ibar">
                            <a href="me_pickupcar.html" class="has-text-black">
                                <img class="icon" src="https://cdn.discordapp.com/attachments/1072181252964233328/1076845328743022653/car.png" alt="">
                                <p>Pick up car</p>
                            </a>

                        </div>
                        <div class="column" id="ibar">
                            <a href="me_returncar.html" class="has-text-black">
                                <img class="icon" src="https://cdn.discordapp.com/attachments/1072181252964233328/1076845328537489458/garage.png" alt="">
                                <p>Return car</p>
                            </a>
                        </div>
                        <div class="column" id="ibar">
                            <a href="me_history.html" class="has-text-black">
                                <img class="icon" src="https://cdn.discordapp.com/attachments/1072181252964233328/1076845401061195826/file-document.png" alt="">
                                <p>History</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
</template>



