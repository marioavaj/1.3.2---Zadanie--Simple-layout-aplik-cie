import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-structural',
    templateUrl: './structural.component.html',
    styleUrls: ['./structural.component.scss'],
})
export class StructuralComponent implements OnInit {
    newHead = 'back';
    mask = false;
    hero = new Image();
    elvis = new Image();
    harry = new Image();
    back = new Image();
    medicalMask = new Image();

    constructor() {}

    ngOnInit(): void {
        this.hero.src = '/assets/Img/lego/hero.jpg';
        this.elvis.src = '/assets/Img/lego/elvis.jpg';
        this.harry.src = '/assets/Img/lego/harry.jpg';
        this.back.src = '/assets/Img/lego/standard.jpg';
        this.medicalMask.src = '/assets/Img/lego/mask.png';
    }

    head(value: string) {
        this.newHead = value;
    }

    maskHidden() {
        this.mask = !this.mask;
    }
}
