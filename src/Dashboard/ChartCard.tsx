import { Card, CardHeader, CardContent } from "@material-ui/core";

const ChartCard = (props: any) => {
  return (
    <Card>
      <CardHeader
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
        title={props.title}
      ></CardHeader>
      <CardContent style={{ height: "25vh" }}>{props.children}</CardContent>
    </Card>
  );
};

export default ChartCard;
