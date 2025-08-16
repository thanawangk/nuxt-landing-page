<template>
    <div class="layout-container">
        <common-header />

        <main class="main-content">
            <slot />
        </main>

        <common-footer />
    </div>

    <common-gate-modal v-model="dialog" />
</template>

<script setup lang="ts">
const dialog = ref<boolean>(true);
</script>


<style></style>
