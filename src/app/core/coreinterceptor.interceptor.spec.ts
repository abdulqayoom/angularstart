import { TestBed } from '@angular/core/testing';

import { CoreinterceptorInterceptor } from './coreinterceptor.interceptor';

describe('CoreinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CoreinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CoreinterceptorInterceptor = TestBed.inject(CoreinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
