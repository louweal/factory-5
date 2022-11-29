export const state = () => ({
  showRules: false,
  showPoints: false,
  startPoints: 50,
  myPoints: -1,
  computerPoints: -1,
});

export const mutations = {
  toggleRules(state) {
    console.log(state.showRules);
    state.showRules = !state.showRules;
  },

  togglePoints(state) {
    state.showPoints = !state.showPoints;
  },
  updatePoints(state, payload) {
    if (payload.i === 0) {
      state.myPoints -= payload.lost;
    } else {
      state.computerPoints -= payload.lost;
    }
  },
  setPoints(state) {
    state.myPoints = state.startPoints;
    state.computerPoints = state.startPoints;
  },
};
