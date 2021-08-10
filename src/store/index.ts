import { reactive } from 'vue';
import { AuthorInfo, State } from '../type';

const Store = {
  state: reactive(<State>{
    authorInfo: {
      avatar: '',
      name: '',
    },
    isDarkMode: false,
    themeColor: '#9c88ff',
  }),
  setAuthorInfo(raw: AuthorInfo): void {
    Object.keys(raw).forEach((key): void => {
      this.state.authorInfo[key] = raw[key];
    });
  },
  setDarkMode(val: boolean): void {
    this.state.isDarkMode = val;
  },
  setThemeColor(color: string): void {
    this.state.themeColor = color;
    const root: any = document.querySelector(':root');
    root.style.setProperty('--themeColor', color);
  },
};

export default Store;
