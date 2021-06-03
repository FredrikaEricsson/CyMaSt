import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogService } from './blog.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireStoreStub } from 'src/app/services/MockBlogService';

describe('BlogService', () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AngularFirestore, useValue: FireStoreStub }],
    });
    service = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
