import { NgModule } from "@angular/core";
import {
	RouterModule,
	Routes,
} from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { AddComponent } from "./pages/add/add.component";
import { EditComponent } from "./pages/edit/edit.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "add", component: AddComponent },
	{ path: "edit/:id", component: EditComponent },
	{ path: "about", component: AboutComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
