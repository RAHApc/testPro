import { JwtService as jwt } from '@nestjs/jwt';

export class JWTservise extends jwt {
    async createJWT(user: any): Promise<string> {
        const payload = { sub: user._id, iat: Date.now() };
        return this.sign(payload);
      }
}