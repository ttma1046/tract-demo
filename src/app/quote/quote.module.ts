import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBenefits from './reducers/benefits.reducer';
import { BenefitsEffects } from './effects/benefits.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('benefits', fromBenefits.reducer),
    EffectsModule.forFeature([BenefitsEffects]),
  ],
  declarations: []
})
export class QuoteModule { }
