import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stream-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit 
{
  daysList: any[] = [
    { id: 1, name: 'Mon' },
    { id: 2, name: 'Tue' },
    { id: 3, name: 'Wed' },
    { id: 4, name: 'Thu' },
    { id: 5, name: 'Fri' },
    { id: 6, name: 'Sat' },
    { id: 0, name: 'Sun' },
  ];

  timeForm: FormGroup = new FormGroup({
    time_interval: new FormArray([]),
  });

  constructor() { }

  ngOnInit(): void 
  {
  }

  get timeInterval(): FormArray {
    return this.timeForm.get('time_interval') as FormArray;
  }

  addTime() 
  {
    this.timeInterval.push(
      new FormGroup({
        time_start: new FormControl(''),
        time_end: new FormControl(''),
        days: new FormArray([
          new FormControl([])
        ]),
      })
    );
  }

  removeTime(i: number)
  {
    this.timeInterval.removeAt(i);
  }
}