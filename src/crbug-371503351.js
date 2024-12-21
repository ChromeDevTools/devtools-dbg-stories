const CORS_ERROR_URL = "http://www.example.com";

async function corsUncaughtFetch() {
  return await fetch(CORS_ERROR_URL);
}

async function corsCaughtFetch() {
  try {
    await corsUncaughtFetch();
  } catch (e) {
    return console.log("Caught error from fetch", e);
  }
}

function corsUncaughtXHRSync() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", CORS_ERROR_URL, false);
  xhr.send();
}

function corsCaughtXHRSync() {
  try {
    corsUncaughtXHRSync();
  } catch (e) {
    console.log("Caught error from synchronous XHR", e);
  }
}

function corsXHRAsyncWithoutError() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", CORS_ERROR_URL);
  xhr.send();
  return xhr;
}

function corsXHRAsyncWithError() {
  const xhr = corsXHRAsyncWithoutError();
  xhr.onerror = function onerror(event) {
    console.log("Error handler triggered from asynchronous XHR", event);
  };
}

const HTTP_404_URL = `${document.location.origin}/this-document-does-not-exist`;

async function http404FetchWithoutOkOrStatusOrStatusTextRead() {
  const response = await fetch(HTTP_404_URL);
  return response;
}

async function http404FetchWithOkRead() {
  const response = await http404FetchWithoutOkOrStatusOrStatusTextRead();
  if (response.ok) {
    console.log("fetch response was ok");
  } else {
    console.log("fetch response was not ok");
  }
}

async function http404FetchWithStatusRead() {
  const response = await http404FetchWithoutOkOrStatusOrStatusTextRead();
  console.log("fetch response status is", response.status);
}

async function http404FetchWithStatusTextRead() {
  const response = await http404FetchWithoutOkOrStatusOrStatusTextRead();
  console.log("fetch response statusText is", response.statusText);
}
