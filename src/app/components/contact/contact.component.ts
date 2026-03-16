import { Component } from '@angular/core';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    const serviceID = 'service_dqe8kf4';
    const templateID = 'template_3yz14ai';
    const publicKey = 'b79aJwjgiuScrZdGv';

    const templateParams = {
      title: 'New Contact Message', 
      name: this.form.name,
      email: this.form.email,
      message: this.form.message
    };


    emailjs.send(serviceID, templateID, templateParams, publicKey)
  .then(() => {
    alert('Message sent successfully!');
    this.form = { name: '', email: '', message: '' };
  })
  .catch((error) => {
    console.error('EmailJS Error:', error);
    alert('Message sending failed.');
  });
  }
}





