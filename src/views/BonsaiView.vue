<template>
    <div class="container mt-5 mb-5">
        <div class="mb-5">
            <RouterLink to="/">Back Home</RouterLink>
        </div>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div v-for="bonsai in bonsais" :key="bonsai.id" class="card h-100 shadow-sm border-0">
                    <img class="card-img-top" :src="['https://tbhpwebdevapi.azurewebsites.net/' + bonsai.productImage.replace(/^\.\//, '')]" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ bonsai.productTitle }}</h5>
                        <h6 class="card-text">${{ bonsai.productPrice }}</h6>
                        <RouterLink :to="`/bonsai/${bonsai.id}`" class="btn btn-dark btn-sm">Details</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed, onMounted } from "vue"; // Importing necessary Composition API functions from Vue
import { useStore } from "vuex"; // Importing useStore function from Vuex to access the store

const store = useStore(); // Accessing the Vuex store instance
const isLoading = ref(true);

// Fetch bonsais from the API when the component is mounted
onMounted(async () => {
    await store.dispatch("fetchBonsais");
    isLoading.value = false;
});

const bonsais = computed(() => store.state.bonsais); // Creating a computed property to reactively access the bonsais from the Vuex store
</script>
