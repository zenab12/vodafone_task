import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudProductsService } from './services/crud-products.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ErrorComponent } from './pages/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedDataService } from './services/sharedService.service';
import { authGuard } from './auth.guard';
import { adminAuth } from './admin-auth.guard';
// import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
      authGuard,
      adminAuth,
     CrudProductsService,
     { provide:ErrorHandler,
      useClass:ErrorHandlerService }
      ,SharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
