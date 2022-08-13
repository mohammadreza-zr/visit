import React, { useEffect, useRef, useState } from "react";

import "./VisitContent.style.scss";

import CameraController from "../../CameraController/CameraController";
import { Icons, Images, Videos } from "../../../assets";
import Modal from "../../Modal/Modal";
import { useSocket } from "../../../hooks";

const VisitContent: React.FC = () => {
  const [zoomStep, setZoomStep] = useState<number>(1);
  const [goUp, setGoUp] = useState<number>(0);
  const [goLeft, setGoLeft] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const videoRef = useRef<any>(null);

  const socket = useSocket("https://robos.upkeytech.com", {
    reconnectionAttempts: 5,
    reconnectionDelay: 5000,
    autoConnect: true,
    transports: ["websocket"],
  });

  useEffect(() => {
    socket.on("client.room.id", (data: any[]) => {
      console.log("client.room.id", data);
    });

    socket.on("server.room.controll", (data: any[]) => {
      console.log("server.room.controll", data);
    });
    socket.on("room.controll", (data: any[]) => {
      console.log("room.controll", data);
    });

    return () => {};
  }, [socket]);

  const test = () => {
    socket.emit("client.room.id", "JlxfosUi5fTcDwmMAACZ");
    socket.emit("client.room.id", {
      room: socket.id,
      action: "up",
    });
  };

  const handleFullScreenVideo = () => {
    test();

    if (!fullScreen) {
      setFullScreen(true);
    } else {
      setFullScreen(false);
      setZoomStep(1);
      videoRef.current.style.transform = `scale(1)`;
    }
  };

  const handleZoomIn = () => {
    if (zoomStep >= 2) {
      if (!fullScreen) {
        setGoUp(0);
        setGoLeft(0);
        return;
      }
    }

    setZoomStep(zoomStep + 0.2);
    const zoom = zoomStep + 0.2;
    videoRef.current.style.transform = `scale(${zoom}) translateY(${goUp}px) translateX(${goLeft}px)`;
  };
  const handleZoomOut = () => {
    if (zoomStep <= 1) {
      if (!fullScreen) {
        setGoUp(0);
        setGoLeft(0);
        return;
      }
    }

    setZoomStep(zoomStep - 0.2);
    const zoom = zoomStep - 0.2;
    videoRef.current.style.transform = `scale(${zoom}) translateY(${goUp}px) translateX(${goLeft}px)`;
  };

  const handleGoUpVideo = (state: boolean) => {
    if (zoomStep <= 1 || zoomStep >= 2) return;

    setGoUp(state ? goUp + 10 : goUp - 10);
    const up = state ? goUp + 10 : goUp - 10;
    videoRef.current.style.transform = `scale(${zoomStep}) translateY(${up}px) translateX(${goLeft}px)`;
  };
  const handleGoLeftVideo = (state: boolean) => {
    if (zoomStep <= 1 || zoomStep >= 2) return;

    setGoLeft(state ? goLeft + 10 : goLeft - 10);
    const left = state ? goLeft + 10 : goLeft - 10;
    videoRef.current.style.transform = `scale(${zoomStep}) translateY(${goUp}px) translateX(${left}px)`;
  };

  return (
    <>
      <div className="visit-content">
        <div
          className={`visit-content__video-container ${
            fullScreen ? "visit-content__video-container__video--full" : ""
          }`}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            className="visit-content__video-container__video"
            style={fullScreen ? { height: "100%", border: "none" } : {}}
          >
            <source src={Videos.SampleVideo} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
        <div className="visit-content__settings">
          <CameraController
            handleGoUpVideo={handleGoUpVideo}
            handleGoLeftVideo={handleGoLeftVideo}
          />
          <div
            className={`visit-content__settings__actions ${
              fullScreen ? "visit-content__settings__actions--full" : ""
            }`}
          >
            <span onClick={handleZoomIn}>
              <img src={Icons.SearchZoomIn} alt="" />
            </span>
            <span onClick={handleZoomOut}>
              <img src={Icons.SearchZoomOut} alt="" />
            </span>
            <span onClick={handleFullScreenVideo}>
              <img src={fullScreen ? Icons.Minimize : Icons.Maximize} alt="" />
            </span>
          </div>
          <div
            onClick={() => setOpenModal(true)}
            className="visit-content__settings__view"
          >
            <p>View The Results</p>
            <img src={Icons.ArrowBottom} alt="" />
          </div>
        </div>
      </div>
      {openModal && (
        <Modal close={() => setOpenModal(false)}>
          <div className="modal-header">
            <div className="modal-header__content">
              <img src={Images.HeroRobot} alt="" />
              <h2>RoboMed</h2>
              <p>February 17, 2009 - 08:00 PM</p>
            </div>
            <div className="modal-header__action">
              <span>
                <img src={Icons.Printer} alt="" />
              </span>
              <span onClick={() => setOpenModal(false)}>
                <img src={Icons.Close} alt="" />
              </span>
            </div>
          </div>
          <div className="modal-body">
            <h3 className="modal-body__title">Health Facility</h3>
            <div className="modal-body__content">
              <div className="modal-body__content__name">
                <span>HF Name</span>
                <span>HF Name</span>
                <span>HF Name</span>
                <span>HF Name</span>
              </div>
              <div className="modal-body__content__value">
                <span>blood banks</span>
                <span>blood banks</span>
                <span>blood banks</span>
                <span>blood banks</span>
              </div>
            </div>
            <h3 className="modal-body__title">Health Facility</h3>
            <div className="modal-body__content">
              <div className="modal-body__content__name">
                <span>HF Name</span>
                <span>HF Name</span>
                <span>HF Name</span>
                <span>HF Name</span>
              </div>
              <div className="modal-body__content__value">
                <span>blood banks</span>
                <span>blood banks</span>
                <span>blood banks</span>
                <span>blood banks</span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default VisitContent;
