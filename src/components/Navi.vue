<template>
  <div :class="['navi-container', state.isDarkMode ? 'navi-container-dark' : '']">
    <img class="avatar" :src="state.authorInfo.avatar">
    <div
      class="icon-wrapper"
      :class="choosed === 'blog' ? 'selected' : ''"
      @click="onNaviChange('blog')"
    >
      <Icon :size="iconSize">
        <BookOpen20Regular />
      </Icon>
    </div>

    <div
      class="icon-wrapper"
      :class="choosed === 'project' ? 'selected' : ''"
      @click="onNaviChange('project')"
    >
      <Icon :size="iconSize">
        <Branch24Regular />
      </Icon>
    </div>

    <div
      class="icon-wrapper"
      :class="choosed === 'dairy' ? 'selected' : ''"
      @click="onNaviChange('dairy')"
    >
      <Icon :size="iconSize">
        <Timeline24Regular />
      </Icon>
    </div>

    <div
      class="icon-wrapper"
      :class="choosed === 'picture' ? 'selected' : ''"
      @click="onNaviChange('picture')"
    >
      <Icon :size="iconSize">
        <ImageCopy24Regular />
      </Icon>
    </div>

    <div class="blank" />

    <div class="switcher">
      <Icon
        :class="['switch-icon', !state.isDarkMode ? 'light' : '']"
        :size="iconSizeSmall"
      >
        <WeatherSunny16Filled />
      </Icon>
      <!-- eslint-disable-next-line -->
      <n-switch v-model:value="isDarkMode" @update:value="handleChange" size="small" />
      <Icon
        :class="['switch-icon', state.isDarkMode ? 'dark' : '']"
        :size="iconSizeSmall"
      >
        <WeatherMoon16Filled />
      </Icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookOpen20Regular from '@vicons/fluent/BookOpen20Regular';
import Branch24Regular from '@vicons/fluent/Branch24Regular';
import Timeline24Regular from '@vicons/fluent/Timeline24Regular';
import ImageCopy24Regular from '@vicons/fluent/ImageCopy24Regular';
import WeatherMoon16Filled from '@vicons/fluent/WeatherMoon16Filled';
import WeatherSunny16Filled from '@vicons/fluent/WeatherSunny24Filled';

export default defineComponent({
  name: 'Navi',
  components: {
    BookOpen20Regular,
    Branch24Regular,
    Timeline24Regular,
    ImageCopy24Regular,
    WeatherMoon16Filled,
    WeatherSunny16Filled,
  },
  data() {
    return {
      state: this.$Store.state,
      iconSize: 24,
      iconSizeSmall: 18,
      choosed: 'blog',
      isDarkMode: false,
    };
  },
  methods: {
    onNaviChange(id) {
      this.choosed = id;
    },
    handleChange(val) {
      this.$Store.setDarkMode(val);
    },
  },
});
</script>

<style scoped>
@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.navi-container {
  --borderColor: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 35px 0;
}

.navi-container-dark {
  --borderColor: #000;
}

.avatar {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 4px;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 25px 0;
  cursor: pointer;
  transition: 0.4s color ease-in;
  user-select: none;
}

.selected {
  position: relative;
  color: var(--themeColor);
}

.selected::after {
  position: absolute;
  right: -6px;
  box-sizing: content-box;
  width: 8px;
  height: 8px;
  background-color: var(--themeColor);
  border: 4px solid  var(--borderColor);
  border-radius: 50%;
  transition: 0.4s ease-in;
  animation: fade 0.3s ease-in-out;
  content: '';
  /* color: #9c88ff;
  border-right: 3px solid #9c88ff; */
}

.label {
  width: 52px;
  margin-top: -2px;
  margin-left: 8px;
  font-size: 14px;
  letter-spacing: 1px;
}

.blank {
  flex: 1;
  width: 100%;
}

.switcher {
  display: flex;
  align-items: center;
}

.switch-icon {
  margin: 0 5px;
  color: #b4b4b4;
  transition: 0.3s color ease-in-out;
}

.light {
  color: #ffb631;
}

.dark {
  color: #ffe37c;
}

@media screen and (max-width: 800px) {
  .navi-container {
    top: initial;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: row;
    width: initial;
    min-height: initial;
    padding: 10px 25px;
    background-color: #ecedef;
    border-radius: 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .avatar {
    display: none;
  }

  .icon-wrapper {
    flex-direction: column;
  }

  .label {
    margin: 0;
    letter-spacing: 1px;

  }

  .selected {
    box-shadow: initial;
  }
}
</style>
