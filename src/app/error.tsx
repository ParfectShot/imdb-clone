"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: any; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h1>Something went wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default Error;
