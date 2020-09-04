import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";
import dataset from "../../../public/static/dataset";

const fields = {
  rows: ["form", "year"],
  columns: [{"id": "when", "group": "dateByQuarter"}],
  values: [{id: "oil", method: "max"}, {id: "oil", method: "min"}],
};

const mark = {
  min: "min_cell",
  max: "max_cell",
};

const fieldList = [
  {id: "name", label: "Name"},
  {id: "year", label: "Year"},
  {id: "continent", label: "Continent"},
  {id: "form", label: "Form"},
  {id: "gdp", label: "GDP"},
  {id: "oil", label: "Oil"},
  {id: "balance", label: "Balance"},
  {id: "when", label: "When", type: "date", format: "%d/%m/%Y"},
];

@Component({
  selector: "app-PivotExportCdn",
  template: `
    <div class="dhx-container_inner export">
      <section class="dhx_sample-controls">
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="runExport('xlsx')">Export xlsx</button>
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="runExport('csv')">Export csv</button>
      </section>
      <div class="dhx_sample-container__widget" #pivot></div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class PivotExportCdn implements OnDestroy {
  @ViewChild("pivot", { read: ElementRef })
  container: ElementRef;

  pivot: any;
  wait: Promise<void>;

  runExport(type) {
    if (type === "xlsx") {
      this.pivot.export.xlsx({
        url: "//export.dhtmlx.com/excel",
      });
    }
    if (type === "csv") {
      this.pivot.export.csv();
    }
  }

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js",
      "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css",
    ]).then(() => {
      this.pivot = new dhx.Pivot(this.container.nativeElement, {
        data: dataset,
        fields,
        fieldList,
        mark
      });
    });
  }

  ngOnDestroy() {
    this.pivot && this.pivot.destructor();
  }
}
