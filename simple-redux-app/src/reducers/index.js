export default (state) => {
    if (state.tech ==='React'){
        console.log('ahihihi');
    }
    state['tech'] += '11';
    return state
}
