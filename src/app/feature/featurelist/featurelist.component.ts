import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { Folder } from '../model/folder';

@Component({
  selector: 'app-featurelist',
  templateUrl: './featurelist.component.html',
  styleUrls: ['./featurelist.component.scss']
})
export class FeaturelistComponent implements OnInit {

  notes: Note[] = [];
  folders: Folder[] = [];
  show = true;

  constructor() { }

  ngOnInit() {
    this.folders = [
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      { name: 'folder1', updated: true },
      { name: 'fodler2', updated: false },
      { name: 'folder3', updated: true },
      { name: 'folder4', updated: false },
      
    ];

    this.notes = [
      { name: 'note1', updated: true },
      { name: 'note2', updated: false },
      { name: 'note3', updated: true },
      { name: 'note4', updated: false },
    ];
  }

  toggle(){
    console.log('called');
    this.show = !this.show;
  }

}
