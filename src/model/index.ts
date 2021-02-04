import chartsData, { ChartsDataModel } from "./chartsData";

export interface StoreModel {
  chartsData: ChartsDataModel;
}

const model: StoreModel = {
  chartsData
};

export default model;
