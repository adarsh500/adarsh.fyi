"use client";

import { useEffect, useRef, useState } from "react";

enum WorkerMessagePostType {
  REGISTER = "register",
}

type SessionWorkerMessage = {
  type: WorkerMessagePostType;
  data: object;
};

const WorkerClient = () => {
  const worker = useRef<SharedWorker | null>(null);

  const postMessage = (eventData: SessionWorkerMessage) => {
    const { type, data } = eventData;
    worker.current?.port?.postMessage({
      type,
      data,
    });
  };

  useEffect(() => {
    const sharedWorker = new SharedWorker(
      new URL("./worker.shared.js", import.meta.url)
    );

    worker.current = sharedWorker;
    postMessage({
      type: WorkerMessagePostType.REGISTER,
      data: {},
    });

    worker.current.port.onmessage = (e) => {
      console.log(e, e.data);
    };

    return () => {
      worker.current?.terminate?.();
    };
  });

  return <></>;
};

export default WorkerClient;
