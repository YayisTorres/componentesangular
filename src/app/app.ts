import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAutocomplete } from './mat-autocomplete/mat-autocomplete';
import { BadgeComponent } from "./badge/badge.component";
import { BottomSheetComponent } from "./bottom-sheet/bottom-sheet.component";
import { ButtonComponent } from "./button/button.component";
import { ButtonToggleComponent } from "./button-toggle/button-toggle.component";
import { CardComponent } from "./card/card.component";
import { CheckBoxComponent } from "./check-box/check-box.component";
import { ChipsComponent } from "./chips/chips.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { DialogComponent } from "./dialog/dialog.component";
import { DividerComponent } from "./divider/divider.component";
import { ExpacionPanelComponent } from "./expancion-panel/expacion-panel.component";
import { FormFieldComponent } from "./form-field/form-field.component";
import { GridListComponent } from "./grid-list/grid-list.component";
import { IconComponent } from "./icon/icon.component";
import { InputComponent } from "./input/input.component";
import { ListComponent } from "./list/list.component";
import { MenuComponent } from "./menu/menu.component";
import { PaginatorComponent } from "./paginator/paginator.component";
import { ProgresBarComponent } from "./progress-bar/progres-bar.component";
import { ProgressSpinnerComponent } from "./progress-spinner/progress-spinner.component";
import { RadioButtonComponent } from "./radio-button/radio-button.component";
import { SelectComponent } from "./select/select.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { SliderComponent } from "./slider/slider.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { SortHeaderComponent } from "./sort-header/sort-header.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TableComponent } from "./table/table.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { TreeComponent } from "./tree/tree.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAutocomplete, BadgeComponent,
        BottomSheetComponent,
        ButtonComponent,
        ButtonToggleComponent,
        CardComponent,
        CheckBoxComponent,
        ChipsComponent,
        DatePickerComponent,
        DialogComponent,
        DividerComponent,
        ExpacionPanelComponent,
        FormFieldComponent,
        GridListComponent,
        IconComponent,
        InputComponent,
        ListComponent,
        MenuComponent,
        PaginatorComponent,
        ProgresBarComponent,
        ProgressSpinnerComponent,
        RadioButtonComponent,
        SelectComponent,
        SidenavComponent,
        SlideToggleComponent,
        SliderComponent,
        SnackbarComponent,
        SortHeaderComponent,
        StepperComponent,
        TableComponent,
        TabsComponent,
        ToolbarComponent,
        TooltipComponent,
        TreeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'projectnaterial';
}
