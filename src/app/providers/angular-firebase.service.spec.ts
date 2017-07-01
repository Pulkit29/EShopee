import { TestBed, inject } from '@angular/core/testing';

import { AngularFirebaseService } from './angular-firebase.service';

describe('AngularFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFirebaseService]
    });
  });

  it('should ...', inject([AngularFirebaseService], (service: AngularFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
