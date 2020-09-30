import { TestStep } from './../../models/test-step';
import { TestcaseService } from './../../services/testcase.service';
import { TestCase } from './../../models/test-case';
import { TestSuite } from './../../models/test-suite';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from './../../theme/animation';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations : fuseAnimations,
})
export class DesignComponent implements OnInit {

  selectedSuite: TestSuite;
  selectedTest: TestCase;
  testcases: TestCase[] = [];
  teststeps: TestStep[] = [];

  constructor(private testcaseservice: TestcaseService) { }

  onSelectedSuite(suite): void
  {
    this.selectedSuite = suite;
    console.log('in design selected suite' + suite.id);
    this.testcaseservice.getTests(suite._id).subscribe(data => { this.testcases = data; });
  }

  ngOnInit() {
  }

}
