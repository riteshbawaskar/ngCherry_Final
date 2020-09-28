import { fuseAnimations } from './../../../theme/animation';
import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './../../../core/modules/material.module';
import { SharedModule } from './../../../core/modules/shared.module';

@Component({
  selector: 'app-design-test-suite',
  templateUrl: './design-test-suite.component.html',
  styleUrls: ['./design-test-suite.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class DesignTestSuiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
