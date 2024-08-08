"use client";
import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Reply from "@/components/Reply";
import Comment from "@/components/Comment";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
       <PostOwnner name="Sadanun Laksanaaree" studentId="660610795"/>
        {/* Comment Example */}
       <Comment/>

        {/* Reply Example */}
      <Reply/>
      <div className="d-flex gap-2 my-2">
          <img
            src= "/profileImages/charliebrown.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Charlie Brown</span>
            <br />
            <span>บ้าไปแล้ว... หรือเปล่า?</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">0 คน</span>
            </div>
          </div>
        </div>
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
