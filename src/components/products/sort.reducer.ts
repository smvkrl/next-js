import { EOrder } from '@/enums/order';
import { ESort } from '@/enums/sort';
import { ProductModel } from '@/interfaces/product.interface';

export interface SortActions {
  type: ESort;
  payload: EOrder;
}

export interface ISortReducerState {
  sort: ESort;
  order: EOrder;
  products: ProductModel[];
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
        order: action.payload,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating
            ? action.payload == EOrder.Asc
              ? 1
              : -1
            : action.payload == EOrder.Asc
            ? -1
            : 1,
        ),
      };
    case ESort.Price:
      return {
        ...state,
        sort: ESort.Price,
        order: action.payload,
        products: state.products.sort((a, b) =>
          a.price > b.price
            ? action.payload == EOrder.Asc
              ? -1
              : 1
            : action.payload == EOrder.Asc
            ? 1
            : -1,
        ),
      };
    default:
      throw new Error('Неверный тип сортировки');
  }
};
