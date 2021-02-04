import { Action, action, computed, Computed } from "easy-peasy";
import data from "./mocupData";

export interface ChartsDataModel {
  chartsData: Array<any>;
  Vdata: Computed<ChartsDataModel, any>;
  labels: Computed<ChartsDataModel, any>;
  dataValues: Computed<ChartsDataModel, any>;
  deleteTask: Action<ChartsDataModel, any>;
}
//d.map(a => { x[a.gender] = (x[a.gender] || 0 ) + 1})
const chartsData: ChartsDataModel = {
  chartsData: data, //{ Gold: 12, Blue: 50, Yellow: 3, Green: 5, Purple: 2, Orange: 3 },

  Vdata: computed((state) => {
    let x: any[] = [];
    let p = "gender";
    state.chartsData.forEach((a) => {
      x[a[p]] = (x[a[p]] || 0) + 1;
    });
    return x;
  }),
  labels: computed((state) => Object.keys(state.Vdata)),
  dataValues: computed((state) =>
    Object.keys(state.Vdata).map((x) => state.Vdata[x])
  ),

  deleteTask: action((state, payload) => {})
};

export default chartsData;
