import { Component, OnInit } from '@angular/core';

import {Entry} from '../shared/entry.model';
import {EntryService } from '../shared/entry.service';
import { elementAttribute } from '@angular/core/src/render3';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  public entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAll().subscribe( 
      entries => this.entries = entries,
      error => alert('Ocorreu um erro ao carregar uma lista: ' + error)
    )
  }

  deleteEntry(entry){
    const mustDelete = confirm("Deseja realmente excluir este item?");

    if (mustDelete){
      this.entryService.delete(entry.id).subscribe(
        () => this.entries = this.entries.filter(element => element != entry),
        () => alert("Ocorreu ao tentar excluir")
    )}
  }

}
