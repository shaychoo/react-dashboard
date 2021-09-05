import { Action, action, computed, Computed, thunk, Thunk } from "easy-peasy";
import data from "./mocupData";

export interface ChartsDataModel {
  rawData: Array<any>;
  filterBy: any;
  filterdData: Computed<ChartsDataModel, any>;
  applyFilte: Action<ChartsDataModel, any>;
  loadData: Thunk<ChartsDataModel, any>;
  // Vdata: Computed<ChartsDataModel, any>;
  // genderData: Computed<ChartsDataModel, any>;
  ChartData: Computed<ChartsDataModel, any>;
  // labels: Computed<ChartsDataModel, any>;
  // dataValues: Computed<ChartsDataModel, any>;
  // deleteTask: Action<ChartsDataModel, any>;
}

const getDataset = (arr, p) => {
  let x: any[] = [];
  arr.forEach((a) => {
    x[a[p]] = (x[a[p]] || 0) + 1;
  });
  return x;
};

const getLabels = (d) => {
  Object.keys(d);
};

const props: Array<any> = ["gender", "title", "country"];

const chartsData: ChartsDataModel = {
  rawData: data,
  filterBy: {},

  loadData: thunk((state, payload, any) => {}),

  /*
  ACTIONS
  */
  applyFilte: action((state, filterToAdd) => {
    state.filterBy = { ...state.filterBy, ...filterToAdd };
  }),

  /*
  COMPUTED
  */

  filterdData: computed((state) => {
    let filterdData = [...state.rawData];
    if (Object.keys(state.filterBy).length > 0) {
      Object.keys(state.filterBy).map(
        (filterLiteral) =>
          (filterdData = filterdData.filter(
            (f: any) =>
              f[filterLiteral] == state.filterBy[filterLiteral] ||
              state.filterBy[filterLiteral] === -1
          ))
      );

      return filterdData;
    } else return state.rawData;
  }),

  ChartData: computed((state) => {
    let x = {};
    props.map((p) => {
      let res = getDataset(state.filterdData, p);
      let labels = Object.keys(res);
      let data = Object.keys(res).map((x) => res[x]);

      x[p] = [data, labels];
    });
    return x;
  })
};

export default chartsData;
