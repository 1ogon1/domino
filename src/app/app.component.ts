import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Slider } from './model/Slider';
import { Square } from './model/Square';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ])
  ],
})
export class AppComponent {
  rotateValue: number = 0;

  speed: Slider = new Slider(0, 9, 1);
  scale: Slider = new Slider(0, 5, 0.5);

  showSquares: boolean = false;

  squares: Array<Square> = [
    new Square(1, 'one'),
    new Square(2, 'two'),
    new Square(3, 'three'),
    new Square(4, 'four'),
    new Square(5, 'five'),
    new Square(6, 'six')
  ]

  topSquare: Square = this.squares[0];
  bottomSquare: Square = this.squares[0];

  rotate = (value: number): void => {
    this.rotateValue += value;
  }

  getTransform = (): string => {
    let value: number = 1;

    if (this.scale.value != 0) {
      value += this.scale.value / 10;
    }

    return `rotate(${this.rotateValue}deg) scale(${value})`;
  }

  getTransition = (): string => {
    let value: number = 0.1;

    if (this.speed.value != 0) {
      value += this.speed.value / 10;
    }

    return `${value}s ease all`
  }

  setSquare = (square: Square, position: 'top' | 'bottom') => {
    if (position === 'top') {
      this.topSquare = new Square(square.count.length, square.class);
    } else if (position === 'bottom') {
      this.bottomSquare = new Square(square.count.length, square.class);
    }
  }
}