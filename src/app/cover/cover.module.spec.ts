import { CoverModule } from './cover.module';

describe('CoverModule', () => {
  let coverModule: CoverModule;

  beforeEach(() => {
    coverModule = new CoverModule();
  });

  it('should create an instance', () => {
    expect(coverModule).toBeTruthy();
  });
});
