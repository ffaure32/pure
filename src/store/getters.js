export const passwords = state => state.passwords;

export const password = state => state.password;

export const defaultPassword = state => state.defaultPassword;

export const isAuthenticated = state => state.authenticated;

export const isGuest = state => !state.authenticated;

export const passwordStatus = state => state.passwordStatus;

export const version = state => {
    if (state.password === null) {
        return state.defaultPassword.version;
    }
    return state.password.version;
};

export const passwordURL = state => {
    return `${state.baseURL}/#/?login=${state.password.login}&site=${state.password.site}&uppercase=${state.password.uppercase}&lowercase=${state.password.lowercase}&numbers=${state.password.numbers}&symbols=${state.password.symbols}&length=${state.password.length}&counter=${state.password.counter}&version=${state.password.version}`;
};