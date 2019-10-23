import { NgModule } from '@angular/core';
import * as ServiceProxies from './service-proxies';

@NgModule({
  providers: [ServiceProxies.UserServiceProxy],
})
export class ApiModule {}
