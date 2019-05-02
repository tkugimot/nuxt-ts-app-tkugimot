<template>
  <div>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Nuxt TS App - tkugimot
                </h1>
                <p class="subtitle">
                    Very Easy Todo List
                </p>
                <font-awesome-icon icon="coffee" />
            </div>
        </div>
    </section>
    <Nuxt />
  </div>
</template>

<style lang="scss">
    .hero {
        .hero-body {
            .container {
                .subtitle {
                    font-weight: bold;
                    display: inline;
                }
            }
        }
    }
</style>
