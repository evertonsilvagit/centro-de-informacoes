import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {dateComparator, toString} from "../../util/dateutil";
import {TabelaComponent} from "../../componentes/tabela/tabela.component";

interface Treino {
  id: string;
  tipo: string;
  data: string;
  tempo: string;
  distancia: string;
}

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css']
})
export class TreinoComponent implements OnInit {
  dados: any[] = [];
  colunas: any[] = ['id', 'tipo', 'data', 'distancia', 'tempo'];

  URL = "http://localhost:8080/saude/treino";

  // @ts-ignore
  @ViewChild('tabela') tabela: TabelaComponent;

  form = this.fb.group({
    data: [''],
    tipo: ['CORRIDA'],
    distancia: [''],
    tempo: ['']
  });

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.busca();
  }

  private busca() {
    this.http.get<Treino[]>(this.URL)
      .subscribe(dados => {
        this.dados = dados.map(dado => {
          return {
            'id': dado.id,
            'tipo': dado.tipo,
            'data': dado.data,
            'distancia': dado.distancia.toString().replace('.', ',') + ' km',
            'tempo': dado.tempo.toString().replace('.', ':')
          };
        })
        .sort((a, b) => dateComparator(a.data, b.data))
        .reverse();
      });

  }

  onSubmit() {
    let treino = this.form.value;
    treino.data = toString(new Date(treino.data));
    treino.distancia = treino.distancia.replace(',', '.');
    treino.tempo = treino.tempo.replace(':', '.');

    this.http.post(this.URL, treino)
      .subscribe(value => this.busca());
  }

  deleta(){
    this.tabela.getSelectedRows()
      .forEach(value => this.http.delete(this.URL + "/" + value.id)
                                    .subscribe(value => this.busca())
      );
  }

  atualiza() {
    this.busca();
  }
}
