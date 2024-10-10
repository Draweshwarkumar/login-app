import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {MatButtonModule} from '@angular/material/button';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    MatButtonModule
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
