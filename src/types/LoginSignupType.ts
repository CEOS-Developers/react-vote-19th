export interface SignupFormEventType extends HTMLFormElement {
  userName: {
    value: string;
  };
  userId: {
    value: string;
  };
  userPassword: {
    value: string;
  };
  userEmail: {
    value: string;
  };
  userPart: {
    value: string;
  };
  userTeam: {
    value: string;
  };
}

export interface LoginFormEventType extends HTMLFormElement {
  userId: {
    value: string;
  };

  userPassword: {
    value: string;
  };
}
