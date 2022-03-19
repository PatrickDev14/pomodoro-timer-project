
import React from "react"
import {minutesToDuration} from "../utils/duration"

export default function Focus({focusIncrease, focusDecrease, focusDuration, isTimerRunning}) {
    return (
      <>
        <div className="col">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-focus">
                Focus Duration: {minutesToDuration(focusDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing focus duration and disable during a focus or break session
                    disabled when isTimerRunning is true */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-focus"
                  onClick = {focusDecrease}
                  disabled = {isTimerRunning}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing focus duration  and disable during a focus or break session 
                    disabled when isTimerRunning is true */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-focus"
                  onClick = {focusIncrease}
                  disabled = {isTimerRunning}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
        </div>
      </>
    )
}