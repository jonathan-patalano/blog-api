import { ITokenPayloadUnsigned } from "./token-payload-unsigned.interface";

export interface ITokenPayload extends ITokenPayloadUnsigned {
  exp: number; // inserted by jwt

  iat: number; // inserted by jwt
}
