export interface State {
  authorInfo: AuthorInfo;
  isDarkMode: Boolean;
  themeColor: string;
}

export interface AuthorInfo {
  name: string;
  avatar: string;
  [key: string]: any;
}

export interface Article {
  title: string;
  describe: string;
  createTime: string;
  cover?: string;
}
