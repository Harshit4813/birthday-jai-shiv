import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, Clock, Crown } from "lucide-react";
import ReactCanvasConfetti from "react-canvas-confetti";

import Confetti from "react-confetti";

export default function BirthdayInvitationCard() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);
  const refAnimationInstance = useRef(null);

const makeFireworks = () => {
  if (!refAnimationInstance.current) return;

  const duration = 2000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval);
      return;
    }

    refAnimationInstance.current({
      particleCount: 60,
      spread: 160,
      startVelocity: 55,
      gravity: 0.8,
      ticks: 200,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.6
      },
      colors: [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff"
      ]
    });
  }, 250);
};



const handleOpen = () => {
  if (audioRef.current) {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  }

  setOpen(true);

  // CRAZY multiple waves
  setTimeout(makeFireworks, 200);
  setTimeout(makeFireworks, 1200);
  setTimeout(makeFireworks, 2200);
};



  return (
   <div className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
     style={{ perspective: 1200 }}>


      {/* 🎵 Music */}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />


      {/* 🎉 Confetti only when open */}
      {open && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}

      <ReactCanvasConfetti
  refConfetti={(instance) => {
    refAnimationInstance.current = instance;
  }}
  style={{
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 30,
    pointerEvents: "none",
  }}
/>


      {/* Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.15, 1], x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <img
          src="/1.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <motion.div
        className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* 🔥 OPEN BUTTON */}
   {/* 🔥 OPEN BUTTON */}
{!open && (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.6 }}
    className="z-20 relative flex flex-col items-center"
    style={{ perspective: 1000 }}
  >

    {/* Glow Behind */}
    <motion.div
      className="absolute w-64 h-20 bg-purple-600 rounded-xl blur-2xl opacity-40"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* 3D Button */}
    <motion.button
      whileHover={{ scale: 1.08, rotateX: 5 }}
      whileTap={{ scale: 0.9, rotateX: -8 }}
      onClick={handleOpen}
      className="relative px-12 py-5 rounded-xl 
      bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
      text-white text-xl font-bold shadow-2xl tracking-wide 
      border border-white/30 backdrop-blur-md"
      style={{ transformStyle: "preserve-3d" }}
    >
      🎁 Open Your Invitation
    </motion.button>

    <p className="text-gray-300 text-sm mt-4 animate-pulse">
      Tap to Reveal the Magic ✨
    </p>

  </motion.div>
)}

      {/* 🎉 CARD WITH ANIMATION */}
      <AnimatePresence>
        {open && (
            <motion.div
            initial={{ opacity: 0, rotateX: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden z-10 w-[92%] max-w-sm rounded-3xl 
            bg-white/10 backdrop-blur-xl border border-white/20 
            shadow-2xl p-6 flex flex-col justify-between text-white"
            >

            {/* Shine Effect */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rotate-45 blur-2xl"
              animate={{ x: [0, 300] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
            />

            {/* Glow Border */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-pink-500 opacity-40"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Content */}
            <div className="text-center relative z-10">

              {/* Profile */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <img
                  src="/1.jpg"
                  alt="Jai Shiv Tomar"
                  className="w-24 h-24 rounded-full border-4 border-pink-400 shadow-xl object-cover"
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold bg-gradient-to-r mt-3 from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2"
              >
                Birthday & Placement Party
              </motion.h1>

              {/* Crown */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-40 rounded-full"></div>
                <Crown className="mx-auto text-yellow-400 w-8 h-8 relative z-10" />
              </motion.div>

              <h2 className="text-2xl font-extrabold tracking-wide mt-1">
                Jai Shiv Tomar
              </h2>

              <p className="text-sm text-gray-200 my-2">
                Join us for a double celebration filled with joy & success 🎉✨
              </p>
            </div>

            {/* Event Details */}
            <div className="space-y-4 text-center relative z-10 mt-4">

              <motion.div whileHover={{ scale: 1.05 }} className="p-3 rounded-xl bg-white/10 border border-white/20 to-indigo-500">
                <CalendarDays className="mx-auto mb-1 text-pink-400" />
                <p className="text-sm font-semibold">
                  16 February 2026
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="p-3 rounded-xl bg-white/10  to-indigo-500">
                <Clock className="mx-auto mb-1 text-purple-400" />
                <p className="text-sm font-semibold">
                  7:00 PM – 10:00 PM
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="p-3 rounded-xl bg-white/10 border border-white/20  to-indigo-500 ">
                <MapPin className="mx-auto mb-1 text-indigo-400" />
                <p className="text-sm font-semibold">
                  Alpha-1,Greater Noida
                </p>
              </motion.div>

            </div>

            {/* RSVP Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg relative z-10 my-4"
            >
              Celebrate With Us 🎊
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
