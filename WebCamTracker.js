import React, { useEffect } from 'react';
import * as faceMesh from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';

const WebcamTracker = () => {
  useEffect(() => {
    const videoElement = document.getElementById('videoInput');
    const canvasElement = document.getElementById('outputCanvas');
    const canvasCtx = canvasElement.getContext('2d');

    const faceMeshModel = new faceMesh.FaceMesh({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMeshModel.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMeshModel.onResults((results) => {
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
      if (results.multiFaceLandmarks) {
        for (const landmarks of results.multiFaceLandmarks) {
          // Process landmarks to determine attention
        }
      }
    });

    if (typeof videoElement !== 'undefined' && videoElement !== null) {
      const camera = new cam.Camera(videoElement, {
        onFrame: async () => {
          await faceMeshModel.send({ image: videoElement });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <div>
      <video id="videoInput" autoPlay playsInline muted></video>
      <canvas id="outputCanvas" width="640" height="480"></canvas>
    </div>
  );
};

export default WebcamTracker;
