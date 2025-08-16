<template>
    <div id="contact">
        <v-row class="py-16">
            <v-col cols="12" sm="6" md="6" lg="6">
                <v-card flat>
                    <v-card-title class="font-weight-bold text-h5 text-sm-h4 text-md-h3 pt-0">Contact Us</v-card-title>
                    <v-card-text>
                        <div class="mt-4 mb-5">
                            <div class="d-flex align-center">
                                <v-icon icon="mdi-map-marker" class="mr-5" color="primary" />
                                <span class="font-weight-bold text-subtitle-1 text-md-h6">Address</span>
                            </div>
                            <div class="text-caption text-sm-subtitle-2 text-md-subtitle-1 text-grey-darken-1 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </div>
                        </div>

                        <div class="mb-5">
                            <div class="d-flex align-center">
                                <v-icon icon="mdi-phone" class="mr-5" color="primary" />
                                <span class="font-weight-bold text-subtitle-1 text-md-h6">Telephone</span>
                            </div>
                            <div class="text-caption text-sm-subtitle-2 text-md-subtitle-1 text-grey-darken-1 mt-4">+66
                                99 999 0999</div>
                        </div>

                        <div class="mb-5">
                            <div class="d-flex align-center">
                                <v-icon icon="mdi-clock-time-four-outline" class="mr-5" color="primary" />
                                <span class="font-weight-bold text-subtitle-1 text-md-h6">Hours</span>
                            </div>
                            <div class="text-caption text-sm-subtitle-2 text-md-subtitle-1 text-grey-darken-1 mt-4">
                                Mon–Sun: 12pm – 12am</div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6" class="d-flex justify-center justify-md-end">
                <v-img src="/images/contact.png" :max-width="imgSize" :max-height="imgSize" class="mt-2 rounded-lg" />
            </v-col>
        </v-row>
    </div>
</template>


<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { xs, sm, md, lgAndUp } = useDisplay()

const imgSize = ref(200)

const updateImgSize = () => {
    if (xs.value) imgSize.value = 400
    else if (sm.value) imgSize.value = 450
    else if (md.value) imgSize.value = 500
    else if (lgAndUp.value) imgSize.value = 600
}

onMounted(() => {
    updateImgSize()
    watch([xs, sm, md, lgAndUp], updateImgSize)
})
</script>

<style></style>