import PositionInFile from "./PositionInFile";

export interface IHavePosition {
  position: PositionInFile;
}

export interface FlowGraphNumeration {
  pre: number;
  post: number;
}
