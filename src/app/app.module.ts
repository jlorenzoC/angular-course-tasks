import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AlertComponent} from './assignments/first/alert/alert.component';
import {DatabindingsComponent} from './assignments/second/databindings/databindings.component';
import {ListItemComponent} from './aux-components/list-item/list-item.component';
import {ServerComponent} from './aux-components/server/server.component';
import {ServersComponent} from './aux-components/servers/servers.component';
import {ToggleParagraphComponent} from './assignments/third/directives/toggle-paragraph/toggle-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertComponent,
    DatabindingsComponent,
    ListItemComponent,
    ToggleParagraphComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
