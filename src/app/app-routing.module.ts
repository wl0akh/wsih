import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { DishComponent } from './dish/dish.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
						{ path: '', component: HomeComponent },
						{ path: 'dish', component: DishComponent }
					   ];

@NgModule({
	  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
