import { createStore } from "vuex"; // Importing createStore function from Vuex to create a new store
import axios from "axios"; // Importing axios for making HTTP requests

export default createStore({
    state: {
      bonsais: [], // Defining the initial state with an empty bonsais array
      selectedBonsai: null,
    },

    mutations: {
        // Mutation to set the bonsais array with fetched data
        SET_BONSAIS(state, bonsais) {
            state.bonsais = bonsais;
        },

        SET_SELECTED_BONSAI(state, bonsai) {
            state.selectedBonsai = bonsai;
        },
    },

    // Action to fetch bonsais from the API
    actions: {
        async fetchBonsais({ commit }) {
            const response = await axios.get(
              "https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/All"
            );
            commit("SET_BONSAIS", response.data); // Committing the fetched data to the state using the SET_BONSAIS mutation
        },

        async fetchBonsaiById({ commit }, id) {
            const response = await axios.get(
              `https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/${id}`
            );
            commit("SET_SELECTED_BONSAI", response.data);
        },

        async fetchBonsaisByCategory({ commit }, category) {
            try{
                const categoryResponse = await axios.get(`https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/Category?category=${category}`);
                const categoryBonsaiIds = categoryResponse.data;

                const bonsaisResponse = await axios.get('https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/All');
                const allBonsais = bonsaisResponse.data;

                const filteredBonsais = allBonsais.filter(bonsai => categoryBonsaiIds.includes(bonsai.id));
                commit('SET_BONSAIS', filteredBonsais);
            } catch (error) {
                console.error(error);
            }
        }
    },
});