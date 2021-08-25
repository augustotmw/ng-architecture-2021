import { createAction, props } from '@ngrx/store';

export const actionTypes = {
  showErrorMessage: '[Shared] Show Error Message',
  showSuccessMessage: '[Shared] Show Success Message',
};

export const showErrorMessage = createAction(
  actionTypes.showErrorMessage,
  props<{ message: string, error?: any }>()
);

export const showSuccessMessage = createAction(
  actionTypes.showSuccessMessage,
  props<{ message: string }>()
);
