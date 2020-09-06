import {AlertComponent} from './assignments/first/alert/alert.component';
import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ServerComponent} from './aux-components/server/server.component';
import {ServersComponent} from './aux-components/servers/servers.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        AlertComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'My app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My app');
  }));
  it('should render Welcome to the course assignments! 📓 in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the course assignments! 📓');
  }));
});
