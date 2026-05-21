import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../../../components/common/input/input';
import { Button } from '../../../components/common/button/button';
import { Select } from '../../../components/common/select/select';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule,MatCheckboxModule,MatIconModule,
             InputComponent,Select,Button],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {

  userForm = input.required<FormGroup>();
  
  submitUserEvent = output<void>();
  addAnotherUserEvent = output<void>();
  closeDrawerEvent = output<void>();

  get emailControl(): FormControl {
    return this.userForm().get('email') as FormControl;
  }

  get useEmailControl(): FormControl {
    return this.userForm().get('useEmailAsUsername') as FormControl;
  }

  get userNameControl(): FormControl {
    return this.userForm().get('username') as FormControl;
  }

  get firstNameControl(): FormControl {
    return this.userForm().get('firstName') as FormControl;
  }

  get lastNameControl(): FormControl {
    return this.userForm().get('lastName') as FormControl;
  }

  get userTypeControl(): FormControl {
    return this.userForm().get('userType') as FormControl;
  }

  get userRoleControl(): FormControl {
    return this.userForm().get('userRole') as FormControl;
  }

  onCloseDrawer() {
    this.closeDrawerEvent.emit();
  }

  onAddAnotherUser() {
    this.addAnotherUserEvent.emit();
  }

  onSubmitUser() {
    this.submitUserEvent.emit();
  }

}
