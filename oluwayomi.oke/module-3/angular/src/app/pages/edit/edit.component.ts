import { Component, OnInit } from "@angular/core";
import {
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import {
	ActivatedRoute,
	ParamMap,
	Router,
} from "@angular/router";
import { ContactService } from "src/app/service/restapi.service";

@Component({
	selector: "app-edit",
	templateUrl: "./edit.component.html",
	styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
	editId: any;

	editForm: FormGroup = new FormGroup({
		fullname: new FormControl(
			"",
			Validators.required
		),
		email: new FormControl("", Validators.required),
		phone: new FormControl("", Validators.required),
	});

	constructor(
		private contactService: ContactService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe(
			(params: ParamMap) => {
				this.editId = params.get("id");

				this.contactService
					.getContactById(this.editId)
					.subscribe(
						(res) => {
							this.editForm.controls[
								"fullname"
							].setValue(res.fullname);

							this.editForm.controls[
								"email"
							].setValue(res.email);
							this.editForm.controls[
								"phone"
							].setValue(res.phone);

							console.log(res, this.editForm);
						},
						(err) => {
							console.log(
								"Error occurred while retreiving contact by Id ",
								err
							);
						}
					);
			}
		);

		//this.contact = this.service.getallContacts.sub(x => x.id == this.editId)
	}

	updateSubmit() {
		const req = { ...this.editForm.value };
		console.log(req);

		this.contactService
			.updateContact(req, this.editId)
			.subscribe(
				(res) => {
					console.log(
						"contact updated successfully ",
						res
					);

					this.router.navigate(["/"]);
				},
				(err) => {
					console.log(
						"Error occurred update contact ",
						err
					);
				}
			);
	}
}
