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
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore(); 
const route = useRoute();
const isLoading = ref(true);

// Fetching the selected bonsais by category from the store
const fetchBonsais = async () => {
    await store.dispatch('fetchBonsaisByCategory', route.params.category);
    isLoading.value = false;
};

// Mounting the fetchBonsais function when the component is mounted
onMounted(fetchBonsais);

watch(() => route.params.category, fetchBonsais); // Watching for changes in the route params and calling the fetchBonsais function for each change

const bonsais = computed(() => store.state.bonsais); // Creating a computed property to reactively access the bonsais by category from the Vuex store

</script>