export class Square {
    constructor(_count: number, _class: string) {
      this.count = Array(_count).map((x, i) => i);
      this.class = _class;
    }
    count = [];
    class = '';
  }