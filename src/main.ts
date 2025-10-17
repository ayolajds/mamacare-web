// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient /*, withInterceptors */ } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { App } from './app/app';
import { routes } from './app/app.routes';
// import { authInterceptor } from './app/services/auth.interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // 👈 habilita HttpClient en todo el app
    // Si usas interceptor:
    // provideHttpClient(withInterceptors([authInterceptor])),
  ],
}).catch(err => console.error(err));
