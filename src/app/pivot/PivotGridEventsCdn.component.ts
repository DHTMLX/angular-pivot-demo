import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, ViewEncapsulation } from "@angular/core";
import fromCDN from "from-cdn";
import dataset from "../../../public/static/dataset";

const fields = {
  rows: ["form", "name"],
  columns: ["year"],
  values: [
    { id: "oil", method: "count" },
    { id: "oil", method: "sum" },
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
const layout = {
  liveReload: false,
};
const eventsArray = [
  "scroll",
  "sort",
  "expand",
  "filterChange",
  "beforeResizeStart",
  "resize",
  "afterResizeEnd",
  "cellClick",
  "cellRightClick",
  "cellMouseOver",
  "cellMouseDown",
  "cellDblClick",
  "headerCellClick",
  "footerCellClick",
  "headerCellMouseOver",
  "footerCellMouseOver",
  "headerCellMouseDown",
  "footerCellMouseDown",
  "headerCellDblClick",
  "footerCellDblClick",
  "headerCellRightClick",
  "footerCellRightClick",
  "beforeEditStart",
  "afterEditStart",
  "beforeEditEnd",
  "afterEditEnd",
  "beforeKeyDown",
  "afterKeyDown",
];

@Component({
  selector: "app-PivotGridEventsCdn",
  template: `
    <div class="dhx-container_inner">
      <section class="dhx_sample-controls">
        <button class="dhx_sample-btn dhx_sample-btn--flat" (click)="clearAll()">Clear events</button>
      </section>
      <div class="dhx-events">
        <div class="dhx_sample-container__widget" #pivot></div>
        <div class="dhx_sample-container__sidebar">
          <div class="events-list--element" *ngIf="this.isEmpty">
            No events yet
          </div>
          <div class="events-list--element dhx_sample-event" *ngFor="let event of events">
            <p>{{ event.name }}</p>
            <p>{{ event.value }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class PivotGridEventsCdn implements OnDestroy {
  @ViewChild("pivot", { read: ElementRef })
  container: ElementRef;

  pivot: any;
  wait: Promise<void>;

  isEmpty = true;
  events = [];

  clearAll() {
    this.isEmpty = true;
    this.events.length = 0;
  }

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js", "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css"]).then(() => {
      this.pivot = new dhx.Pivot(this.container.nativeElement, {
        data: dataset,
        fields,
        fieldList,
        layout,
      });

      eventsArray.forEach(event => {
        this.pivot.grid.events.on(event, (...args) => {
          this.isEmpty = false;
          args = args.map(item => (item = JSON.stringify(item)));
          this.events = [{ name: event, value: `${args}` }].concat(this.events);
        });
      });
    });
  }

  ngOnDestroy() {
    this.pivot && this.pivot.destructor();
  }
}
