import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CopyToClipboardComponent } from './copy-to-clipboard.component';

describe('CopyToClipboardComponent', () => {
  let component: CopyToClipboardComponent;
  let fixture: ComponentFixture<CopyToClipboardComponent>;

  beforeEach(async(() => {
    TestBed
      .overrideComponent(CopyToClipboardComponent, {
        set: {
          template: '',
        },
      })
      .configureTestingModule({
        declarations: [CopyToClipboardComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyToClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
