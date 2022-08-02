import { FC } from "react";

import "./CameraController.style.scss";
import Arrow from "./block/arrow";
import { Position } from "./block/position.enum";
import Capture from "./block/Capture";

interface cameraController {
  handleGoUpVideo: any;
  handleGoLeftVideo: any;
}

const CameraController: FC<cameraController> = ({
  handleGoUpVideo,
  handleGoLeftVideo,
}) => {
  return (
    <div className="camera-controller">
      <div className="camera-controller__left">
        <div
          className="camera-controller__left__top"
          onClick={() => handleGoUpVideo(true)}
        >
          <Arrow position={Position.up} />
        </div>
        <div
          className="camera-controller__left__bottom"
          onClick={() => handleGoLeftVideo(true)}
        >
          <Arrow position={Position.right} />
        </div>
      </div>
      <div className="camera-controller__right">
        <div
          className="camera-controller__right__top"
          onClick={() => handleGoLeftVideo(false)}
        >
          <Arrow position={Position.left} />
        </div>
        <div
          className="camera-controller__right__bottom"
          onClick={() => handleGoUpVideo(false)}
        >
          <Arrow position={Position.down} />
        </div>
      </div>
      <div className="camera-controller__center">
        <Capture />
        <span>Capture</span>
      </div>
    </div>
  );
};

export default CameraController;
