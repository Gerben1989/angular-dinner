import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output() navigate = new EventEmitter<string>();
    currentPage = 'recipes';

    onNavigate(page: string): void {
        this.currentPage = page;
        this.navigate.emit(page);
    }
}
