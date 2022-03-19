
import React from "react"
import { minutesToDuration, secondsToDuration } from '../utils/duration';

// Displays information about the current session, or nothing, if session === null

export default function SessionTimer({ session, focusDuration, breakDuration, isTimerRunning, currentProgress }) {

    return (
      <>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        {session && (
          <div>
            <div className="row mb-2">
              <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                <h2 data-testid="session-title">
                  {`${session.label} for ${session.label === "Focusing" ? minutesToDuration(focusDuration) 
                                                                        : minutesToDuration(breakDuration)} minutes`}
                </h2>
                {/* TODO: Update message below correctly format the time remaining in the current session */}
                <p className="lead" data-testid="session-sub-title">
                  {`${secondsToDuration(session.timeRemaining)} remaining`}
                </p>
                {/* when pause button interrupts running timer, display 'paused' */}
                {!isTimerRunning && <h3>PAUSED</h3>}
              </div>
            </div>
            <div className="row mb-2">
              <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={currentProgress} // TODO: Increase aria-valuenow as elapsed time increases, use currentProgress prop
                    style={{ width: `${currentProgress}%` }} // TODO: Increase width % as elapsed time increases, use currentProgress prop
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
}