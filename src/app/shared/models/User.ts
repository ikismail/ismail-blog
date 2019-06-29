import { Link } from "./User";
export interface User {
    id?: number;
    guid?: string;
    name?: string;
    bio?: string;
    position?: string;
    email?: string;
    phoneNumber?: string;
    avatar?: string;
    links?: SocialLink[];
    location?: Location;
}

export interface SocialLink {
    github?: Link;
    linkedIn?: Link;
    freeCodeCamp?: Link;
    twitter?: Link;
    facebook?: Link;
    google?: Link;
    youtube?: Link;
    codepen?: Link;
    instagram?: Link;
    whatsapp?: Link;
}

export interface Link {
    username?: string;
    link?: string;
    canShow?: Boolean;
}

export interface Location {
    city?: string;
    state?: string;
    country?: string;
}
