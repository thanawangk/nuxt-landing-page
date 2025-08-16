<template>
    <div>
        <v-layout>
            <v-app-bar :height="appBarHeight">
                <div class="logo-container">
                    <img src="/images/logo.png" alt="Logo" :style="{ height: logoHeight + 'px' }" />
                </div>

                <div class="d-flex align-center ml-auto">
                    <!-- Desktop Menu -->
                    <div class="d-none d-md-flex align-center mr-2">
                        <v-btn class="btn-hover-blue" text @click="goTo('about')">About</v-btn>
                        <v-btn class="btn-hover-blue" text @click="goTo('contact')">Contact Us</v-btn>
                    </div>

                    <!-- Mobile: Hamburger Menu -->
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn class="d-md-none mr-2" icon="mdi-menu" variant="text" v-bind="props"></v-btn>
                        </template>

                        <v-list>
                            <v-list-item @click="goTo('about')">About</v-list-item>
                            <v-list-item @click="goTo('contact')">Contact</v-list-item>
                        </v-list>
                    </v-menu>

                    <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ props }">
                            <v-btn :text="currentLang" append-icon="mdi-chevron-down" v-bind="props" variant="outlined"
                                class="lang-btn mr-8" height="30" width="30" />
                        </template>
                        <v-list>
                            <v-list-item v-for="lang in langs" :key="lang" @click="currentLang = lang">
                                <v-list-item-title>{{ lang }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>

                <!-- Mobile Drawer -->
                <!-- <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" /> -->
            </v-app-bar>

            <!-- Mobile Drawer -->
            <!-- <v-navigation-drawer v-model="drawer" temporary location="right">
                <v-list>
                    <v-list-item @click="goTo('about')">About</v-list-item>
                    <v-list-item @click="goTo('contact')">Contact</v-list-item>
                </v-list>
            </v-navigation-drawer> -->
        </v-layout>
    </div>
</template>

<script setup lang="ts">

/* #### Composables #### */
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

// const drawer = ref(false)
const display = useDisplay()
const logoHeight = computed(() => (display.smAndDown.value ? 55 : 75))
const appBarHeight = computed(() => (display.smAndDown.value ? 60 : 80))

/* #### State #### */
const currentLang = ref('EN');
const langs = ['EN', 'TH'];

/* #### Methods #### */
const goTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const toggleLang = () => {
    console.log('Switch language')
}

/* #### Life Cycle Hooks #### */

</script>

<style scoped>
.gap-2 {
    gap: 0.5rem;
}

.logo-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 10px;
}

.lang-btn {
    font-weight: bold;
    box-shadow:
        4px 4px 0px #0D1C2D,
        8px 8px 0px #16B8F3;
}

.btn-hover-blue {
    transition: color 0.3s ease;
}

.btn-hover-blue::before {
    content: "";
    position: absolute;
    height: 30px;
    width: 0;
    background-color: #16B8F3;
    border-radius: 4px;
    z-index: 0;
    transition: width 0.3s ease;
}

.btn-hover-blue:hover::before {
    width: 100%;
}

.btn-hover-blue:hover {
    color: white !important;
}

.btn-hover-blue>* {
    position: relative;
    z-index: 1;
}
</style>