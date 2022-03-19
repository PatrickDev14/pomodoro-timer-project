import React from "react";

export default function StopButton ({ isTimerRunning, stopButtonHandler }) {
    return (
        <>
        {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
        {/* TODO: Disable the stop button when there is no active session */}
            <button
                type="button"
                className="btn btn-secondary"
                data-testid="stop"
                title="Stop the session"
                disabled={!isTimerRunning}
                onClick={stopButtonHandler}
              >
            <span className="oi oi-media-stop" />
            </button>
        </>
    )
}