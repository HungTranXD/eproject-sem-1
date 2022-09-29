import {Component, Input, OnInit} from '@angular/core';


interface listourteam {
  memberName : string;
  positionOne : string;
  positionTwo : string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {



  @Input() listOurteam : listourteam[] = [
    {memberName : 'Tran Hung', positionOne : 'Leader', positionTwo : 'Software Developer'},
    {memberName : 'Vu Xuan Dong', positionOne : 'Member', positionTwo : 'Software Developer'},
    {memberName : 'Nguyen Duy Quoc', positionOne : 'Member', positionTwo : 'Software Developer'},
    {memberName : 'Nguyen Hong Quang', positionOne : 'Member', positionTwo : 'Software Developer'},
    {memberName : 'Nguyen Truong Giang', positionOne : 'Member', positionTwo : 'Software Developer'},
    {memberName : 'Trinh Quang Hoa', positionOne : 'Supervisor', positionTwo : 'Instructor'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
