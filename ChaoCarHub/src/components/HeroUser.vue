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
</template>



