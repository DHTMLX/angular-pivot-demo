import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";

const fields = {
  rows: ["form", "name"],
  columns: ["year", { id: "when", group: "dateByQuarter" }],
  values: [
    { id: "oil", method: "max" },
    { id: "oil", method: "min" },
  ],
};

const fieldList = [
  { id: "name", label: "Name" },
  { id: "year", label: "Year" },
  { id: "continent", label: "Continent" },
  { id: "form", label: "Form" },
  { id: "gdp", label: "GDP" },
  { id: "oil", label: "Oil" },
  { id: "balance", label: "Balance" },
  { id: "when", label: "When", type: "date", format: "%d/%m/%Y" },
];

@Component({
  selector: "app-PivotLoadDataCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="loadCSV()">Load CSV</button>
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="loadJSON()">Load JSON</button>
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="restore()">Restore</button>
      </section>
      <div class="dhx_sample-container__widget" #pivot></div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class PivotLoadDataCdn implements OnDestroy {
  @ViewChild("pivot", { read: ElementRef })
  container: ElementRef;

  pivot: any;
  wait: Promise<void>;

  loadCSV() {
    this.pivot.load(
      "./static/dataset.csv",
      new dhx.data.CsvDriver({
        names: ["name", "year", "continent", "form", "gdp", "oil", "balance", "when"],
      })
    );
  }

  loadJSON() {
    this.pivot.load("./static/dataset.json");
  }

  restore() {
    this.pivot.setData([]);
  }

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js", "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css"]).then(() => {
      this.pivot = new dhx.Pivot(this.container.nativeElement, {
        fields,
        fieldList,
      });
    });
  }

  ngOnDestroy() {
    this.pivot && this.pivot.destructor();
  }
}
