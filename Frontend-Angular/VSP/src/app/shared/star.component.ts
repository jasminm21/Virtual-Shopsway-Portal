import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() notify=new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
        // console.log(this.starWidth);
        // console.log(this.rating);
    }

    onCLick(){
        this.notify.emit('The star '+this.rating+' is clicked...');
    }
}