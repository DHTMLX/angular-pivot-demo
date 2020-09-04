import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";
import dataset from "../../../public/static/dataset";

const fields = {
  rows: ["form", "name"],
  columns: ["year"],
  values: [{id: "oil", method: "count"}, {id: "gdp", method: "sum"}],
};
const fieldList = [
  {id: "name", label: "Name"},
  {id: "year", label: "Year"},
  {id: "continent", label: "Continent"},
  {id: "form", label: "Form"},
  {
    id: "gdp", label: "GDP", cellTemplate: function(val) {
      return "&euro; " + val;
    },
  },
  {id: "oil", label: "Oil"},
  {id: "balance", label: "Balance" },
  {id: "when", label: "When", type: "date", format: "%d/%m/%Y"},
];
const customFormat = function(cellValue, method) {
  if (method === "count") {
    return cellValue;
  }
  return cellValue.toLocaleString("de");
};
const layout = {
  footer: true,
};

@Component({
  selector: "app-PivotCustomFormattingCdn",
  template: `
    <div class="dhx_sample-container__widget" #pivot></div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class PivotCustomFormattingCdn implements OnDestroy {
  @ViewChild("pivot", { read: ElementRef })
  container: ElementRef;

  pivot: any;
  wait: Promise<void>;

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
        customFormat,
        layout
      });
    });
  }

  ngOnDestroy() {
    this.pivot && this.pivot.destructor();
  }
}
