/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService} from '@nestjs/config';
//import config from './modules/config/configuration'

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
   getHello(): string {
    return 'Holaaaaaaaa Mundo mamasita';
  }

  getHost() {
    const host = this.configService.get<string>('host');
    console.log('Tu host es', host)
    return host
    
  }

}
