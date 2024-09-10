import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { AuthStatus, type User } from '../interfaces';
import { loginActions, registerAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  // Authenticated, unAuthenticated, Checking
  const authStatus = ref<AuthStatus>(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', ''));

  const login = async (email: string, password: string) => {
    try {
      const loginResp = await loginActions(email, password);
      if (!loginResp.ok) {
        logout();
        return false;
      }

      user.value = loginResp.user;
      token.value = loginResp.token;
      authStatus.value = AuthStatus.Authenticated;

      return true;
    } catch (error) {
      return logout();
    }
  };

  const register = async (fullName: string, email: string, password: string) => {
    try {
      const regisResp = await registerAction(fullName, email, password);
      if (!regisResp.ok) {
        logout();
        return { ok: false, message: regisResp.message };
      }
      user.value = regisResp.user;
      token.value = regisResp.token;
      authStatus.value = AuthStatus.Authenticated;
    } catch (error) {
      return { ok: false, message: 'Error response register.' };
    }
  };

  const logout = () => {
    authStatus.value = AuthStatus.UnAuthenticated;
    user.value = undefined;
    token.value = '';
    return false;
  };

  return {
    user,
    authStatus,
    token,

    // Getters
    isCheckin: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),

    // Todo: getter saber si es Admin o no
    username: computed(() => user.value?.fullName),

    // Actions
    login,
    register,
  };
});
