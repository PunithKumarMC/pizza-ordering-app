import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { PizzaServiceComponent } from './pizza-service/pizza-service.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { UpdatepizzaTocartComponent } from './updatepizza-tocart/updatepizza-tocart.component';
import { AuthInterceptor } from './authconfig.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PizzaServiceComponent,
    UpdatepizzaTocartComponent,
    PageNotFoundComponent,
    ViewcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
