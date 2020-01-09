import { NgModule } from '@angular/core';
import { ApiModule } from './api/api.module';
import { GuardsModule } from './guards/guards.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [],
  imports: [ApiModule, GuardsModule, InterceptorsModule, ServicesModule],
  exports: [],
  providers: [],
})
export class CoreModule {}
