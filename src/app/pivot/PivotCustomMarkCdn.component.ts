import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";
import dataset from "../../../public/static/dataset";

const fields = {
  rows: ["form", "year"],
  columns: [{ id: "when", group: "dateByQuarter" }],
  values: [
    { id: "oil", method: "max" },
    { id: "oil", method: "min" },
  ],
};
const mark = function (cell, columnData, row, column) {
  if (column.method === "max") {
    var max = Math.max.apply(null, columnData);
    if (max === parseFloat(cell)) {
      return "biggestMaxCell";
    }
    return "customMaxCell";
  }
  if (cell < 10 && cell !== null) {
    return "mark";
  }
  return false;
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
  selector: "app-PivotCustomMarkCdn",
  template: ` <div class="dhx_sample-container__widget" #pivot></div> `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class PivotCustomMarkCdn implements OnDestroy {
  @ViewChild("pivot", { read: ElementRef })
  container: ElementRef;

  pivot: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js", "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css"]).then(() => {
      this.pivot = new dhx.Pivot(this.container.nativeElement, {
        data: dataset,
        fields,
        fieldList,
        mark,
      });
    });
  }

  ngOnDestroy() {
    this.pivot && this.pivot.destructor();
  }
}
