import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverRoutingModule } from './cover-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCover from './selectors';
import * as fromCoverType from './reducers/cover-type.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoverTypeEffects } from './effects/cover-type.effects';

@NgModule({
  imports: [
    CommonModule,
    CoverRoutingModule,
    StoreModule.forFeature('cover', fromCover.reducers, { metaReducers: fromCover.metaReducers }),
    StoreModule.forFeature('coverType', fromCoverType.reducer),
    EffectsModule.forFeature([CoverTypeEffects])
  ],
  declarations: []
})
export class CoverModule { }
