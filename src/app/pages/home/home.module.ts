import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';
import {PriceCardComponent} from './components/price-card/price-card.component';
import {StaticoComponent} from './components/price-card/statico/statico.component';
import {DynamoComponent} from './components/price-card/dynamo/dynamo.component';
import {AppWebComponent} from './components/price-card/app-web/app-web.component';
import {ProposCardComponent} from "./components/propos-card/propos-card.component";
import {SurmoiComponent} from "./components/propos-card/surmoi/surmoi.component";


@NgModule({
    declarations: [
        HomeComponent,
        PriceCardComponent,
        StaticoComponent,
        DynamoComponent,
        AppWebComponent,
        ProposCardComponent,
        SurmoiComponent
    ],
    imports: [
        CommonModule,
        NbCardModule,
        NbButtonModule,
        NbInputModule,
    ]
})
export class HomeModule {
}
