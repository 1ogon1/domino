export class Slider {
    constructor(_min: number, _max: number, _step: number) {
      this.max = _max;
      this.min = _min;
      this.step = _step;
  
      this.value = 0;
    }
  
    min: number;
    max: number;
    step: number;
  
    value: number;
  }