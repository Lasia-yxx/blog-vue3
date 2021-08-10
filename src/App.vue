<template>
  <n-config-provider class="config" :theme-overrides="themeOverrides">
    <div :class="['app-container', state.isDarkMode ? 'dark-mode' : '']">
      <div
        v-if="$route.name !== 'Index'"
        :class="['navi-wrapper', state.isDarkMode ? 'navi-dark-mode' : '']"
      >
        <Navi />
      </div>
      <div :class="['router-view', state.isDarkMode ? 'router-dark-mode' : '']">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <!-- <button @click="handleClick">darkmode</button> -->
    </div>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navi from '@component/Navi.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navi,
  },
  data() {
    return {
      state: this.$Store.state,
    };
  },
  computed: {
    themeOverrides() {
      const data = {
        common: {
          primaryColor: this.state.themeColor,
          primaryColorHover: this.state.themeColor,
        },
      };
      return data;
    },
  },
  methods: {
    handleClick() {
      // this.$Store.setDarkMode();
      this.$Store.setThemeColor('#faa');
    },
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  box-sizing: border-box;
  font-family: 'Fira Code','Noto Sans SC';
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0 !important;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

#app {
  width: 100%;
  height: 100vh;
  min-height: 500px;
  padding: 20px;
  color: #34495e;
  font-size: 16px;
  line-height: initial;
  background-image: url('./assets/background.jpg');
  background-position: center;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.config {
  width: 100%;
  height: 100%;
}

.app-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
}

.dark-mode {
  color: #dcdde1;
}

.navi-wrapper {
  width: 100px;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  /* box-shadow: 2px 2px 24px #272727; */
  transition: 0.3s background ease-in-out;
}

.navi-dark-mode {
  background: rgba(0, 0, 0, 0.95);
  box-shadow: 2px 2px 24px #e6e6e6;

}

.router-view {
  flex: 1;
  height: 100%;
  padding: 10px;
  background: rgba(250, 250, 250, 0.95);
  transition: 0.3s background ease-in-out;
}

.router-dark-mode {
  background: rgba(37, 37, 37, 0.95);
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background: var(--themeColor);
  border-radius: 14px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 14px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 800px) {
  .app-container {
    flex-direction: column;
  }

  .router-view {
    width: 100%;
    margin-left: 0;
  }
}
</style>
