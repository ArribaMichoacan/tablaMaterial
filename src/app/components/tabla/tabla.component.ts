import { Component, ViewChild } from '@angular/core';
import { Alambron } from '../interfaces.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

const sourceData : Alambron [] = [
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
  {
    entrega : '1',
    material : 'askjdsk',
    toneladas : '90',
    chofer : 'ramon',
    coment : '',
    cliente : 'pedron antrax',
    noTrasporte : '3232',
    tipo_transp : '344',
    arriboAlmacenFecha : '121',
    arriboAlmacenHora : '10pm',
    placas : 'aok1020',
    fechaTara : '2024',
    horaTara : '5:00pm',
    streg : 'z',
    stlbg : 'x',
    status : 'true'
  },
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  displayColumns : string [] = [
    'entrega',
    'material',
    'toneladas',
    'chofer',
    'coment',
    'cliente',
    'noTransporte',
    'tipo_transporte',
    'arriboAlmacenFecha'
  ]
  //dataSource = sourceData;

  sourceData: MatTableDataSource<Alambron>;

  constructor(){
     // Inicializar datos y tabla
     this.sourceData = new MatTableDataSource<Alambron>(this.getData());
  }

  getData() : Alambron[] {
    return sourceData;
  }

  ngAfterViewInit() {
    this.sourceData.paginator = this.paginator;
  }
}
