import { ScenarioBenefitBase } from './scenario-benefit-base';

export interface CoverType extends ScenarioBenefitBase {
  categoryType: string;
  coverTypeId: string;
  displayLabel: string;
}
