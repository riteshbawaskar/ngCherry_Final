import { fuseAnimations } from './../../../theme/animation';
import { Component, OnInit , Input, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-design-test-case',
  templateUrl: './design-test-case.component.html',
  styleUrls: ['./design-test-case.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class DesignTestCaseComponent implements OnInit {

  @Input() suitepanel;
  @Input() suite;
  constructor() { }

  ToggleSuitePanel(): void { this.suitepanel.toggle(); }

  ngOnInit() {
  }

}
