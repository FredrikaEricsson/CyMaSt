import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogService } from 'src/app/services/blog.service';
import { MockBlogService } from 'src/app/services/MockBlogService';
import { BlogsComponent } from './blogs.component';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogsComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: BlogService, useClass: MockBlogService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have blogs', () => {
    expect(component.blogs.length).toBe(4);
    expect(component.blogs[0].title).toBe('Blog1');
  });
  it('should display blogs', () => {
    let aTag: HTMLHeadingElement =
      fixture.nativeElement.querySelector('.blogLink');
    expect(aTag.innerText).toBe('Blog1');
  });
});
