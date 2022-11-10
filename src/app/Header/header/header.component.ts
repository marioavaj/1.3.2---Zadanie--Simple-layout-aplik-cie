import { Component, OnInit } from '@angular/core';
import { ModalLogInComponent } from 'src/app/modal-window/ModalLogiIn/modal-log-in/modal-log-in.component';
import { ModalLogOutComponent } from 'src/app/modal-window/ModalLogOut/modal-log-out/modal-log-out.component';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ModalService } from 'src/app/Services/modal.service';
import { ShopingCartServiceService } from 'src/app/Services/shoping-cart-service.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    toolTipData: any;
    isLogged: boolean;
    name: String;

    constructor(
        private tooltipDataFromService: ShopingCartServiceService,
        private modal: ModalService,
        private isLoggedService: AuthenticationService,
        private userStream: UserService
    ) {}

    ngOnInit(): void {
        this.isLoggedService.authenticationStream.subscribe((value) => {
            this.isLogged = value;
        });

        this.tooltipDataFromService.dataStream.subscribe((newValue) => {
            if (newValue == undefined) {
                this.toolTipData = [];
            } else this.toolTipData = newValue;
        });

        if (localStorage.getItem('Dk4kdoSkf5*gjd')){
            this.isLogged = true;

        }
    }

    openLogInModal() {
        this.modal.openDialog(ModalLogInComponent);
    }

    openLogOutModal() {
        this.modal.openDialog(ModalLogOutComponent);
    }
}
