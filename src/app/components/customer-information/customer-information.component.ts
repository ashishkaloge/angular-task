import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/shared/api-service.service';
@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {
  customerForm!: FormGroup;
  customerModel: any;
  customerDetails: any;
  showSaveBtn: boolean = true;
  showUpdateBtn: boolean = false;
  customer!:any;

  constructor(private api: ApiServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllCustomerDetails();
    this.createCustomerForm();
    this.api.getCustomer().subscribe((res)=>{
      this.customer=res;
    }) 
  }
  createCustomerForm() {
    this.customerForm = this.fb.group({
      id: [''],
      name: [''],
      description: [''],
      status: [''],
      rate: [],
      balance: [],
    });
  }
  getAllCustomerDetails() {
    this.api.getAllCustomer().subscribe(res => {
      this.customerDetails = res;
      console.log(this.customerDetails);
    }, err => {
      console.log(err);
    })
  }

  postCustomerDetails() {
    this.customerModel = Object.assign({}, this.customerForm.value);

    this.api.postCustomer(this.customerModel).subscribe(res => {
      alert("Student Information added successfully");
      let close = document.getElementById("close");
      close?.click();
      this.customerForm.reset();
      this.getAllCustomerDetails();
    }, err => {
      alert("Error");
    })
  }
  deleteCustomerDetails(id: any) {
    this.api.deleteCustomer(id).subscribe(res => {
      alert("Customer information deleted successfully");
      this.getAllCustomerDetails();
    }, err => {
      alert("failed to delete")
    })
  }
  editCustomerDetails(customer: any) {
    this.showSaveBtn = false;
    this.showUpdateBtn = true;
    this.customerForm.controls['id'].setValue(customer.id);
    this.customerForm.controls['name'].setValue(customer.name);
    this.customerForm.controls['description'].setValue(customer.description);
    this.customerForm.controls['status'].setValue(customer.status);
    this.customerForm.controls['rate'].setValue(customer.rate);
    this.customerForm.controls['balance'].setValue(customer.balance);
  }
  updateCustomerDetails() {
    this.customerModel = Object.assign({}, this.customerForm.value);
    this.api.updateCustomer(this.customerModel, this.customerModel.id).subscribe(
      res => {
        alert("Customer Information Update Syccessfully");
        let close = document.getElementById("close");
        close?.click();
        this.getAllCustomerDetails();
        this.customerForm.reset();
        this.customerModel = {};
      }, err=> {
        alert("error in Updating")
      }
    )
  }
  onAddClick(){
    this.showSaveBtn=true;
    this.showUpdateBtn=false;
  }
  reset(){
    this.customerForm.reset();
    this.customerModel={};
  }
  searchText:any ='';

}
