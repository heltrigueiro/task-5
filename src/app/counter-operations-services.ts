import {OnInit} from '@angular/core';

export class CounterOperationsServices implements OnInit {
  timesActiveToInactive = 0;
  timesInactiveToActive = 0;

  incrementTimesActiveToInactive() {
    this.timesActiveToInactive += 1;
    console.log(this.timesActiveToInactive);
  }

  incrementTimesInactiveToActive() {
    this.timesInactiveToActive += 1;
    console.log(this.timesInactiveToActive);
  }

  ngOnInit(): void {
    this.timesActiveToInactive = 0;
    this.timesInactiveToActive = 0;
  }
}
