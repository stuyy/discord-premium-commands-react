export type User = {
  id: number;
  discordId: string;
  email: string;
  premium: boolean;
};

export type UserContextType = {
  user?: User;
};

export type AuthenticatedUserResponseType = {
  id: number;
  discordId: string;
  email: string;
  premium: boolean;
};
