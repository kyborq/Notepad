import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTimeStamp } from '../../utils/times';
import { uuid4 } from '../../utils/uuid4';

export enum ENoteMode {
  NOTE = 'NOTE',
  TASK = 'TASK',
  IMAGE = 'IMAGE',
}

export type TTextElement = {
  id: string;
  text: string;
};

export type TImageElement = {
  id: string;
  image: string;
};

export type TTaskElement = {
  id: string;
  text: string;
  completed?: boolean;
};

export type TElement = TTextElement | TImageElement | TTaskElement;

export type TNote = {
  id: string;
  text: string;
  contents?: TElement[];
  mode?: ENoteMode;
  created?: string;
  updated?: string;
  deleted?: boolean;
};

export type TBook = {
  id: string;
  title: string;
  notes: TNote[];
  created?: string;
  updated?: string;
};

interface IBookState {
  books: TBook[];
  draft: TBook;
}

const initialState: IBookState = {
  books: [],
  draft: {
    id: 'draft',
    title: 'Черновик',
    created: getTimeStamp(),
    updated: getTimeStamp(),
    notes: [],
  },
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    createBook: (state, action: PayloadAction<string>) => {
      const title = action.payload;
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      const id = action.payload;
    },
    addNoteDraft: (state, action: PayloadAction<string>) => {
      const text = action.payload;

      const newNote: TNote = {
        id: uuid4(),
        created: getTimeStamp(),
        updated: getTimeStamp(),
        text,
      };

      state.draft.notes = [...state.draft.notes, newNote];
    },
    deleteNoteDraft: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      state.draft.notes = state.draft.notes.filter(notes => notes.id !== id);
    },
  },
});

export const { createBook, deleteBook, addNoteDraft, deleteNoteDraft } =
  bookSlice.actions;

export default bookSlice.reducer;
