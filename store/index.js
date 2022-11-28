export const state = () => ({
  showRules: false,
  showPoints: false,
});

export const mutations = {
  toggleRules(state) {
    console.log(state.showRules);
    state.showRules = !state.showRules;
  },

  togglePoints(state) {
    state.showPoints = !state.showPoints;
  },
};
