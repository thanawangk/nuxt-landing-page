<template>
    <v-row>
        <v-col cols="12">
            <v-card flat>
                <v-card-title class="font-weight-bold text-h5 text-sm-h4 text-md-h3">Products</v-card-title>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" class="d-flex justify-center">
            <v-slide-group v-model="model" show-arrows>
                <v-slide-group-item v-for="n in zone" :key="n.name">
                    <v-card flat class="mx-6" :style="{ width: imgSize + 'px', minWidth: imgSize + 'px' }">
                        <v-img class="rounded-lg" :height="imgSize" :src="n.Image" cover />

                        <v-card-title class="pl-0 text-h5 font-weight-bold">
                            {{ n.name }}
                        </v-card-title>

                        <v-card-text class="pl-0 text-body-2 text-grey-darken-1">
                            {{ n.description }}
                        </v-card-text>

                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { xs, sm, md, lgAndUp } = useDisplay()

const imgSize = ref(200) // default/fallback for SSR

const updateImgSize = () => {
    if (xs.value) imgSize.value = 200
    else if (sm.value) imgSize.value = 250
    else if (md.value) imgSize.value = 300
    else if (lgAndUp.value) imgSize.value = 350
    // else imgSize.value = 400
}

onMounted(() => {
    updateImgSize()
    watch([xs, sm, md, lgAndUp], updateImgSize)
})

const model = ref(null);
const zone = ref([
    {
        name: 'INDICA',
        Image: '/images/slide-2-1.png',
        description: "Deeply relaxing and calming—best for unwinding, stress relief, and restful sleep."
    },
    {
        name: 'HYBRID',
        Image: '/images/slide-2-1.png',
        description: "A balanced blend of Sativa and Indica, perfect for those seeking both relaxation and focus."
    },
    {
        name: 'SATIVA',
        Image: '/images/slide-2-1.png',
        description: "Known for uplifting effects, ideal for daytime use and creative inspiration."
    }
])
</script>

<style></style>