export interface Auth {
  sign_in: boolean;
  sign_up: boolean;
  recover: boolean;
}

export interface App {
  color: string;
  live: boolean;
  title: string;
  path: string;
}

export interface Download {
  title: string;
  description: string;
  win: string;
  mac: string;
}

export interface Landing {
  date: string;
  title: string;
  body: string;
}

export interface Config {
  auth: Auth;
  shutdown: boolean;
  apps: App[];
  banned: string[];
  download: any;
  downloads: Download[];
  landing: Landing;
}
