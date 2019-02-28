import { imageaction } from './../actions';

export const loadimages = () => { type: imageaction.LOAD }
export const loadimagesSuccess = images => { type: imageaction.LOAD_SUCCESS; payload: images }
export const loadimagesError = error => { type: imageaction.LOAD_FAILURE; payload: error }
