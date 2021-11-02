import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService<any>;
  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: BaseService, useValue: FirestoreStub },
      ],
    });
    service = TestBed.inject(BaseService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
