import { ESort } from '@/enums/sort';
import { IProductModel } from '@/interfaces/product.interface';

export interface SortActions {
  type: ESort;
  payload: boolean;
}

export interface ISortReducerState {
  sort: ESort;
  isOrderDesc: boolean;
  products: IProductModel[];
}

export const sortReducer = (
  state: ISortReducerState,
  action: SortActions,
): ISortReducerState => {
  switch (action.type) {
    case ESort.Rating:
      return {
        ...state,
        sort: ESort.Rating,
        isOrderDesc: action.payload,
        products: state.products
          .slice()
          .sort((a, b) =>
            a.initialRating > b.initialRating
              ? action.payload
                ? 1
                : -1
              : action.payload
              ? -1
              : 1,
          ),
      };
    case ESort.Price:
      return {
        ...state,
        sort: ESort.Price,
        isOrderDesc: action.payload,
        products: state.products
          .slice()
          .sort((a, b) =>
            a.price > b.price
              ? action.payload
                ? -1
                : 1
              : action.payload
              ? 1
              : -1,
          ),
      };
    default:
      throw new Error('Неверный тип сортировки');
  }
};
