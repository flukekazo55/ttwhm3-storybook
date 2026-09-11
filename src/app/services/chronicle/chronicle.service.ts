import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Chapter } from '../../shared/stores/chronicle/chronicle.model';
import { DAWI_CHAPTERS } from './dawi.data';

@Injectable({ providedIn: 'root' })
export class ChronicleService {
  constructor(private http: HttpClient) {}

  // Static fan-made content — the chapter list is bundled, so it is served
  // as an observable rather than fetched over HTTP.
  getChapters(): Observable<Chapter[]> {
    return of(DAWI_CHAPTERS);
  }
}
