import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from 'src/core/api/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ServicesModule } from 'src/core/services/services.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ApiModule,
    HttpClientModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
