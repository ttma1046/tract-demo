import { ScenarioModule } from './scenario.module';

describe('ScenarioModule', () => {
  let scenarioModule: ScenarioModule;

  beforeEach(() => {
    scenarioModule = new ScenarioModule();
  });

  it('should create an instance', () => {
    expect(scenarioModule).toBeTruthy();
  });
});
