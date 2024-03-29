import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Focus from "./Focus";
import Break from "./Break";
import SessionTimer from "./SessionTimer";
import PlayPauseButtons from "./PlayPauseButtons";
import StopButton from "./StopButton";

// These functions are defined outside of the component to ensure they do not have access to state
// and are, therefore, more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */
function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}

/**
 * Higher-order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */
function nextSession(focusDuration, breakDuration) {
  /**
   * State function to transition the current session type to the next session. e.g. On Break -> Focusing or Focusing -> On Break
   */
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
    };
  };
}

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // The current session - null where there is no session running
  const [session, setSession] = useState(null);

  // ToDo: Allow the user to adjust the focus and break duration.
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  //track the progress value for the progress bar
  const [progressPercent, setProgressPercent] = useState(0);

  const focusDecrease = () => {
    setFocusDuration(Math.max(5, focusDuration - 5));
  };
  const focusIncrease = () => {
    setFocusDuration(Math.min(60, focusDuration + 5));
  };

  const breakDecrease = () => {
    setBreakDuration(Math.max(1, breakDuration - 1));
  };
  const breakIncrease = () => {
    setBreakDuration(Math.min(15, breakDuration + 1));
  };

  /**
   * Custom hook that invokes the callback function every second
   *
   * NOTE: You won't need to make changes to the callback function
   */
  useInterval(() => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      setProgressPercent(100 - (100 * session.timeRemaining / (session.label === "Focusing" ? (focusDuration * 60) : (breakDuration * 60))));

      return setSession(nextTick);
      
    },
    isTimerRunning ? 1000 : null  //!! reset to 1000 for final version
  );

  /**
   * Called whenever the play/pause button is clicked.
   */
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  //when stop is clicked, setSession to null, stop the running timer
  function stopButtonHandler () {
    setSession(null);
    setIsTimerRunning(false);
  }

  return (
    <div className="pomodoro">
      <div className="row mb-3">
        <Focus 
          focusIncrease = {focusIncrease}
          focusDecrease = {focusDecrease}
          focusDuration = {focusDuration}
          isTimerRunning = {isTimerRunning} 
          />
        <Break 
          breakIncrease = {breakIncrease}
          breakDecrease = {breakDecrease}
          breakDuration = {breakDuration}
          isTimerRunning = {isTimerRunning} 
          />
      </div>
      <div className="row justify-content-center">
        <div
          className="btn-group btn-group-lg mb-4"
          role="group"
          aria-label="Timer controls"
          >
          <PlayPauseButtons
            playPause={playPause}
            isTimerRunning={isTimerRunning} 
            />
          <StopButton
            isTimerRunning={isTimerRunning}
            stopButtonHandler={stopButtonHandler} 
            />
        </div>
      </div>
      <SessionTimer
        session = {session}
        focusDuration = {focusDuration}
        breakDuration = {breakDuration}
        isTimerRunning = {isTimerRunning}
        currentProgress = {progressPercent}
        />
    </div>
  );
}

export default Pomodoro;