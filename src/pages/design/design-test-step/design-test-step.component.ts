import { fuseAnimations } from './../../../theme/animation';
import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-design-test-step',
  templateUrl: './design-test-step.component.html',
  styleUrls: ['./design-test-step.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class DesignTestStepComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
