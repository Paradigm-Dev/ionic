export interface UserBook {
  book_id: string;
  rating: number;
  favorite: boolean;
}

export interface UserMovie {
  movie_id: string;
  rating: number;
  favorite: boolean;
}

export interface UserMusic {
  music_id: string;
  rating: number;
  favorite: boolean;
}

export interface StoredChatroom {
  name: string;
  id: string;
  icon: string;
  status: string;
}

export interface DrawerFile {
  name: string;
  type: string;
  size: string;
  date: string;
  path: string;
}

export interface Person {
  _id: string;
  username: string;
  color: string;
  pic: string;
  liked_posts: string[];
  dm: string;
}

export interface Post {
  content: string;
  timestamp: string;
  likes: number;
  reposts: number;
  file_path: string;
  file_type: string;
}

export interface User {
  _id: string;
  username: string;
  password: string;
  bio: string;
  color: string;
  pic: string;
  chatrooms: StoredChatroom[];
  people: {
    requests: Person[];
    approved: Person[];
    blocked: Person[];
    sent: Person[];
    blocked_by: string[];
  };
  rights: {
    admin: boolean;
    author: boolean;
    asteroid: boolean;
    patriot: boolean;
    developer: boolean;
  };
  moonrocks: number;
  books: UserBook[];
  movies: UserMovie[];
  music: UserMusic[];
  files: DrawerFile[];
  banned: boolean;
  strikes: number;
  in: boolean;
  created: string;
  posts: Post[];
  apollo_codes: {
    created: number;
    quota: number;
  };
}
