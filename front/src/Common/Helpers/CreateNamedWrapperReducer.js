
const createNamedWrapperReducer =  (reducerFunction, defaultState, moduleName) => {
    return (state = defaultState, action) => {
        const {module_name} = action;
        if (module_name !== moduleName) return state;
        return reducerFunction(state, action);
    }
};
export default createNamedWrapperReducer;