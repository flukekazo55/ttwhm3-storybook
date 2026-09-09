import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ChronicleService } from '../../../services/chronicle/chronicle.service';
import { getErrorMessage } from '../../utils/get-error-message';
import {
  loadChapters,
  loadChaptersSuccess,
  loadChaptersFailure,
} from './chronicle.action';

@Injectable()
export class ChronicleEffects {
  private actions$ = inject(Actions);
  private service = inject(ChronicleService);

  loadChapters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChapters),
      switchMap(() =>
        this.service.getChapters().pipe(
          map((chapters) => loadChaptersSuccess({ chapters })),
          catchError((error: unknown) =>
            of(loadChaptersFailure({ error: getErrorMessage(error) }))
          )
        )
      )
    )
  );
}
