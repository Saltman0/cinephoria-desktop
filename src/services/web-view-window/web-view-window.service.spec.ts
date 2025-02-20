import { TestBed } from '@angular/core/testing';

import { WebViewWindowService } from './web-view-window.service';

describe('WebviewwindowService', () => {
  let service: WebViewWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebViewWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
