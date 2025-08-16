<template>
    <div id="about">
        <v-row>
            <v-col cols="12" lg="8">
                <v-card flat>
                    <v-card-title class="font-weight-bold text-h5 text-sm-h4 text-md-h2">DISPENSARY
                        STORE</v-card-title>
                    <v-card-text class="text-subtitle-1 text-sm-h6 text-md-h6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris quam, gravida in
                        sagittis non, finibus nec diam. Mauris sit amet varius quam. Cras rhoncus turpis nisl, ut
                        finibus dolor semper in. Curabitur vestibulum nisi ut lacus consectetur condimentum. Vestibulum
                        imperdiet vel nisi et tincidunt. Suspendisse mollis tellus at nisi vehicula, sed mollis metus
                        venenatis. Pellentesque magna nisi, finibus ut semper vel, volutpat ut nunc. Cras sed nulla eget
                        metus porta varius.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12"" class=" px-6">
                <v-carousel height="auto" class="rounded-lg mx-auto" show-arrows="hover" cycle hide-delimiters>
                    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
const slides = ref([
    { src: '/images/carousel-1.png' },
    { src: '/images/carousel-2.png' },
])
</script>

<style>
.v-carousel {
    max-width: 1200px;
}
</style>