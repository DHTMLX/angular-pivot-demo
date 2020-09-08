import { PivotInitCdn } from "../app/pivot/PivotInitCdn.component";
import { PivotLoadDataCdn } from "../app/pivot/PivotLoadDataCdn.component";
import { PivotExportCdn } from "../app/pivot/PivotExportCdn.component";
import { PivotSetDataCdn } from "../app/pivot/PivotSetDataCdn.component";
import { PivotStructureReloadCdn } from "../app/pivot/PivotStructureReloadCdn.component";
import { PivotCustomMarkCdn } from "../app/pivot/PivotCustomMarkCdn.component";
import { PivotCustomFormattingCdn } from "../app/pivot/PivotCustomFormattingCdn.component";
import { PivotFooterCdn } from "../app/pivot/PivotFooterCdn.component";
import { PivotEventsCdn } from "../app/pivot/PivotEventsCdn.component";
import { PivotGridEventsCdn } from "../app/pivot/PivotGridEventsCdn.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

export default {
  title: "Pivot",
  component: PivotInitCdn,
  decorators: [
    moduleMetadata({
      declarations: [
        PivotInitCdn,
        PivotLoadDataCdn,
        PivotExportCdn,
        PivotSetDataCdn,
        PivotStructureReloadCdn,
        PivotCustomMarkCdn,
        PivotCustomFormattingCdn,
        PivotFooterCdn,
        PivotEventsCdn,
        PivotGridEventsCdn,
      ],
      imports: [CommonModule],
    }),
  ],
};

export const initialization = () => ({
  component: PivotInitCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Pivot initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotInitCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__initialization.html#initializingpivot"
            target="_blank"
          >
            Initialization.
          </a>
          <a
            href="https://docs.dhtmlx.com/pivot/guides__loading_data.html#loadinginlinedata"
            target="_blank"
          >
            Loading Inline Data
          </a>
        </div>
      </div>
      <app-PivotInitCdn></app-PivotInitCdn>
    </section>
  `,
});

export const loadingData = () => ({
  component: PivotLoadDataCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Load data in Json and Csv formats</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotLoadDataCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__loading_data.html#externaldataloading"
            target="_blank"
          >
            External Data Loading
          </a>
        </div>
      </div>
      <app-PivotLoadDataCdn></app-PivotLoadDataCdn>
    </section>
  `,
});

export const exportData = () => ({
  component: PivotExportCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>You can export Pivot to the Excel or CSV format</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotExportCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__export.html"
            target="_blank"
          >
            Exporting Pivot
          </a>
        </div>
      </div>
      <app-PivotExportCdn></app-PivotExportCdn>
    </section>
  `,
});

export const setData = () => ({
  component: PivotSetDataCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>You can load inline data into Pivot after initialization via the setData method</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotSetDataCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__loading_data.html#loadinginlinedata"
            target="_blank"
          >
            Loading Inline Data
          </a>
        </div>
      </div>
      <app-PivotSetDataCdn></app-PivotSetDataCdn>
    </section>
  `,
});

export const structureReload = () => ({
  component: PivotStructureReloadCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Structure reload</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotStructureReloadCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/api__pivot_setfields.html"
            target="_blank"
          >
            SetFields.
          </a>
          <a
            href="https://docs.dhtmlx.com/pivot/api__pivot_setdata.html"
            target="_blank"
          >
            SetData
          </a>
        </div>
      </div>
      <app-PivotStructureReloadCdn></app-PivotStructureReloadCdn>
    </section>
  `,
});

export const customMark = () => ({
  component: PivotCustomMarkCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>You can specify your own function that will define the logic of applying styles to cells with certain values</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotCustomMarkCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__customization.html#conditionalformattingofcells"
            target="_blank"
          >
            Conditional Formatting of Cells.
          </a>
          <a
            href="https://docs.dhtmlx.com/pivot/api__pivot_mark_config.html"
            target="_blank"
          >
            Mark
          </a>
        </div>
      </div>
      <app-PivotCustomMarkCdn></app-PivotCustomMarkCdn>
    </section>
  `,
});

export const customFormatting = () => ({
  component: PivotCustomFormattingCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>It is possible to set custom format for values of cells</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotCustomFormattingCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__customization.html#customformatforcells"
            target="_blank"
          >
            Custom Format for Cells.
          </a>
          <a
            href="https://docs.dhtmlx.com/pivot/api__pivot_customformat_config.html"
            target="_blank"
          >
            CustomFormat
          </a>
        </div>
      </div>
      <app-PivotCustomFormattingCdn></app-PivotCustomFormattingCdn>
    </section>
  `,
});

export const footer = () => ({
  component: PivotFooterCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>You can specify a footer row for the grid of pivot to show a total result of the operation set for a column</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotFooterCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__configuration.html#totaloperationpercolumn"
            target="_blank"
          >
            Total Operation per Column
          </a>
        </div>
      </div>
      <app-PivotFooterCdn></app-PivotFooterCdn>
    </section>
  `,
});

export const events = () => ({
  component: PivotEventsCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Pivot events</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotEventsCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/api__refs__pivot_events.html"
            target="_blank"
          >
            Events
          </a>
        </div>
      </div>
      <app-PivotEventsCdn></app-PivotEventsCdn>
    </section>
  `,
});

export const gridEvents = () => ({
  component: PivotGridEventsCdn,
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Grid events</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/angular-pivot-demo/blob/master/src/app/pivot/PivotGridEventsCdn.component.ts"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/api__refs__grid_events.html"
            target="_blank"
          >
            Grid Events
          </a>
        </div>
      </div>
      <app-PivotGridEventsCdn></app-PivotGridEventsCdn>
    </section>
  `,
});
