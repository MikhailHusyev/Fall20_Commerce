import { NgModule } from '@angular/core';
import { SidePanelComponent } from './side_panel/sidepanel.component';
import { RouterModule } from '@angular/router';
import { privateRoutes } from './private.routes';
@NgModule({
  imports: [RouterModule.forRoot(privateRoutes)],
  exports: [],
  declarations: [SidePanelComponent],
  providers: [],
})
export class PrivateModule {}
