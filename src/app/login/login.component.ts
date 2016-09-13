import { Component, EventEmitter } from '@angular/core';



@Component({
    selector: 'login',
    styleUrls: [
        '../../flex/flex.css',
        './login.style.css'
    ],
    template: `
        <div class="container">
            <header class="row">
                Tipp: &nbsp;<b>Tab</b>&nbsp; f&uuml;hrt direkt zur gw&uuml;nschten Eingabe, &nbsp;<b>Enter</b>&nbsp;         schlie&szlig;t sie ab.

            </header>

            <main class="row">
                <left class="col-1"></left>
                <md-card class="col-4 pad">
                    <md-card-title>Anmelden mit Personalnummer</md-card-title>
                    <md-card-subtitle>
                        f&uuml;r Monteure ohne Care-Zugang oder f&uuml;r Arbeiten,<br>
                        die keine besonderen Berechtigungen erfordern
                    </md-card-subtitle>
                    <md-card-content>
                        <md-input #pnr
                            placeholder="Personalnummer"
                            id="pnr"
                            md-autofocus autofocus
                            (keypress)="keypressPnr($event, pnr)"
                        ></md-input>
                        <md-icon (click)="submitPnr(pnr)">keyboard_return</md-icon>
                    </md-card-content>
                </md-card>
                <middle class="col-1"></middle>
                <md-card class="col-4 pad">
                    <md-card-title>Care-Login</md-card-title>
                    <md-card-subtitle>
                        f&uuml;r Service-Berater und andere Care-Benutzer<br>
                        Berechtigungen ergeben sich aus Care-Personalstamm
                    </md-card-subtitle>
                    <md-card-content>
                        <md-input #login placeholder="Care-Benutzer"></md-input>
                        &nbsp;&nbsp;
                        <md-input #password
                            type="password"
                            placeholder="Passwort"
                            (keypress)="keypressLogin($event, login, password)"
                        ></md-input>
                        <md-icon id="login_enter" (click)="submitLogin(login, password)">keyboard_return</md-icon>
                    </md-card-content>
                </md-card>
                <right class="col-2"></right>
                <footer class="row footer"></footer>
            </main>
        </div>`
})
export class LoginComponent {
    ngOnInit() {
        document.getElementById("pnr").focus(); //does not work
    }

    keypressPnr($event, pnr) {
        if ($event.key === "Enter") {
            this.submitPnr(pnr);
        }
    }

    submitPnr(pnr) {
        console.log('Pnr ' + pnr.value);
        //pnr.value = '';
    }

    keypressLogin($event, login, password) {
        if ($event.key === "Enter") {
            this.submitLogin(login, password);
        }
    }

    submitLogin(login, password) {
        console.log('Login ' + login.value + ' - Passwort ' + password.value);
        //login.value = '';
        //password.value = '';
    }
}
