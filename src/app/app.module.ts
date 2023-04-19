import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbMenuModule, NbContextMenuModule, NbButtonModule, NbCardModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './pages/home/home.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeModule } from './pages/about-me/about-me.module';
import { ProposCardComponent } from './pages/home/components/propos-card/propos-card.component';

@NgModule({
    declarations: [
        AppComponent,
        PortfolioComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        HomeModule,
        HeaderModule,
        FooterModule,
        AboutMeModule,

        NbThemeModule.forRoot({name: 'dark'}),
        NbMenuModule.forRoot(),
        NbLayoutModule,
        NbEvaIconsModule,
        NbContextMenuModule,
        NbButtonModule,
        NbCardModule,

    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
