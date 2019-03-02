import { imageaction } from './../actions';

export const loadimages = nextPageNumber => ({ type: imageaction.LOAD, payload: nextPageNumber })
export const loadimagesSuccess = images => ({ type: imageaction.LOAD_SUCCESS, payload: images })
export const loadimagesError = error => ({ type: imageaction.LOAD_FAILURE, payload: error })
