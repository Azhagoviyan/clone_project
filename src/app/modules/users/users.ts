import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { Button } from '../../components/common/button/button';
import { Filter } from '../../components/common/filter/filter';
import { Search } from '../../components/common/search/search';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddUser } from './add-user/add-user';
import { Column, Table } from '../../components/common/table/table';



interface User {
  name: string;
  username: string;
  email: string;
  role: string;
  lastLogin: string;
  initials: string;
  color: string;
}

interface NewUser {
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
  userRole: string;
}


@Component({
  selector: 'app-users',
  imports: [FormsModule, MatButtonModule, MatDrawer, CommonModule,
    MatSelectModule, MatMenuModule, MatIconModule, MatInputModule,
    MatTableModule, MatSidenavModule, MatFormFieldModule, ReactiveFormsModule,
    AddUser, Search, Filter, Button,Table],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  searchText = '';
  selectedRole = 'All Roles';

  roles = ['All Roles', 'Administrator', 'Manager', 'User', 'Read Only'];

  users: User[] = [
    {
      name: 'Raja Kumar',
      username: 'raja.kumar',
      email: 'raja.kumar@alertops.com',
      role: 'Administrator',
      lastLogin: '11/05/2025 04:11 PM',
      initials: 'RK',
      color: 'bg-blue-500'
    },
    {
      name: 'Sarah Johnson',
      username: 'sarah.johnson',
      email: 'sarah.johnson@alertops.com',
      role: 'Manager',
      lastLogin: '11/04/2025 02:30 PM',
      initials: 'SJ',
      color: 'bg-green-500'
    },
    {
      name: 'Mike Chen',
      username: 'mike.chen',
      email: 'mike.chen@alertops.com',
      role: 'User',
      lastLogin: '11/03/2025 10:15 AM',
      initials: 'MC',
      color: 'bg-purple-500'
    },
    {
      name: 'Emily Davis',
      username: 'emily.davis',
      email: 'emily.davis@alertops.com',
      role: 'User',
      lastLogin: '10/28/2025 09:00 AM',
      initials: 'ED',
      color: 'bg-orange-500'
    },
    {
      name: 'James Wilson',
      username: 'james.wilson',
      email: 'james.wilson@alertops.com',
      role: 'Read Only',
      lastLogin: 'Never',
      initials: 'JW',
      color: 'bg-pink-500'
    }
  ];

  export() {
  console.log('Export clicked');
}

bulkAdd() {
  console.log('Bulk Add clicked');
}

 

  filterBySearch(users: User[]) {
  return users.filter(user =>
    user.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

 filterByRole(users: User[]) {
  return users.filter(user =>
    this.selectedRole === 'All Roles' ||
    user.role === this.selectedRole
  );
}
 get filteredUsers() {
  let filtered = this.filterByRole(this.users);
  filtered = this.filterBySearch(filtered);
  return filtered;
}


  useEmailAsUsername = false;

  newUser: NewUser = {
    email: '',
    firstName: '',
    lastName: '',
    userType: '',
    userRole: '',
  };


columns: Column[] = [];


@ViewChild('nameTemplate',{static:true}) nameTemplate!: TemplateRef<any>;



 @ViewChild('drawer') drawer!: MatDrawer;

  openDrawer() {
    this.drawer.open();
  }

  closeDrawer() {
    this.drawer.close();
    this.resetForm();
  }


  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

    ngOnInit() {
  this.userForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userType: ['', Validators.required],
    userRole: ['', Validators.required],
    useEmailAsUsername: [true],
    username:['']
  });

  this.userForm.get('useEmailAsUsername')?.valueChanges.subscribe((checked) => {
  const usernameControl = this.userForm.get('username');

  if (!checked) {
    usernameControl?.setValidators([Validators.required]);
  } else {
    usernameControl?.clearValidators();
    usernameControl?.setValue('');
  }

  usernameControl?.updateValueAndValidity();
});


this.columns = [
    {
      key: 'name',
      label: 'Name',
      type: 'custom',
      template: this.nameTemplate
    },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'lastLogin', label: 'Last Login' }
  ];
}

  submitUser() {

    if (this.userForm.invalid) {
  this.userForm.markAllAsTouched();
  return;
}
      const form = this.userForm.value;

    const initials = (form.firstName[0] + form.lastName[0]).toUpperCase();
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-teal-500'];
    const color = colors[this.users.length % colors.length];
 
    const roleMap: Record<string, string> = {
      administrator: 'Administrator',
      manager: 'Manager',
      user: 'User',
      read_only: 'Read Only',
    };
 
    this.users = [
      ...this.users,
      {
        name: `${form.firstName} ${form.lastName}`,
        username: form.useEmailAsUsername
          ? form.email
          : form.username,
          
        email: form.email,
        role: roleMap[form.userRole] ?? form.userRole,
        lastLogin: 'Never',
        initials,
        color,
      },
    ];
 
    this.closeDrawer();
  }
 
  
  addAnotherUser() {
    this.submitUser();
    this.resetForm();
    this.drawer.open();
  }
 
  private resetForm() {
   this.userForm.reset({
    useEmailAsUsername: true
   });
   
  }

}
