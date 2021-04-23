import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {dateComparator} from '../../util/dateutil';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  // @ts-ignore
  @ViewChild('agGrid') agGrid: AgGridAngular;

  @Input() dados: any[] = [];
  @Input() colunas: any[] = [];

  columnDefs: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.columnDefs = this.colunas.map(value => {
      return {
        'field': value,
        'sortable': true,
        'filter': true,
        'checkboxSelection': this.isCheckboxSelection(value),
        'comparator': this.getComparator(value)
      };
    })
  }

  private getComparator(value: string) {
    if(value === 'data') {
      return dateComparator;
    }
    return 0;
  }

  private isCheckboxSelection(value: string): boolean {
    return value === 'id';
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    return selectedNodes.map(node => node.data);
  }
}
