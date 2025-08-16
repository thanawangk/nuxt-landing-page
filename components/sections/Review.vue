<template>
    <v-row>
        <v-col cols="12">
            <v-card flat>
                <v-card-title class="font-weight-bold text-h5 text-sm-h4 text-md-h3">Reviews</v-card-title>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" class="d-flex justify-center">
            <v-slide-group v-model="model" show-arrows>
                <v-slide-group-item v-for="n in reviews" :key="n.name">
                    <v-card flat class="card-review px-2" :width="cardSize" :height="cardHeight">
                        <div class="text-subtitle-2 text-md-h6 font-italic text-center">
                            “{{ n.review }}”
                        </div>

                        <div class="d-flex justify-center align-center">
                            <div>
                                <v-avatar class="mr-5" :size="$vuetify.display.mdAndUp ? 40 : 32" color="secondary" />
                            </div>
                            <div>
                                <div class="text-subtitle-2 text-md-subtitle-1">
                                    {{ n.name }}
                                </div>
                                <v-rating :model-value="n.rate" :size="$vuetify.display.mdAndUp ? '' : 'small'"
                                    density="compact" color="orange" empty-icon="mdi-star-outline" full-icon="mdi-star"
                                    half-icon="mdi-star-half-full" readonly />
                            </div>
                        </div>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { xs, sm, md, lgAndUp } = useDisplay();

const cardSize = ref(200);
const cardHeight = computed(() => cardSize.value * 0.5);

const updateCardSize = () => {
    if (xs.value) cardSize.value = 250;
    else if (sm.value) cardSize.value = 300;
    else if (md.value) cardSize.value = 350;
    else if (lgAndUp.value) cardSize.value = 400;
};

onMounted(() => {
    updateCardSize();
    watch([xs, sm, md, lgAndUp], updateCardSize);
});

const model = ref(null);
const reviews = ref([
    {
        name: "Lorem Ipsum",
        review: "Lorem ipsum dolor sit amet",
        rate: 5,
    },
    {
        name: "Lorem Ipsum",
        review: "Lorem ipsum dolor sit amet",
        rate: 5,
    },
    {
        name: "Lorem Ipsum",
        review: "Lorem ipsum dolor sit amet",
        rate: 5,
    },
    {
        name: "Lorem Ipsum",
        review: "Lorem ipsum dolor sit amet",
        rate: 5,
    },
    {
        name: "Lorem Ipsum",
        review: "Lorem ipsum dolor sit amet",
        rate: 5,
    },
]);
</script>

<style>
.card-review {
    margin: 12px;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
}
</style>
