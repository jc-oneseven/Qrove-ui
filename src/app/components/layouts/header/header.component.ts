import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MobileMenuService } from 'src/app/shared/services/mobile-menu.service';

const enum menuDirection {
  Left = 'left',
  Right = 'Right',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public innerWidth: any;
  showMenu: Observable<boolean>;

  // Window Size
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  // Outside click
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.elRef.nativeElement.contains(event.target)
      ? !this.showMenu
      : this.onMenuClose();
  }

  constructor(
    private mobileMenuService: MobileMenuService,
    private elRef: ElementRef
  ) {
    this.showMenu = this.mobileMenuService.getShowMenu();
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  toggleSideNav() {
    this.mobileMenuService.setShowMenu(true);
  }

  onMenuClose() {
    this.mobileMenuService.setShowMenu(false);
  }
}
