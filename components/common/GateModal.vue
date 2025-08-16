<template>
    <div class="text-center pa-10">
        <v-dialog v-model="dialog" max-width="450" persistent>

            <v-card style="border-radius: 15px;">
                <template v-slot:title>
                    <div class="d-flex justify-center">
                        <img src="/public/images/logo.png" style="width:180px;" />
                    </div>
                </template>
                <template v-slot:text>
                    <v-card-text class="text-center font-weight-bold" style="color: #16B8F3; font-size: larger;">
                        Are You Over 21?
                    </v-card-text>
                    <v-card-text class="text-center">
                        The products available on Dispensary Store are intended for adults of 21+ only
                    </v-card-text>
                    <v-card-text class="text-center">
                        By entering our website, you affirm that you are of legal age in your
                        jurisdiction
                        and you agree to be Age Verified
                    </v-card-text>
                </template>
                <template v-slot:actions>
                    <div
                        style="display: flex; flex-direction: column; width: 100%; gap: 10px; margin: -20px 10px 20px 10px;">
                        <v-btn @click="dialog = false" variant="elevated"
                            style="border-radius: 8px; background-color: #16B8F3; color: #fff;"
                            class="font-weight-bold">
                            YES, I AM 21+
                        </v-btn>

                        <v-btn @click="dialog = false" variant="outlined" color="primary"
                            style="border-radius: 8px;border-width: 1px" class="font-weight-bold">
                            NO, I'M UNDER 21
                        </v-btn>
                    </div>

                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>

const dialog = ref<boolean>(true)

</script>

<style></style>