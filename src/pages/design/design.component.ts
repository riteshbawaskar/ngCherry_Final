import { TeststepService } from './../../services/teststep.service';
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

  constructor(private testcaseservice: TestcaseService, private teststepservice: TeststepService) { }
  onSelectedTest(test): void
  {
    this.selectedTest = test;
    console.log('in design selected test' + test._id);
    this.teststepservice.getSteps(test._id).subscribe(data => { this.teststeps = data; });
  }


  onSelectedSuite(suite): void
  {
    this.selectedSuite = suite;
    console.log('in design selected suite' + suite.id);
    this.testcaseservice.getTests(suite._id).subscribe(data => { this.testcases = data; });
  }

  ngOnInit() {
  }

}
