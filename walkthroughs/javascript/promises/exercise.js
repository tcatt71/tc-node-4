class DisconnectError extends Error {
  constructor(message = "User Disconnected") {
    super(message);
  }
}

async function watchTutorial() {
  let userWatchingLiveStream = Math.round(Math.random());

  if (userWatchingLiveStream) {
    return "Thumbs up and Subscribe";
  } else {
    throw new DisconnectError();
  }
}

watchTutorial()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    if (err instanceof DisconnectError) console.error(err.message);
    else console.error("Server error, try again later.");
  });
