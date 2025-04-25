import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

export interface user {
  name: string,
  email: string,
  message: string
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  meassage = "";
  errors = false;
  sucess = false;
  wait = false;

  solve() {
    setTimeout(() => {
      this.errors = false
      this.wait = false;
      this.sucess = false
    }, 1500)
  }
  resetForm(form: NgForm): void {
    form.reset();
  }

  async send(data: user,form:NgForm) {
    if (data.email.includes("@gmail.com") && data.email.length > 10 && data.name.length > 2 && data.message.length > 2) {
      emailjs.init("-FXnYTnehRrNO6cvj");
      this.wait = true
      let res = await emailjs.send("service_d05c8zg", "template_uyjoohk", {
        name: data.name,
        email: data.email,
        message: data.message,
      }).then(() => {
          this.wait = false
          this.sucess = true
          this.resetForm(form)
          this.solve();
        },
        (error) => {
          this.meassage = "Please try again later";
          this.errors = true;
          this.solve();
        },
      );

    } else {
      if (data.name.length > 2 != true) {
        this.meassage = "Name";
        this.errors = true;
        this.solve();

      } else if (data.email.includes("@gmail.com") != true) {
        this.meassage = "Email";
        this.errors = true;
        this.solve();

      } else if (data.email.length > 10 != true) {
        this.meassage = "Email";
        this.errors = true;
        this.solve();

      } else if (data.message.length > 2 != true) {
        this.meassage = "Message";
        this.errors = true;
        this.solve();
      }
    }

  }


}


