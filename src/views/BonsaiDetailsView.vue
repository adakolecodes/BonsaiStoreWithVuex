<template>
    <div class="container mt-5 mb-5">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
        <div class="row">
            <div class="col-md-4">
            <img :src="['https://tbhpwebdevapi.azurewebsites.net/' + selectedBonsai.productImage.replace(/^\.\//, '')]" alt="" class="img-fluid">
            </div>
            <div class="col-md-8">
            <h1>{{ selectedBonsai.productTitle }}</h1>
            <h5>${{ selectedBonsai.productPrice }}</h5>
            <p>{{ selectedBonsai.productDescription }}</p>
            </div>
        </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from "vuex";
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute(); // Accessing the route object from Vue Router
const isLoading = ref(true);

// Fetching the selected bonsai from the store when the component is mounted
onMounted(async () => {
await store.dispatch('fetchBonsaiById', route.params.id);
isLoading.value = false;
});

const selectedBonsai = computed(() => store.state.selectedBonsai); // Creating a computed property to reactively access the selectedBonsai from the Vuex store
</script>
  