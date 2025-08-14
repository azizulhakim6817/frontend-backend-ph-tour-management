export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface ISendOtp {
  email: string;
}
export interface IVerifyOtp {
  email: string;
  otp: string;
}

export interface ILogin<T = null> {
  email: string;
  password: string;
  data?: T; 
}



