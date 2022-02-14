import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {TabelaComponent} from "../../componentes/tabela/tabela.component";

interface ContaRecorrente {
  id: string;
  descricao: string;
  dia: number;
  valor: number;
}

@Component({
  selector: 'app-conta-recorrente',
  templateUrl: './conta-recorrente.component.html',
  styleUrls: ['./conta-recorrente.component.css']
})
export class ContaRecorrenteComponent implements OnInit {
  dados: any[] = [];
  colunas: any[] = ['descricao', 'dia', 'valor', 'id'];

  URL = "http://localhost:8080/financas/contas-recorrentes";

  // @ts-ignore
  @ViewChild('tabela') tabela: TabelaComponent;

  form = this.fb.group({
    descricao: [''],
    dia: [''],
    valor: ['']
  });

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.busca();
  }

  private busca() {
    this.http.get<ContaRecorrente[]>(this.URL)
      .subscribe(dados => {
        this.dados = dados.map(dado => {
          return {
            'id': dado.id,
            'descricao': dado.descricao,
            'dia': dado.dia,
            'valor': dado.valor.toString().replace('.', ',')
          };
        })
        .sort((a, b) => a.valor > b.valor ? 1 : -1)
        .reverse();
      });

  }

  onSubmit() {
    let contaRecorrente = this.form.value;
    contaRecorrente.valor = contaRecorrente.valor.replace(',', '.');

    this.http.post(this.URL, contaRecorrente)
      .subscribe(value => this.busca());
  }

  deleta(){
    this.tabela.getSelectedRows()
      .forEach(value =>
        this.http.delete(this.URL + "/" + value.id)
          .subscribe(value => this.busca())
      );
  }

  atualiza() {
    this.busca();
  }
}
