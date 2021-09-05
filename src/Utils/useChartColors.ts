const useChartColors = (colors: any, labels: any) => {
  const constantColors: {
    backgroundColor: Array<string>;
    borderColor: Array<string>;
  } = { backgroundColor: [], borderColor: [] };

  labels.forEach((l: string) => {
    constantColors.backgroundColor.push("rgba(" + colors[l] + ", 0.2)");
    constantColors.borderColor.push("rgba(" + colors[l] + ", 1)");
  });

  return constantColors;
};

export default useChartColors;
